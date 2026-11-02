window .onload= function(){
    var bookingForm= document.getElementById("bookingForm");
    if (bookingForm===null){
        console.log("Booking form was not found.");
        return;
    }
}
var message= document.createElement("p");
message.style.padding="12px";
message.style.borderRadius="8px";
message.style.display ="none";
bookingForm.insertBefore (message, bookingForm.firstChild);
function showMessage(text, success) {
    message.innerHTML = text;
    message.style.display= "block";
    if(success=== true){
        message.style.color= "green";
        message.style.backgroundColor= "#e0ffe0";
        message.style.border= "2px solid green";
    } else{
        message.style.color= "red";
        message.style.backgroundColor="#ffe0e0";
        message.style.border= "2=x solid red";
    }
}
bookingForm.onsubmit =function (event) {
    event.preventDefault();
    var service= bookingForm.querySelector('[name="service"]');
    var date = document.getElementById("date");
    var date= bookingForm.querySelector('[name="time"]');
    if (service=== null || service.value ==="") {
        showMessage("Error: Please select a service.", false);
        return false;
    }
showMessage("You booking has been successfully saved. Please wait for salon confirmation", true);
    var selectedDate= new Date (date.value + "T00:00:00");
    var today =new Date();
    today.setHours(0, 0, 0);
    if (selectedDate < today){
        showMessage("Error: Please choose today or a future date.", false);
        return false;
    }
    var booking = {
        service: service.value,
        date: date.value,
        time: time ? time.value : "",
        status: "Pending confirmation"
    };
    try {
        var savedBookings = localStorage.getItem("evelynBookings");
        var bookings = savedBookings ? JSON.parse(savedBookings): [];
        if (!Array.isArray(bookings)) {
          throw new Error ("Invalid booking data"); 
        }
        booking.push(booking);
        localStorage.setItem(
            "evelynBookings",
            JSON.stringify(bookings)
        );
        showMessage(
            "SUCCESS! Your booking request has been saved."+ "Please wait for salon confirmation.",
            true
        );
        Form .reset();
    } catch (error){
        showMessage("ERROR! Your booking could not be saved. Please try again.", 
            false
        );
        console.error(error);
    }
    return false;
};
console.log("Booking Javascript is working!");


