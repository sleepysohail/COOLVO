/* =====================================
   COOLVO SERVICES PAGE JAVASCRIPT
===================================== */


/* MOBILE MENU */

function toggleServiceMenu(){

    const menu =
        document.getElementById("serviceMobileMenu");

    if(menu){
        menu.classList.toggle("show");
    }

}


/* CLOSE MOBILE MENU */

document.querySelectorAll(
    ".service-mobile-menu a"
).forEach(link => {

    link.addEventListener("click", () => {

        const menu =
            document.getElementById("serviceMobileMenu");

        if(menu){
            menu.classList.remove("show");
        }

    });

});


/* CURRENT SERVICE */

let currentService = "AC Service";

let currentPrice = "Get Quote";


/* OPEN BOOKING */

function openServiceBooking(service, price){

    currentService = service;

    currentPrice = price;


    const modal =
        document.getElementById("bookingModal");

    const serviceName =
        document.getElementById("selectedService");

    const priceText =
        document.getElementById("selectedPrice");


    if(modal){
        modal.classList.add("show");
    }

    if(serviceName){
        serviceName.textContent = service;
    }

    if(priceText){
        priceText.textContent = price;
    }

}


/* CLOSE BOOKING */

function closeServiceBooking(){

    const modal =
        document.getElementById("bookingModal");

    if(modal){
        modal.classList.remove("show");
    }

}


/* CLOSE WHEN CLICKING BACKDROP */

const bookingModal =
    document.getElementById("bookingModal");

if(bookingModal){

    bookingModal.addEventListener(
        "click",
        function(event){

            if(event.target === bookingModal){
                closeServiceBooking();
            }

        }
    );

}


/* ESCAPE KEY */

document.addEventListener(
    "keydown",
    function(event){

        if(event.key === "Escape"){
            closeServiceBooking();
        }

    }
);


/* DETAILS */

function showServiceDetails(title, description){

    alert(
        title +
        "\n\n" +
        description +
        "\n\n" +
        "For booking, select Book Request."
    );

}


/* BOOKING FORM */

const serviceBookingForm =
    document.getElementById(
        "serviceBookingForm"
    );


if(serviceBookingForm){

    serviceBookingForm.addEventListener(
        "submit",
        function(event){

            event.preventDefault();


            const name =
                document
                .getElementById("customerName")
                .value
                .trim();


            const phone =
                document
                .getElementById("customerPhone")
                .value
                .trim();


            const location =
                document
                .getElementById("customerLocation")
                .value
                .trim();


            const acType =
                document
                .getElementById("acType")
                .value;


            const preferredTime =
                document
                .getElementById("preferredTime")
                .value;


            const problem =
                document
                .getElementById("customerProblem")
                .value
                .trim();


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

Service:
${currentService}

Price:
${currentPrice}

Customer:
${name}

Phone:
${phone}

Location:
${location}

AC Type:
${acType}

Preferred Time:
${preferredTime || "Not specified"}

Problem:
${problem || "Not specified"}

━━━━━━━━━━━━━━━━

COOLVO.IN
Home Appliance Service

Working Hours:
9 AM – 10 PM
Friday Off`;


            const whatsappURL =
                "https://wa.me/916399843648?text=" +
                encodeURIComponent(message);


            window.open(
                whatsappURL,
                "_blank"
            );


            serviceBookingForm.reset();

            closeServiceBooking();

        }
    );

}