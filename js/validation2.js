export let renderValidation = () => {

    let validations = document.querySelectorAll('.validate');
    let submitForm = document.querySelector('#submitForm');
    let regExpresions = {
        'emails': /\w+@\w+\.\w+/g,
        'numbers': /^\d{9}$/g,
        'names': /^[a-zA-Z0-9_-]{4,16}$/g
    }
    
    if (submitForm) {
        
        submitForm.addEventListener('click', event => {
    
            event.preventDefault();
    
            validations.forEach(validation => {
                let key = validation.dataset.validate
                if (key in regExpresions) {
                    let regex = regExpresions[key];
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

    };

}