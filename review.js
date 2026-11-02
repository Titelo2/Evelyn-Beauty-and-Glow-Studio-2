document.addEventListener("DOMContentLoaded", function () {
    const form= document.getElementById("reviewForm");
    const message= document.getElementById("reviewMessage");
    form.addEventListener("submit", function (event) {
        event.preventDefault();
        const name= document.getElementById("reviewName").value .trim();
        const review= document.getElementById("reviewText").value .trim();
        if (name==="" || review ==="") {
            message.textContent="Please complete all fields!";
            message.style.color="red";
        }else{
            message.textContent="Thank you for sharing your review!";
            message.style.color="green";
            form.reset ();
        }
    });
});