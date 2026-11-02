document.addEventListener("DOMContentLoaded" , function () {
    const message= document.querySelector(".about-message");
    if (message) {
        message.addEventListener("click",function () {
            alert("Welcome to Evelyn Beauty and Glow Studio! We are here to help you look and feel beautiful");
        });
        message .style .cursor="pointer";
    }
});