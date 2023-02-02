import {API_URL} from "../../config/config.js";

class Table extends HTMLElement {

    constructor() {
        super();
        this.shadow = this.attachShadow({ mode: 'open' });
        this.dataTable = [];
    }

    static get observedAttributes() { return ['url']; }

    // Cuando
    connectedCallback() {
        
        document.addEventListener("newUrl",( event =>{
            this.setAttribute('url', event.detail.url);
        }));
    }

    attributeChangedCallback(name, oldValue, newValue){
        if(newValue !== "null"){
            this.loadData().then(() => this.render());
        }
    }

    async loadData(){

        let url = `${API_URL}${this.getAttribute('url')}`;

        let response = await fetch(url, {
            headers: {
                "Authorization": "Bearer " + sessionStorage.getItem("accessToken"),
            }
        });
        
        let data = await response.json();
        this.dataTable = data.rows;
    }

	
    render() {

        this.shadow.innerHTML = 
        `
        <style>
        * {
            box-sizing:border-box;
            word-break:break-all;
        }
        .items-list {
            padding: 1rem;
            list-style-type: none;
            border:1px solid rgba(0,0,0,.2);
            border-radius:5px;
            margin-top:0;
            margin-bottom:0;
            box-shadow:border-box;
            
        }
        .item {
            display:flex;
            justify-content: space-between;
            align-items: center;
            position: relative;
            margin-bottom:.5rem;
            background-color: whitesmoke;
            padding: .5rem;
            border-radius:5px;
            transition: all .3s ease-in-out;
        }
        .item:hover {
            transform: scale(1.02);
            box-shadow:0 0px 2px 0px rgb(255 255 255), 0 2px 1px rgb(0, 0, 0, .14), 0 3px 10px rgb(0, 0, 0, .14);
            z-index:10;
            background-color: rgba(127,184,32,.2);
        }
        .item:last-child {
            margin-bottom:0;
        }
        p{
            margin: .5rem;
        }
        .options {
            display:flex;
            justify-content:flex-end;
            align-items:center;
        }
        .options button {
            background-color: white;
            border:1px solid #eee;
            box-shadow:0 1px 2px rgba(0,0,0,.2);
            padding:.3rem;
            border-radius:4px
        }
        .item-list .name{
            font-weight: bold;
        }
        .trash,.edit {
            margin-left:.5rem;
            transition: all .3s ease-in-out;
            cursor:pointer;
        }
        .trash:hover,.edit:hover {
            transform:scale(1.3);
            box-shadow:0 1px 1px rgba(0,0,0,.1), 0 3px 7px rgba(0,0,0,.1);
        }
        svg {
            padding: .2rem;
            fill: #aaa;
        }
        svg:hover {
            fill:#7fb820;
        }
        </style>
        <ul class="items-list">

        </ul>
        `;

        let itemsList = this.shadow.querySelector(".items-list");
        
        let tableStructure = this.setTableStructure();

        this.dataTable.forEach( element => {
            
            let item = document.createElement("li");
            item.classList.add("item");
            let dataWrapper = document.createElement("div");
            let optionsItem = document.createElement("div");
            let buttonTrash = document.createElement("button");
            let buttonEdit = document.createElement("button");

            
            for (const [key, value] of Object.entries(element)) {
                if(Object.keys(tableStructure.headers).includes(key)){
                    dataWrapper.innerHTML += `<p>${tableStructure.headers[key].label}: ${value}</p>`;
                };
            };
        
            
            buttonEdit.setAttribute("id", element.id);

            optionsItem.classList.add("options");
            buttonTrash.classList.add("trash");
            buttonTrash.innerHTML = '<svg width="24" height="24" viewBox="0 0 24 24"><path d="M9 19c0 .552-.448 1-1 1s-1-.448-1-1v-10c0-.552.448-1 1-1s1 .448 1 1v10zm4 0c0 .552-.448 1-1 1s-1-.448-1-1v-10c0-.552.448-1 1-1s1 .448 1 1v10zm4 0c0 .552-.448 1-1 1s-1-.448-1-1v-10c0-.552.448-1 1-1s1 .448 1 1v10zm5-17v2h-20v-2h5.711c.9 0 1.631-1.099 1.631-2h5.315c0 .901.73 2 1.631 2h5.712zm-3 4v16h-14v-16h-2v18h18v-18h-2z"/></svg>';
            buttonEdit.classList.add("edit");
            buttonEdit.innerHTML = '<svg width="24" height="24" clip-rule="evenodd" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m11.25 6c.398 0 .75.352.75.75 0 .414-.336.75-.75.75-1.505 0-7.75 0-7.75 0v12h17v-8.749c0-.414.336-.75.75-.75s.75.336.75.75v9.249c0 .621-.522 1-1 1h-18c-.48 0-1-.379-1-1v-13c0-.481.38-1 1-1zm1.521 9.689 9.012-9.012c.133-.133.217-.329.217-.532 0-.179-.065-.363-.218-.515l-2.423-2.415c-.143-.143-.333-.215-.522-.215s-.378.072-.523.215l-9.027 8.996c-.442 1.371-1.158 3.586-1.264 3.952-.126.433.198.834.572.834.41 0 .696-.099 4.176-1.308zm-2.258-2.392 1.17 1.171c-.704.232-1.274.418-1.729.566zm.968-1.154 7.356-7.331 1.347 1.342-7.346 7.347z" fill-rule="nonzero"/></svg>';

            optionsItem.append(buttonTrash);
            optionsItem.append(buttonEdit);

            item.append(dataWrapper);
            item.append(optionsItem);
            itemsList.append(item);
        
        });    

    }


    setTableStructure() {

        let url = this.getAttribute('url');

        switch (url) {

            case '/api/admin/users':

                return {
                    headers:{
                        email: {
                            label: 'Email',
                        },
                        name: {
                            label: 'Nombre',
                        }
                    },
                    buttons: {
                        edit: true,
                        remove: true
                    }
                };

            case '/api/admin/taxes':

                return {
                    headers:{
                        type: {
                            label: 'Tipo',
                        }
                    },
                    buttons: {
                        edit: true,
                        remove: true
                    }
                };
        }
    }

}



customElements.define('table-component', Table);