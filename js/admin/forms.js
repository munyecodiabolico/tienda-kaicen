import { validateForm } from './validation.js';

export let renderForms = () => { 

    let submitForm = document.querySelector('#submitForm');

    if (submitForm) {
            
        submitForm.addEventListener('click', event => {
    
            event.preventDefault();

            let form = document.querySelector('.admin-form');

            if(!validateForm(form.elements)){
                return;
            };

            let url = form.action;
            let formData = new FormData(form);
            let formDataJson = Object.fromEntries(formData.entries());
            console.log(url);
            console.log(formDataJson);
            fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + sessionStorage.getItem('accessToken')
                },
                body: JSON.stringify(formDataJson)
            }).then(response => {
                return response.json();
            }).then(data => {
                document.dispatchEvent(new CustomEvent('message', {
                    detail: {
                        text: 'Formulario enviado correctamente',
                        type: 'success'
                    }
                }));
            }).catch(error => {
                document.dispatchEvent(new CustomEvent('message', {
                    detail: {
                        text: 'Fallo al enviar el formulario',
                        type: 'error'
                    }
                }));
            });

        });

    };

}


// Este código es una clase llamada "PageTitle" que extiende de la clase "HTMLElement" de JavaScript. La clase "HTMLElement" es una de las clases básicas de los elementos de HTML en el DOM (Document Object Model).

// El constructor de la clase llama al constructor de la clase padre "HTMLElement" usando "super()", esto trae todo el funcionamiento del elemento HTML que es el padre.

// Luego, se crea una propiedad "shadow" en el objeto de la clase que se refiere al "shadow DOM" del elemento. El shadow DOM es una forma de aislar una parte de una página web para que no sea afectada por el estilo global.

// En el constructor también se establece una propiedad "title" en el objeto de la clase que se refiere al atributo "title" del elemento HTML.

// El método "static get observedAttributes()" devuelve un arreglo con los nombres de los atributos que serán observados para detectar cambios, en este caso solo esta observando el atributo "title"

// El método "connectedCallback()" es llamado cuando el elemento es agregado al DOM. Se agrega un evento que escucha el evento "newUrl" y actualiza el atributo "title" del elemento con el detalle del evento.

// El método "attributeChangedCallback(name, oldValue, newValue)" es llamado cuando alguno de los atributos observados cambia, en este caso solo esta observando el atributo "title" y llama al metodo render().

// El método "render()" se encarga de dibujar el elemento en el shadow DOM, estableciendo el contenido HTML y CSS del elemento. En este caso, se establece el contenido como una etiqueta "h2" con el valor del atributo "title" y un estilo para el texto dentro de ella.

// Finalmente, se utiliza el método "customElements.define()" para registrar el elemento personalizado con el nombre "page-title-component" y asociarlo con la clase "PageTitle".
    