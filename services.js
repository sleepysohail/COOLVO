/* ==========================================
   COOLVO AC SERVICES
========================================== */


/* MOBILE MENU */

function toggleMenu(){

    const menu =
        document.getElementById("mobileNav");

    menu.classList.toggle("show");

}


/* ==========================================
   BOOKING MODAL
========================================== */

function openBooking(service, price){

    document
    .getElementById("bookingModal")
    .classList.add("show");


    document
    .getElementById("modalServiceName")
    .textContent = service;


    document
    .getElementById("modalPrice")
    .textContent = price;


    window.currentCoolvoService = service;

}


function closeBooking(){

    document
    .getElementById("bookingModal")
    .classList.remove("show");

}


/* CLOSE WHEN CLICKING OUTSIDE */

document
.getElementById("bookingModal")
.addEventListener("click", function(event){

    if(event.target === this){

        closeBooking();

    }

});


/* ESC KEY */

document.addEventListener("keydown", function(event){

    if(event.key === "Escape"){

        closeBooking();

    }

});


/* ==========================================
   SERVICE DETAILS
========================================== */

function showDetails(title, description){

    alert(
        title +
        "\n\n" +
        description +
        "\n\n" +
        "For booking, select Book Request."
    );

}


/* ==========================================
   BOOKING REQUEST → WHATSAPP
========================================== */

document
.getElementById("serviceBookingForm")
.addEventListener("submit", function(event){

    event.preventDefault();


    const name =
        document
        .getElementById("bookingName")
        .value
        .trim();


    const phone =
        document
        .getElementById("bookingPhone")
        .value
        .trim();


    const location =
        document
        .getElementById("bookingLocation")
        .value
        .trim();


    const acType =
        document
        .getElementById("bookingAcType")
        .value;


    const time =
        document
        .getElementById("bookingTime")
        .value;


    const problem =
        document
        .getElementById("bookingProblem")
        .value
        .trim();


    const service =
        window.currentCoolvoService ||
        "AC Service";


    if(
        !name ||
        !phone ||
        !location ||
        !acType
    ){

        alert(
            "Please fill all required details."
        );

        return;

    }


    const message =

`*NEW COOLVO AC BOOKING REQUEST*

🔧 Service:
${service}

👤 Customer:
${name}

📱 Phone:
${phone}

📍 Location:
${location}

❄️ AC Type:
${acType}

🕐 Preferred Time:
${time || "Not specified"}

📝 Problem:
${problem || "Not specified"}

━━━━━━━━━━━━━━━━

COOLVO.IN
Home Appliance Service

Working Hours:
9 AM – 10 PM
Friday Off`;


    const whatsappURL =
        "https://wa.me/916399843648?text="
        + encodeURIComponent(message);


    window.open(
        whatsappURL,
        "_blank"
    );


    /*
       Reset form after request
    */

    this.reset();

    closeBooking();

});