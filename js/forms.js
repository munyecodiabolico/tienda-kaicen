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

            let formData = new FormData(form);
            let formDataJson = Object.fromEntries(formData.entries());

            fetch('http://192.168.1.16:8080/api/admin/users', {
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

    