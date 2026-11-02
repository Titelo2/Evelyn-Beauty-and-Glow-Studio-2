document. addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");
    if(!form)return;
    form.addEventListener("submit", function (event) {
       event.preventDefault();
       alert("Thank you for contacting Evelyn Beauty and Glow Studio! We have recieved your message and will get back to you soon.") ;
    });
});