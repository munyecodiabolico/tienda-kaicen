import {API_URL} from "../../config/config.js";

class ModalConfirm extends HTMLElement {

    constructor() {
        super();
        this.shadow = this.attachShadow({ mode: 'open' });
    }

    static get observedAttributes() { return ['url']; }

    // Cuando
    connectedCallback() {

        document.addEventListener('deleteElement', event => {
          this.id = event.detail.id;
          this.shadow.querySelector('.delete-modal').classList.add('active');
          this.shadow.querySelector('.overlay').classList.add('active');
        });

        document.addEventListener("newUrl",( event =>{
            this.setAttribute('url', event.detail.url);
        }));

        this.render();
    }

    attributeChangedCallback(name, oldValue, newValue){
        this.render();
    }

    render() {

        this.shadow.innerHTML = 
        `
        <style>
        .overlay {
          position:fixed;
          width: 100vw;
          height:100vh;
          background-color:rgba(0,0,0,.85);
          top:0;
          left:0;
          display:none;
          justify-content:center;
          align-items:center;
          z-index:10000000000;
        }
        .overlay.active {
          display:flex;
        }
        .delete-modal {
          border:none;
          background-color:#7dca2b;
          padding: 3rem;
          box-sizing:border-box;
          border-radius:5px;
          box-shadow:0 2px 2px rgba(0,0,0,.7), 0 5px 55px rgba(0,0,0,.9);
        }
        .delete-modal.active {
          display:block;
        }
        .delete-modal p {
          color:white;
          font-size:1.3rem;
          margin:0;
          font-weight:200;
        }
        .delete-modal .buttons {
          display:flex;
          justify-content:center;
          align-items: center;
          margin-top:3rem;
          gap: 1rem;
        }
        
        button.cancel {
          background-color: #777;
          color: white;
        }
        button.confirm {
          background-color: white;
          color: #777;
        }
        button {
          border: none;
          padding: 16px;
          transition: all 0.3s ease-in-out;
          text-transform:uppercase;
          transition: all .3s ease;
          cursor:pointer;
        }
        button:hover {
          background-color: #444;
        }
        button:hover.confirm {
          color:white;
        }
        button:active {
          background-color: #111;
        }
           
        </style>
        <div class="overlay">
            <dialog id="deleteModal" class="delete-modal">
              <form method="dialog">
                <p>Está a punto de borrar un registro.<br>¿Está seguro?</p>
                <div class="buttons">
                  <button id="cancel" class="cancel" type="reset">Cancel</button>
                  <button class="confirm" type="submit">Confirmar</button>
                </div>
              </form>
            </dialog>
          </div>
        `;	

        this.renderButtons();
    }

    renderButtons(){

      let overlay = this.shadow.querySelector('.overlay');
      let cancel = this.shadow.querySelector('.cancel');
      let confirm = this.shadow.querySelector('.confirm');

      overlay.addEventListener("click", () => {
        overlay.classList.remove("active");
      });

      cancel.addEventListener("click", () => {
        overlay.classList.remove("active");
      });

      confirm.addEventListener("click", event => {
        
        event.preventDefault();

        this.deleteElement();
      });
    }

    async deleteElement(){

      let url = `${API_URL}${this.getAttribute('url')}/${this.id}`;
      
      let response = await fetch(url, {
          method : "DELETE",
          headers: {
              "Authorization": "Bearer " + sessionStorage.getItem("accessToken"),
          }
      });

      this.shadow.querySelector('.delete-modal').classList.add('active');
      this.shadow.querySelector('.overlay').classList.remove("active");
      document.dispatchEvent(new CustomEvent('refreshTable'));
  }

}

customElements.define('modal-confirm-component', ModalConfirm);


