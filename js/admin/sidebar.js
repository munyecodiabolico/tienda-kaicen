export let renderSidebar = () => {
    // Despliegue menu lateral y boton hamburguesa
    let mainContent = document.querySelector(".container-main");
    let sideBar = document.querySelector(".container-sidebar");
    let burger = document.querySelector(".hamburger");
    if (burger) {
        burger.addEventListener('click', () => {
            burger.classList.toggle("is-active");
            mainContent.classList.toggle("collapsed");
            sideBar.classList.toggle("collapsed");
        });
    };





    // let listElements = document.querySelectorAll(".list-button");
    // let listElementsSubmenus = document.querySelectorAll(".list-inside");

    // listElements.forEach(listElement => {
    //     listElement.addEventListener('click', (event) => {
    //         event.preventDefault();
    //         let listElements = document.querySelectorAll(".list-button");
    //         listElements.forEach(listElement => {
    //             event.preventDefault();
    //             listElement.classList.remove("arrow");
    //             listElement.classList.remove("active");
    //             if (listElement.classList.contains("list-button-click")) {
    //                 let menu = listElement.nextElementSibling;
    //                 menu.style.height = "0";
    //             }
    //         });
    //         listElementsSubmenus.forEach(listElementSubmenu => {
    //             listElementSubmenu.classList.remove("active");
    //         });
    //         if (listElement.classList.contains("list-button-click")) {
    //             listElement.classList.toggle("arrow");
    //             listElement.classList.toggle("active");
    //             let height = 0;
    //             let menu = listElement.nextElementSibling;
    //             if (menu.clientHeight == "0") {
    //                 height = menu.scrollHeight;
    //             } else {
    //                 listElement.classList.toggle("arrow");
    //                 listElement.classList.toggle("active");
    //             }
    //             menu.style.height = `${height}px`;
    //         } else {
    //             listElement.classList.toggle("active");
    //         }
    //     });

    // });

    // listElementsSubmenus.forEach(listElementSubmenu => {
    //     listElementSubmenu.addEventListener('click', (event) => {
    //         event.preventDefault();
    //         listElementsSubmenus.forEach(listElementSubmenu => {
    //             listElementSubmenu.classList.remove("active");
    //         });
    //         listElementSubmenu.classList.toggle("active");
    //     });
    // });



}