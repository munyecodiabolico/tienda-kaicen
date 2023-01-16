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

    