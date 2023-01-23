class PageTitle extends HTMLElement {

    constructor() {
        super();
        this.shadow = this.attachShadow({ mode: 'open' });
        this.title = this.getAttribute('title');
    }

    static get observedAttributes() { return ['title']; }

    // Cuando
    connectedCallback() {
        
        document.addEventListener("newUrl",( event =>{
            this.setAttribute('title', event.detail.title);
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
            h2 {   
                color: hsl(0, 0%, 0%);
                font-family: 'Ubuntu';
                font-size: 2em;
                text-decoration: none;
                text-align:center;
                font-size: 2.5rem;
                font-weight: 100;
                margin-top: 0;
                margin-bottom: 2rem;
                border-bottom: 1px solid #7dca2b;
                text-align:left;
                font-family: Montserrat, Arial, Helvetica, sans-serif;
                text-transform:uppercase;
            }
        </style>

        <h2>${this.title}</h2>
        `;	
    }
}

customElements.define('page-title-component', PageTitle);


// class PageTitle extends HTMLElement {
//     // constructor de la clase, se ejecuta al crear una nueva instancia de PageTitle
//     constructor() {
//         super(); // llama al constructor de la clase padre, HTMLElement
//         this.shadow = this.attachShadow({ mode: 'open' }); // Crea un shadow DOM para el elemento y lo asigna a la propiedad shadow
//         this.title = this.getAttribute('title'); // Obtiene el valor del atributo "title" del elemento y lo asigna a la propiedad title
//     }

//     // Método estático que especifica los atributos que serán observados para detectar cambios
//     static get observedAttributes() { return ['title']; }

//     // Método que se ejecuta cuando el elemento es agregado al DOM
//     connectedCallback() {
//         // Escucha el evento "newUrl" y actualiza el atributo "title" del elemento con el detalle del evento
//         document.addEventListener("newUrl",( event =>{
//             this.setAttribute('title', event.detail.title);
//         }));

//         this.render(); // Llama al método render
//     }

//     // Método que se ejecuta cuando alguno de los atributos observados cambia
//     attributeChangedCallback(name, oldValue, newValue){
//         this.render(); // Llama al método render
//     }

//     // Método que se encarga de dibujar el elemento en el shadow DOM
//     render() {
//         // Establece el contenido HTML y CSS del elemento. En este caso, se establece el contenido como una etiqueta "h2" con el valor del atributo "title" y un estilo para el texto dentro de ella.
//         this.shadow.innerHTML = 
//         `
//         <style>
//             h2 {   
//                 color: hsl(0, 0%, 100%);
//                 font-family: 'Ubuntu';
//                 font-size: 2em;
//                 font-weight: 600;
//                 margin: 0;
//                 text-decoration: none;
//                 text-align:center;
//             }
//         </style>

//         <h2>${this.title}</h2>
//         `;	
//     }
// }

// //Registra el elemento personalizado con el nombre "page-title-component" y asociarlo con la clase "PageTitle"
// customElements.define('page-title-component', PageTitle);
