export let renderProductSlider = () => {

    let imageSlider = document.querySelectorAll(".img-thumbnail");
    let mainImage = document.querySelector(".main-img");

    imageSlider.forEach(imagen => {
        imagen.addEventListener('click', () => {
            mainImage.src = imagen.dataset.image;
        });
    });

}