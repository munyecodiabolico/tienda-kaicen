export let counterText = () => {

    let textarea = document.querySelector('textarea');
    let counter = document.querySelector('.counter-num');


    if(textarea){
        textarea.addEventListener('input', () => {
            counter.textContent = textarea.value.length;
        });
    }
 

}