export let renderAddSubstract = () => {

    let incrementButtons = document.querySelectorAll(".increment");
    let decrementButtons = document.querySelectorAll(".decrement");

    incrementButtons.forEach(increment => {
        increment.addEventListener("click", () => {
            let amount = increment.parentElement.querySelector(".amount");
            if (amount.value < 10) {
                amount.value++;
            }
        });
    });

    decrementButtons.forEach(decrement => {
        let amount = decrement.parentElement.querySelector(".amount");
        decrement.addEventListener("click", () => {
            if (amount.value > 1) {
                amount.value--;
            }
        });
    });
}