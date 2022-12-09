import { validateForm } from './validation3.js';
import { counterText } from './counterText.js';

export let renderForms = () => { 

    let form = document.querySelector('.admin-form');
    let submitForm = document.querySelector('#submitForm');
    let url = form.dataset.url;
    console.log(url);
    counterText();

    if (submitForm) {
            
        submitForm.addEventListener('click', event => {
    
            event.preventDefault();

            if(!validateForm(form.elements)){
                return;
            };

            let formData = new FormData(form);
            let formDataJson = Object.fromEntries(formData.entries());

            fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'x-access-token': sessionStorage.getItem('accessToken')
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
                console.log(error);
            });

        });

    };

}

    