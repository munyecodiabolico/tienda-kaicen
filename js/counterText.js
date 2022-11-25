export let renderCounterText = () => {

    let textarea = document.querySelector('textarea');
    let counter = document.querySelector('.counter-num');

    textarea.addEventListener('input', () => {
        counter.textContent = textarea.value.length;
    });

}