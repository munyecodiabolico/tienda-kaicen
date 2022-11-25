
export let renderTabs = () => {

    let items = document.querySelectorAll(".item");
    let items_contents = document.querySelectorAll(".item-content");
    
    items.forEach(item => {
        item.addEventListener("click", () => {
            let itemActivo = item.dataset.content;
            items.forEach(item => {
                if(item.dataset.content == itemActivo) {
                    item.classList.add("active");
                } else {
                    item.classList.remove("active");
                };
            });
            items_contents.forEach(item_content => {
                if(item_content.dataset.content == itemActivo) {
                    item_content.classList.add("active");
                } else {
                    item_content.classList.remove("active");
                };
            });
        });
    });
}