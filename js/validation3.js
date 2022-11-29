export let validateForm = inputs => {

    let validForm = true;

    let regExpresions = {
        'emails': /\w+@\w+\.\w+/g,
        'numbers': /^\d{9}$/g,
        'names': /^[a-zA-Z0-9_-]{3,16}$/g
    }

    for (let index = 0; index < inputs.length; index++) {
        
        let key = inputs[index].dataset.validate;

        if (key in regExpresions) {
            let regex = regExpresions[key];
            if (inputs[index].value.match(regex) == null) {
                inputs[index].classList.add("invalid");
                inputs[index].parentElement.querySelector("label").classList.add("error");
                inputs[index].parentElement.querySelector(".error-message").classList.add("d-block");
                validForm = false
            } else {
                inputs[index].classList.remove("invalid");
                inputs[index].parentElement.querySelector("label").classList.remove("error");
                inputs[index].parentElement.querySelector(".error-message").classList.remove("d-block");
            };
        };

    };
    
    return validForm;

}