class ModalConfirm extends HTMLElement {

    constructor() {
        super();
        this.shadow = this.attachShadow({ mode: 'open' });
    }

    // static get observedAttributes() { return ['title']; }

    // Cuando
    connectedCallback() {
        
        // document.addEventListener("newUrl",( event =>{
        //     this.setAttribute('title', event.detail.title);
        // }));

        this.render();
    }

    attributeChangedCallback(name, oldValue, newValue){
        this.render();
    }

    render() {

        this.shadow.innerHTML = 
        `
        <style>
           
        </style>

        <dialog id="favDialog">
  <form method="dialog">
    <p>
      <label for="favAnimal">Favorite animal:</label>
      <select id="favAnimal" name="favAnimal">
        <option></option>
        <option>Brine shrimp</option>
        <option>Red panda</option>
        <option>Spider monkey</option>
      </select>
    </p>
    <div>
      <button id="cancel" type="reset">Cancel</button>
      <button type="submit">Confirm</button>
    </div>
  </form>
</dialog>

<div>
  <button id="updateDetails">Update details</button>
</div>
        `;	
    }
}

customElements.define('modal-confirm-component', ModalConfirm);


