import { validateForm } from './validation.js';

export let renderContactForms = () => { 

    let submitContactForm = document.querySelector('#submitContactForm');

    if (submitContactForm) {
            
        submitContactForm.addEventListener('click', event => {
    
            event.preventDefault();

            let form = document.querySelector('.contact-form');

            if(!validateForm(form.elements)){
                return;
            };

            let url = form.action;
            let formData = new FormData(form);
            let formDataJson = Object.fromEntries(formData.entries());
 
            fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
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

    