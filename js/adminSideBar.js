export let renderSideBar = () => {
    // Collapse sideBar menu
    let menu = document.querySelector(".hamburger");
    let adminPanel = document.querySelector(".admin-panel");
    let sideBar = document.querySelector(".sidebar-menu");

    if (menu) {
        menu.addEventListener('click', (event) => {
            event.preventDefault();
            adminPanel.classList.toggle("collapsed");
            sideBar.classList.toggle("collapsed");
        });
    }

    // Collapse submenus del Sidebar

    // The click
    let burger = document.querySelector(".toggled");
    if (burger) {
        burger.addEventListener('click', () => {
            burger.classList.toggle("toggled");
        });
    }


}