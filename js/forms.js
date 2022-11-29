import { validateForm } from './validation3.js';
import { counterText } from './counterText.js';

export let renderForms = () => { 

    let form = document.querySelector('form');
    let inputs = form.elements;
    let submitForm = document.querySelector('#submitForm');

    counterText();

    if (submitForm) {
            
        submitForm.addEventListener('click', event => {
    
            event.preventDefault();

            if(!validateForm(inputs)){
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

    