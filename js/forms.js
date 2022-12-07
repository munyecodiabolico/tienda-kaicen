import { validateForm } from './validation3.js';
import { counterText } from './counterText.js';

export let renderForms = () => { 

    let form = document.querySelector('.admin-form');
    let submitForm = document.querySelector('#submitForm');
    counterText();

    if (submitForm) {
            
        submitForm.addEventListener('click', event => {
    
            event.preventDefault();

            if(!validateForm(form.elements)){
                return;
            };

            document.dispatchEvent(new CustomEvent('message', {
                detail: {
                    text: 'Formulario enviado correctamente',
                    type: 'success'
                }
            }));

        });

    };

}

    