export let renderNotification = () => {

    document.addEventListener("message", (event =>{

        let notificationWrapper = document.getElementById("notification-wrapper");
        let notification = document.getElementById("notification");
        let notificationText = document.getElementById("notification-message");
       
        notificationText.innerHTML = event.detail.text;
        notification.classList.add(event.detail.type);

        notificationWrapper.classList.add("active");

        setTimeout(() => {
           notification.classList.add("active");
        }, 500);

        setTimeout(() => {
            notificationWrapper.classList.remove("active");
            notification.classList.remove("active");
            notification.classList.remove(event.detail.type);
        }, 5000);
    }));
}