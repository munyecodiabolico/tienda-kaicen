export let renderValidation = () => {

    let validations = document.querySelectorAll('.validate');
    let submitForm = document.querySelector('#submitForm');
    let regExpresions = ['email','numbers','names','']

    submitForm.addEventListener('click', event => {
        
        event.preventDefault();

        validations.forEach(validation => {
            if (validation.dataset.validate = "email") {
                // Comprobar si es un email
                let regex = /\w+@\w+\.\w+/g;
                if (validation.value.match(regex) == null) {
                    validation.classList.add("invalid");
                    validation.parentElement.querySelector("label").classList.add("error");
                    validation.parentElement.querySelector(".error-message").classList.add("d-block");
                } else {
                    validation.classList.remove("invalid");
                    validation.parentElement.querySelector("label").classList.remove("error");
                    validation.parentElement.querySelector(".error-message").classList.remove("d-block");
                };
            };

        });

    });

}