document.addEventListener("DOMContentLoaded", function () {
   const buttons= document.querySelectorAll(".service-btn");
   buttons.forEach(function (button) {
    button.addEventListener("click", function () {
        const service= button .dataset .service;
        alert("Thank you for your interest in " + service+
     " Please contact us to enquire or book.");
    });
   });
});