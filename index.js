document. addEventListener("DOMContentLoaded", function () {
    // welcome message
    console.log("Welcome to Evelyn Beauty and Glow Studio!");
    // welcome animation
    const welcomeTitle = document .querySelector("h1");
    if (welcomeTitle) {
        welcomeTitle.style.opacity="0";
        welcomeTitle.style.transform= "translateY(20px)";
        welcomeTitle.style.transition= "all 1.2s ease";
        setTimeout(function () {
          welcomeTitle.style.opacity= "1";
          welcomeTitle.style.transform="translateY(0)" ; 
        }, 200);
    }
});
    // Animate sections when they enter the screen
const sections=document.querySelectorAll(
    "section, .service-card, .gallery-item, .about-content"
);
if ("IntersectionObserver" in window){
    const observer = new IntersectionObserver(function (entries) {
     entries. forEach (function (entry) {
        if(entry. isIntersecting){
            entry.target.classList.add("show-section");
            observer.unobserve(entry.target);
        }
     });   
    },{threshold: 0.15});
    sections.forEach(function (section) {
     section.classList.add("animate-section") ;
     observer.observe(section);  
    });
}
document.addEventListener("DOMContentLoaded", function () {
    const greeting= document.getElementById("greeting");
    greeting.textContent= "Hello beautiful!";
});