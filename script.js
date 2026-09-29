/* MOBILE MENU */

function toggleMenu(){

    const nav = document.getElementById("mainNav");

    nav.classList.toggle("show");

}


/* SELECT SERVICE */

function selectService(service){

    const select = document.getElementById("selectedService");

    select.value = service;

    document.getElementById("booking").scrollIntoView({
        behavior:"smooth"
    });

}


/* BOOKING FORM */

document
.getElementById("bookingForm")
.addEventListener("submit", function(e){

    e.preventDefault();

    const name =
        document.getElementById("customerName").value.trim();

    const phone =
        document.getElementById("customerPhone").value.trim();

    const location =
        document.getElementById("customerLocation").value.trim();

    const service =
        document.getElementById("selectedService").value;

    const time =
        document.getElementById("preferredTime").value;

    const problem =
        document.getElementById("problem").value.trim();


    if(!name || !phone || !location || !service){

        alert("Please fill all required details.");

        return;

    }


    const message =

`*NEW COOLVO BOOKING REQUEST*

👤 Name: ${name}

📱 Phone: ${phone}

📍 Location: ${location}

🔧 Service: ${service}

🕐 Preferred Time: ${time || "Not specified"}

📝 Problem:
${problem || "Not specified"}

━━━━━━━━━━━━━━

Sent from COOLVO.IN`;


    const whatsappURL =
        "https://wa.me/916399843648?text="
        + encodeURIComponent(message);


    window.open(whatsappURL, "_blank");

});