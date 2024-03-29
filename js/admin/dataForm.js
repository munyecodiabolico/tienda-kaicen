import { API_URL } from "../../config/config.js";

class DataForm extends HTMLElement {

    constructor() {
        super();
        this.shadow = this.attachShadow({ mode: 'open' });
        this.url = this.getAttribute("url");
    }

    static get observedAttributes() { return ['url']; }

    connectedCallback() {

        document.addEventListener("newUrl", (event => {
            this.setAttribute('url', event.detail.url);
        }));

        document.addEventListener('showElement', event => {
            this.id = event.detail.id;
            this.showElement(event.detail.id);
        });

    }

    attributeChangedCallback(name, oldValue, newValue) {
        this.render();
    }


    async render() {

        this.shadow.innerHTML =
            `
        <style>
        * {
            box-sizing:border-box;
        }
        .d-none {
            display:none;
        }
        .row {
            display: flex;
            gap:1rem;
        }
        .row > div,
        .row > fieldset {
            flex-grow:1;
            width: 100%;
        }
        
        .row > fieldset {
            display:flex;
            margin-bottom:1rem;
            gap:2rem;
        }

        .row > fieldset > div input {
            margin:0;
            vertical-align:middle;
            margin-right:5px;
        }


        .col-12 {
            flex: 0 0 auto;
            width: 100%;
        }
        label {
            font-size:.8rem;
        }
        .barra-opciones {
            display:flex;
            justify-content:space-between;
            flex-grow:1;
        }
        .tabs-wrapper {
            display:flex;
        }
        .data-tabs-content {
            display:flex;
            flex: 1 0 auto;
            width: 100%;
        }
        .item {
            padding: 16px;
            text-decoration: none;
            text-align: center;
            background-color: #ddd;
            border-top-left-radius: .3125rem;
            border-top-right-radius: .3125rem;
            color: white;
            transition: all 0.3s ease-in-out;
            cursor: pointer;
            -webkit-user-select: none;
               -moz-user-select: none;
                -ms-user-select: none;
                    user-select: none;
          }
          .item.active {
            padding-top: calc(16px + .1875rem);
            padding-bottom: calc(16px + .1875rem);
            top: -0.1875rem;
            position: relative;
            border: .0625rem solid rgba(0, 0, 0, 0.3);
            border-bottom: none;
            background-color: white;
            color: #454545;
            box-shadow: 0 -0.125rem .1875rem rgba(0, 0, 0, 0.2);
            z-index: 3;
          }
          .item:not(.active):hover {
            background-color: #ccc;
            transition: all 0.3s ease-in-out;
          }
          .item-content {
            padding: 16px;
            border: .0625rem solid rgba(0, 0, 0, 0.3);
            position: relative;
            top: -0.25rem;
            box-shadow: 0 -0.125rem .1875rem rgba(0, 0, 0, 0.2);
            display: none;
            background-color: white;
            width: 100%;
          }
          .item-content:first-child {
            border-top-left-radius: 0rem;
          }
          .features-wrapper {
            background-color: red;
          }
          .active {
            display: block;
          }
          .footer {
            border: .0625rem solid rgba(0, 0, 0, 0.3);
            border-top: none;
            display: flex;
            flex-direction: row-reverse;
            position: relative;
            top: -0.25rem;
          }
          button {
            border: none;
            padding: 16px;
            transition: all 0.3s ease-in-out;
          }
          button.save {
            background-color: #7dca2b;
            color: white;
          }
          button.save:hover {
            box-shadow: inset 0 0 .625rem rgba(0, 0, 0, 0.5);
          }
          button.save:active {
            box-shadow: inset 0 0 1.875rem rgb(0, 0, 0);
          }
          button.reset:hover {
            box-shadow: inset 0 0 .625rem rgba(0, 0, 0, 0.5);
          }
          button.reset:active {
            box-shadow: inset 0 0 1.875rem rgb(0, 0, 0);
          }
        .forms input, .forms textarea {
            width: 100%;
            margin-bottom: 16px;
            border: .0625rem solid #63a022;
            background-color: rgba(125, 202, 43, 0.2);
            padding: 8px 16px;
            border-radius: .3125rem;
            transition: all 0.6s ease-in-out;
          }
          .forms input:focus, .forms textarea:focus {
            outline: 0rem;
            box-shadow: 0 0 .625rem #7dca2b;
            background-color: #ffffff;
          }
          .forms input.invalid, .forms textarea.invalid {
            border: .0625rem solid #cc0000;
            background-color: rgba(255, 255, 255, 0.2);
            box-shadow: 0 0 .625rem rgba(255, 0, 0, 0.5);
          }
          .forms input[type=radio], .forms input[type=checkbox] {
            width: auto;
          }
          .forms input[type=range] {
              padding:8px 0;
            }
            .forms textarea {
                height: 240px;
            }
            .forms svg {
                fill: #7dca2b;
                vertical-align: middle;
                margin-right: 16px;
                width: 40px;
            }
            .forms p {
                font-size: 19.2px;
          }
          .forms .on-off {
              display: inline-block;
              width: 3.125rem;
              height: 1.25rem;
              background-color: #fff;
              border-radius: 1.875rem;
              cursor: pointer;
              padding: 0;
              margin-right: 16px;
              box-shadow: 0 0 .625rem rgba(0, 0, 0, 0.25);
            }
            .forms #toggle {
                display: none;
            }
            .forms .slider {
                display: block;
                font-size: .625rem;
                position: relative;
                color: white;
            }
            .forms .slider::after {
                content: "OFF";
                width: 1.5625rem;
                height: 1.5625rem;
                background-color: #900707;
                border: .125rem solid #fff;
                border-radius: 50%;
                box-shadow: 0 0 .1875rem rgba(0, 0, 0, 0.3), 0 0 .625rem rgba(0, 0, 0, 0.5);
                position: absolute;
                top: -0.3125rem;
                left: 0;
                display: grid;
                place-content: center;
                line-height: 0;
                transition: background-color 0.25s, transform 0.25s ease-in;
            }
            .forms #toggle:checked + .slider::after {
                content: "ON";
                background-color: #05ae3e;
                transform: translateX(1.5625rem);
            }
            .forms .error-message {
                font-size: 9.6px;
                color: #ff0000;
                position: absolute;
                bottom: .4375rem;
                display: none;
                text-align: right;
                right: .875rem;
          }
          .forms .error {
              color: #ff0000;
            }
            .forms .rangeLine {
                display:flex;
                align-items:center;
            }
            input[type="range"] {
                margin:0;
            }
            input[type="color"] {
                width:40px;
                height:40px;
                display:block;
                padding:2px 4px;
            }
            select {
                display:block;
                padding:10px;
                width:200px;
            }

            input {
                accent-color:red;
            }
            input.invalid, textarea.invalid {
                border: 1px solid #cc0000;
                background-color: rgba(255, 255, 255, 0.2);
                box-shadow: 0 0 10px rgba(255, 0, 0, 0.5);
              }
            
            </style>
            <div class="content-item-list row product-features-tabs">
                <div>
                    <form action="http://127.0.0.1:8080/api/admin/users" class="forms admin-form">
                        <div class="barra-opciones" >
                            <div class="tabs-wrapper">
                    
                            </div>
                    
                            <div class="options">
                                <label class="on-off" for="toggle">
                                    <input id="toggle" type="checkbox">
                                    <span class="slider"></span>
                                </label>    
                            </div>
                        </div>
                        <div class="data-tabs-content">
                    
                        </div>
                        <div class="footer">
                            <button id="submitForm" class="save">GUARDAR</button>
                            <button class="reset">RESET</button>
                        </div>
                    </form>
                </div>
            </div>

        `;

        let form = this.shadow.querySelector(".tabs-wrapper");
        let formStructure = await this.setFormStructure();

        Object.keys(formStructure.tabs).forEach(key => {

            let itemContents = this.shadow.querySelector(".data-tabs-content");

            let item = document.createElement("div");
            item.classList.add("item", "tabs");
            item.dataset.content = key;
            item.textContent = `${formStructure.tabs[key].label}`;
            form.append(item);

            // Creando contenedor del contenido de un tab
            let tabContent = document.createElement("div");
            tabContent.classList.add("item-content");
            tabContent.dataset.content = key
            itemContents.append(tabContent);

            //Creando un tabContent 
            Object.values(formStructure.tabsContent[key].rows).forEach(row => {

                // Creando una fila
                let inputsGroup = document.createElement("div");
                inputsGroup.classList.add("row");
                tabContent.append(inputsGroup);

                for (let item in row.formElements) {

                    let formElement = row.formElements[item];

                    switch (formElement.element) {

                        // Si el input es hidden
                        case "input": {

                            let input = document.createElement("input");

                            switch (formElement.type) {
                                case "hidden": {
                                    input.id = item;
                                    input.name = item;
                                    input.type = formElement.type;
                                    form.append(input);
                                    break;
                                }

                                case "checkbox":
                                case "radio": {

                                    if (formElement.options.length > 1) {

                                        let fieldset = document.createElement("fieldset");
                                        let legend = document.createElement("legend");
                                        fieldset.append(legend);

                                        legend.textContent = formElement.label;
                                        fieldset.setAttribute("id", item);
                                        inputsGroup.append(fieldset);

                                        formElement.options.forEach(option => {

                                            let inputWrapper = document.createElement("div");
                                            let label = document.createElement("label");
                                            let input = document.createElement("input");

                                            label.setAttribute("for", option.value);
                                            label.textContent = option.label;

                                            input.setAttribute("id", option.value);
                                            input.setAttribute("type", formElement.type);
                                            if (formElement.type == "checkbox") {
                                                input.setAttribute("name", option.value);
                                            } else {
                                                input.setAttribute("name", item);
                                            }
                                            input.setAttribute("value", option.value);
                                            if (option.checked) {
                                                input.setAttribute("checked", option.checked);
                                            }

                                            inputWrapper.append(input);
                                            inputWrapper.append(label);
                                            fieldset.append(inputWrapper);
                                        });
                                    } else {
                                        formElement.options.forEach(option => {
                                            let inputWrapper = document.createElement("div");
                                            let label = document.createElement("label");
                                            let input = document.createElement("input");
                                            label.setAttribute("for", option.value);
                                            label.append(input);
                                            label.textContent = option.label;
                                            input.setAttribute("id", option.value);
                                            input.setAttribute("name", option.value);
                                            input.setAttribute("type", formElement.type);
                                            input.setAttribute("value", option.value);
                                            if (option.checked) {
                                                input.setAttribute("checked", option.checked);
                                            }
                                            inputWrapper.append(input);
                                            inputWrapper.append(label);
                                            fieldset.append(inputWrapper);
                                        });
                                    }
                                    break;
                                }


                                case "range": {
                                    let rangeContainer = document.createElement('div');
                                    rangeContainer.classList.add('range-container');
                                    let label = document.createElement("label");
                                    label.htmlFor = item;
                                    label.textContent = formElement.label;


                                    input.id = item;
                                    input.name = item;
                                    input.type = formElement.type;
                                    input.min = formElement.min || '';
                                    input.max = formElement.max || '';
                                    input.step = formElement.step || '';
                                    input.value = formElement.value || '';


                                    let rangeValue = document.createElement('span');
                                    rangeValue.classList.add('range-value');
                                    rangeValue.innerText = formElement.value;

                                    let rangeLineWrapper = document.createElement("div");
                                    rangeLineWrapper.classList.add("rangeLine");

                                    input.addEventListener('input', () => {
                                        rangeValue.innerText = input.value;
                                    });

                                    rangeContainer.append(label);
                                    rangeLineWrapper.append(input);
                                    rangeLineWrapper.append(rangeValue);
                                    rangeContainer.append(rangeLineWrapper);
                                    inputsGroup.append(rangeContainer);

                                    break;
                                }

                                case 'number':
                                case 'date':
                                case 'time':
                                case 'datetime-local':
                                case 'month':
                                case 'week': {
                                    let inputWrapper = document.createElement("div");
                                    let label = document.createElement("label");
                                    label.htmlFor = item;
                                    label.textContent = formElement.label;
                                    inputWrapper.append(label);
                                    inputWrapper.append(input);

                                    input.id = item;
                                    input.type = formElement.type;
                                    input.name = item;
                                    input.min = formElement.min || '';
                                    input.max = formElement.max || '';
                                    input.step = formElement.step || '';
                                    input.placeholder = formElement.placeholder || '';
                                    input.value = formElement.value || '';
                                    input.readOnly = formElement.readOnly || false;
                                    input.dataset.validate = formElement.validate || '';

                                    inputsGroup.append(inputWrapper);

                                    break;
                                }

                                case 'file': {

                                    if (!this.shadow.querySelector('image-gallery-component')) {
                                        let imageGallery = document.createElement('image-gallery-component');
                                        this.shadow.append(imageGallery);
                                    }

                                    let input = document.createElement('upload-image-button-component');
                                    input.id = item;
                                    input.setAttribute("name", item);
                                    input.setAttribute("languageAlias", "es");
                                    input.setAttribute("quantity", formElement.quantity);


                                    inputsGroup.append(input);

                                    break;
                                }

                                default: {

                                    let inputWrapper = document.createElement("div");
                                    let label = document.createElement("label");
                                    label.htmlFor = item;
                                    label.textContent = formElement.label;
                                    inputWrapper.append(label);
                                    inputWrapper.append(input);
                                    input.id = item;
                                    input.type = formElement.type;
                                    input.name = item;
                                    input.value = formElement.value || '';
                                    input.placeholder = formElement.placeholder || '';
                                    input.dataset.validate = formElement.validate || '';

                                    if (formElement.maxLength) {

                                        // input.maxLength = formElement.maxLength || '';
                                        // const counter = document.createElement('span');
                                        // inputsGroup.append(counter);

                                        input.addEventListener('input', () => {
                                            if (input.value.length > 0) {
                                                counter.textContent = input.value.length + ' / ' + input.maxLength;
                                            } else {
                                                counter.textContent = '';
                                            }
                                        });
                                    }

                                    inputsGroup.append(inputWrapper);
                                }
                            }

                            break;
                        }

                        case "textarea": {
                            let textareaWrapper = document.createElement("div");
                            let label = document.createElement("label");
                            let textarea = document.createElement('textarea');
                            label.htmlFor = item;
                            label.textContent = formElement.label;
                            textareaWrapper.append(label);
                            textareaWrapper.append(textarea);

                            textarea.id = item;
                            textarea.name = item;
                            textarea.disabled = formElement.disabled || false;
                            textarea.readOnly = formElement.readOnly || false;
                            textarea.value = formElement.value || '';
                            textarea.cols = formElement.cols || '';
                            textarea.rows = formElement.rows || '';
                            textarea.wrap = formElement.wrap || '';
                            textarea.placeholder = formElement.placeholder || '';
                            textarea.dataset.validate = formElement.validate || '';

                            if (formElement.maxLength) {

                                textarea.maxLength = formElement.maxLength || '';
                                const counter = document.createElement('span');
                                label.append(counter);

                                textarea.addEventListener('input', () => {
                                    if (textarea.value.length > 0) {
                                        counter.textContent = textarea.value.length + ' / ' + textarea.maxLength;
                                    } else {
                                        counter.textContent = '';
                                    }
                                });
                            }

                            inputsGroup.append(textareaWrapper);
                            break;
                        }


                        case "select": {
                            let selectWrapper = document.createElement("div");
                            let label = document.createElement("label");
                            let select = document.createElement("select");
                            label.htmlFor = item;
                            label.textContent = formElement.label;
                            selectWrapper.append(label);
                            selectWrapper.append(select);
                            select.id = item;
                            select.name = item;
                            select.disabled = formElement.disabled || false;
                            select.required = formElement.required || false;
                            select.multiple = formElement.multiple || false;

                            formElement.options.forEach(option => {
                                const optionElement = document.createElement('option');
                                optionElement.value = option.value;
                                optionElement.innerText = option.label;
                                select.append(optionElement);
                            });

                            inputsGroup.append(selectWrapper);

                            break;
                        }
                        default: {
                            console.log("Mierda");
                        }
                    }
                };
            });
        });

        this.shadow.querySelector('.tabs').classList.add("active");
        this.shadow.querySelector('.item-content').classList.add("active");

        // Object.keys(formStructure.tabsContent).forEach(key =>{
        //     
        //     let itemContent = document.createElement("div");
        //     itemContent.classList.add("item-content","cont-tabs");
        //     itemContent.setAttribute("data-content", key);
        //     let inputsWrapper = document.createElement("div");
        //     inputsWrapper.classList.add("inputsWrapper");


        //     itemContent.append(inputsWrapper);

        //     itemContents.append(itemContent);
        // });

        this.renderTabs();
        this.renderButtons();

    }


    renderTabs = () => {

        let items = this.shadow.querySelectorAll(".tabs");
        let itemContents = this.shadow.querySelectorAll(".item-content");

        items.forEach(item => {

            item.addEventListener("click", () => {

                let itemActivo = item.dataset.content;

                items.forEach(item => {
                    item.classList.remove('active');
                });

                item.classList.add('active');

                itemContents.forEach(itemContent => {

                    if (itemContent.dataset.content == itemActivo) {
                        itemContent.classList.add("active");
                    } else {
                        itemContent.classList.remove("active");
                    };
                });
            });
        });
    }


    renderButtons() {

        let submitForm = this.shadow.querySelector('#submitForm');

        submitForm.addEventListener('click', async event => {

            event.preventDefault();

            let form = this.shadow.querySelector('.admin-form');

            if(!this.validateForm(form.elements)){
                return;
            };


            let url = this.id ? API_URL + this.getAttribute('url') + '/' + this.id : API_URL + this.getAttribute('url');
            let method = this.id ? "PUT":"POST";
            let formData = new FormData(form);
            let formDataJson = Object.fromEntries(formData.entries());

            try {

                let response = await fetch(url, {
                    method: method,
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': 'Bearer ' + sessionStorage.getItem('accessToken')
                    },
                    body: JSON.stringify(formDataJson)
                })

                switch (response.status) {

                    case 200:

                        this.render();

                        document.dispatchEvent(new CustomEvent('refreshTable'));

                        document.dispatchEvent(new CustomEvent('message', {
                            detail: {
                                text: 'Formulario enviado correctamente',
                                type: 'success'
                            }
                        }));

                        break;

                    case 401:

                        document.dispatchEvent(new CustomEvent('message', {
                            detail: {
                                text: 'No tienes autorización',
                                type: 'error'
                            }
                        }));

                        break;


                    case 500:

                        document.dispatchEvent(new CustomEvent('message', {
                            detail: {
                                text: 'Fallo al enviar el formulario',
                                type: 'error'
                            }
                        }));

                        break;
                }

            } catch (error) {

                console.log(error)

                document.dispatchEvent(new CustomEvent('message', {
                    detail: {
                        text: 'Fallo al enviar el formulario',
                        type: 'error'
                    }
                }));
            }
        });
    }


    validateForm(inputs) {
        let validForm = true;
        let regExpresions = {
            'email': /\w+@\w+\.\w+/g,
            'number': /\d/g,
            'name': /^[a-zA-Z0-9_-]{3,16}$/g
            // 'passwords': /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,}/g 
        }
        
        for (let index = 0; index < inputs.length; index++) {
            
            let key = inputs[index].dataset.validate;
            
            if (key in regExpresions) {

                let regex = regExpresions[key];

                if (inputs[index].value.match(regex) == null) {
                    inputs[index].classList.add("invalid");
                    inputs[index].parentElement.querySelector("label").classList.add("error");
                    // inputs[index].parentElement.querySelector(".error-message").classList.add("d-block");
                    validForm = false
                } else {
                    inputs[index].classList.remove("invalid");
                    inputs[index].parentElement.querySelector("label").classList.remove("error");
                    // inputs[index].parentElement.querySelector(".error-message").classList.remove("d-block");
                };
            };
    
        };
        
        return validForm;
    }

    async showElement(id) {

        let url = `${API_URL}${this.getAttribute('url')}/${id}`;

        let response = await fetch(url, {
            headers: {
                "Authorization": "Bearer " + sessionStorage.getItem("accessToken"),
            }
        });

        let data = await response.json();


        for (const [key, value] of Object.entries(data)) {

            if (this.shadow.querySelector(`[id="${key}"]`)) {
                this.shadow.querySelector(`[id="${key}"]`).value = value;
            }
        }

    }

    setFormStructure = async () => {

        let url = this.getAttribute('url');

        switch (url) {

            // Formulario de usuarios
            case '/api/admin/users':

                return {

                    tabs: {
                        main: {
                            label: 'Principal',
                        }
                    },

                    tabsContent: {

                        main: {
                            rows: {
                                row1: {
                                    formElements: {
                                        name: {
                                            label: 'Nombre',
                                            element: 'input',
                                            type: 'text',
                                            placeholder: '',
                                            required: false,
                                        },
                                        email: {
                                            label: 'Email',
                                            element: 'input',
                                            type: 'email',
                                            placeholder: '',
                                            required: true,
                                            validate: 'email'
                                        }
                                    }
                                },
                                row2: {
                                    formElements: {
                                        password: {
                                            label: 'Contraseña',
                                            element: 'input',
                                            type: 'password',
                                            placeholder: '',
                                            required: true
                                        },
                                        repeatPassword: {
                                            label: 'Repita la contraseña',
                                            element: 'input',
                                            type: 'password',
                                            placeholder: '',
                                            required: true
                                        }
                                    }
                                }
                            }
                        }
                    }
                }









            // Formulario de usuarios
            case '/api/admin/books':

                return {

                    tabs: {
                        main: {
                            label: 'Principal',
                        }
                    },

                    tabsContent: {

                        main: {
                            rows: {
                                row1: {
                                    formElements: {
                                        title: {
                                            label: 'Nombre',
                                            element: 'input',
                                            type: 'text',
                                            placeholder: '',
                                            required: true,
                                            validate: 'name'
                                        }
                                    }
                                },
                                row2: {
                                    formElements: {
                                        author: {
                                            label: 'Autor',
                                            element: 'input',
                                            type: 'text',
                                            placeholder: '',
                                            required: true,
                                            validate: 'name'
                                        }
                                    }
                                },
                                row3: {
                                    formElements: {
                                        description: {
                                            label: 'Descripción',
                                            element: 'textarea',
                                            maxLength: 100,
                                            placeholder: '',
                                            required: true
                                        },
                                    }
                                },
                                row4: {
                                    formElements: {
                                        isbn: {
                                            label: 'ISBN',
                                            element: 'input',
                                            type: 'number',
                                            placeholder: '',
                                            required: true,
                                            validate: 'number'
                                        },
                                        pageCount: {
                                            label: 'Nro. Páginas',
                                            element: 'input',
                                            type: 'number',
                                            placeholder: '',
                                            required: true,
                                            validate: 'number'

                                        },
                                        publishedDate: {
                                            label: 'Fecha de Publicacion',
                                            element: 'input',
                                            type: 'date',
                                            placeholder: '',
                                            required: true
                                        }

                                    }
                                }
                            }
                        }
                    }
                }












            // case '/api/admin/businesses':

            //     return {

            //         tabs: {
            //             main: {
            //                 label: 'Principal',
            //             }
            //         },

            //         tabsContent: {

            //             main: {
            //                 rows: {
            //                     row1: {
            //                         formElements: {
            //                             company: {
            //                                 label: 'Compañía',
            //                                 element: 'input',
            //                                 type: 'text',
            //                                 placeholder: '',
            //                                 required: true,
            //                             }
            //                         }
            //                     },
            //                     row2: {
            //                         formElements: {
            //                             street: {
            //                                 label: 'Dirección',
            //                                 element: 'input',
            //                                 type: 'text',
            //                                 placeholder: '',
            //                                 required: true,
            //                                 validate: 'email'
            //                             },
            //                             postalCode: {
            //                                 label: 'C.P.',
            //                                 element: 'input',
            //                                 type: 'text',
            //                                 placeholder: '',
            //                                 required: true,
            //                                 validate: 'email'
            //                             },


            //                         }
            //                     },
            //                     row2: {
            //                         formElements: {
            //                             password: {
            //                                 label: 'Contraseña',
            //                                 element: 'input',
            //                                 type: 'password',
            //                                 placeholder: '',
            //                                 required: true
            //                             },
            //                             repeatPassword: {
            //                                 label: 'Repita la contraseña',
            //                                 element: 'input',
            //                                 type: 'password',
            //                                 placeholder: '',
            //                                 required: true
            //                             }
            //                         }
            //                     }
            //                 }
            //             }
            //         }
            //     }

            case '/api/admin/ejemplo':

                return {

                    tabs: {
                        main: {
                            label: 'Principal',
                        },
                        secundario: {
                            label: 'secundario',
                        }
                    },

                    tabsContent: {

                        main: {
                            rows: {
                                row1: {
                                    formElements: {
                                        id: {
                                            element: 'input',
                                            type: 'hidden',
                                            value: 'adsfasdf'
                                        },
                                        name: {
                                            label: 'Nombre',
                                            element: 'input',
                                            maxLength: '10',
                                            type: 'text',
                                            placeholder: '',
                                            required: true,
                                            validate: 'only-letters'
                                        },
                                        email: {
                                            label: 'Email',
                                            element: 'input',
                                            type: 'email',
                                            placeholder: '',
                                            required: true,
                                            validate: 'email'
                                        }
                                    }
                                },
                                row2: {
                                    formElements: {
                                        password: {
                                            label: 'Contraseña',
                                            element: 'input',
                                            type: 'password',
                                            placeholder: '',
                                            required: true
                                        },
                                        repeatPassword: {
                                            label: 'Repita la contraseña',
                                            element: 'input',
                                            type: 'password',
                                            placeholder: '',
                                            required: true
                                        }
                                    }
                                },
                                row3: {
                                    formElements: {
                                        permissions: {
                                            label: 'Permisos',
                                            element: 'input',
                                            type: 'checkbox',
                                            required: true,
                                            options: [
                                                {
                                                    label: 'Crear',
                                                    value: 'create',
                                                    checked: true
                                                },
                                                {
                                                    label: 'Leer',
                                                    value: 'read'
                                                },
                                                {
                                                    label: 'Actualizar',
                                                    value: 'update'
                                                },
                                                {
                                                    label: 'Eliminar',
                                                    value: 'delete'
                                                }
                                            ]
                                        },
                                        sex: {
                                            label: 'Sexo',
                                            element: 'input',
                                            type: 'radio',
                                            required: true,
                                            options: [
                                                {
                                                    label: 'Masculino',
                                                    value: "M",
                                                    checked: true
                                                },
                                                {
                                                    label: 'Femenino',
                                                    value: "F"
                                                }
                                            ],
                                        }
                                    }
                                },
                                row4: {
                                    formElements: {
                                        color: {
                                            label: 'Color',
                                            element: 'input',
                                            type: 'color',
                                            placeholder: ''
                                        },
                                        role: {
                                            label: 'Rol',
                                            element: 'select',
                                            required: true,
                                            options: [
                                                {
                                                    label: 'Administrador',
                                                    value: 'admin'
                                                },
                                                {
                                                    label: 'Usuario',
                                                    value: 'user'
                                                }
                                            ]
                                        }
                                    }
                                },
                                row5: {
                                    formElements: {
                                        age: {
                                            label: 'Edad',
                                            element: 'input',
                                            type: 'number',
                                            placeholder: '',
                                            required: true
                                        },
                                        telephone: {
                                            label: 'Teléfono',
                                            element: 'input',
                                            type: 'tel',
                                            placeholder: '',
                                            required: true
                                        },
                                        url: {
                                            label: 'URL',
                                            element: 'input',
                                            type: 'url',
                                            placeholder: '',
                                            required: true
                                        }
                                    }
                                },
                                row6: {
                                    formElements: {
                                        creationDate: {
                                            label: 'Fecha de creación',
                                            element: 'input',
                                            type: 'date',
                                            placeholder: '',
                                            required: true,
                                            validate: 'date'
                                        },
                                        creationTime: {
                                            label: 'Hora de creación',
                                            element: 'input',
                                            type: 'time',
                                            placeholder: '',
                                            required: true
                                        }
                                    }
                                },
                                row7: {
                                    formElements: {
                                        reservationWeek: {
                                            label: 'Semana de reserva',
                                            element: 'input',
                                            type: 'week',
                                            placeholder: '',
                                            required: true
                                        },
                                        reservationMonth: {
                                            label: 'Mes de reserva',
                                            element: 'input',
                                            type: 'month',
                                            placeholder: '',
                                            required: true
                                        },
                                        reservationDateTime: {
                                            label: 'Fecha y hora',
                                            element: 'input',
                                            type: 'datetime-local',
                                            placeholder: '',
                                            required: true
                                        }
                                    }
                                },
                                row8: {
                                    formElements: {
                                        capital: {
                                            label: 'Capital',
                                            element: 'input',
                                            type: 'range',
                                            min: 0,
                                            max: 100,
                                            step: 1,
                                            value: 50,
                                            placeholder: ''
                                        },
                                    }

                                },
                                row9: {
                                    formElements: {
                                        pdf: {
                                            label: 'Pdf',
                                            element: 'input',
                                            type: 'file',
                                            placeholder: '',
                                            required: true
                                        },
                                        search: {
                                            label: 'Buscar',
                                            element: 'input',
                                            type: 'search',
                                            placeholder: '',
                                            required: true
                                        }
                                    }
                                },
                                row10: {
                                    formElements: {
                                        description: {
                                            label: 'Descripción',
                                            element: 'textarea',
                                            maxLength: 100,
                                            placeholder: '',
                                            required: true
                                        }
                                    }
                                }
                            }
                        },
                        secundario: {
                            rows: {
                                row1: {
                                    formElements: {
                                        idSecund: {
                                            element: 'input',
                                            type: 'hidden',
                                        },
                                        nameSecund: {
                                            label: 'Nombre',
                                            element: 'input',
                                            maxLength: '10',
                                            type: 'text',
                                            placeholder: '',
                                            required: true,
                                            validate: 'only-letters'
                                        },
                                        emailSecund: {
                                            label: 'Email',
                                            element: 'input',
                                            type: 'email',
                                            placeholder: '',
                                            required: true,
                                            validate: 'email'
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
        }
    };
}



customElements.define('data-form', DataForm);