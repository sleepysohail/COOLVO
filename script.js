/* =====================================
   COOLVO HOMEPAGE JAVASCRIPT
===================================== */


/* HERO SLIDER */

const slides = document.querySelectorAll(".hero-slide");

let currentSlide = 0;

function showSlide(index){

    slides.forEach(slide => {
        slide.classList.remove("active");
    });

    if(slides[index]){
        slides[index].classList.add("active");
    }
}

if(slides.length > 1){

    setInterval(() => {

        currentSlide++;

        if(currentSlide >= slides.length){
            currentSlide = 0;
        }

        showSlide(currentSlide);

    },4000);

}


/* MOBILE MENU */

function toggleMobileMenu(){

    const menu = document.getElementById("mobileMenu");

    if(menu){
        menu.classList.toggle("show");
    }

}


/* CLOSE MOBILE MENU AFTER CLICK */

document.querySelectorAll(".mobile-menu a").forEach(link => {

    link.addEventListener("click", () => {

        const menu = document.getElementById("mobileMenu");

        if(menu){
            menu.classList.remove("show");
        }

    });

});


/* QUICK BOOKING */

function openQuickBooking(service){

    const contactSection = document.getElementById("contact");

    const serviceSelect = document.getElementById("service");

    if(serviceSelect){
        serviceSelect.value = service;
    }

    if(contactSection){

        contactSection.scrollIntoView({
            behavior:"smooth"
        });

    }

}


/* HOMEPAGE BOOKING FORM */

const bookingForm = document.getElementById("bookingForm");

if(bookingForm){

    bookingForm.addEventListener("submit", function(event){

        event.preventDefault();

        const name =
            document.getElementById("name").value.trim();

        const phone =
            document.getElementById("phone").value.trim();

        const city =
            document.getElementById("city").value.trim();

        const service =
            document.getElementById("service").value;

        const problem =
            document.getElementById("problem").value.trim();


        if(!name || !phone || !city || !service){

            alert("Please fill all required details.");

            return;
        }


        const message =
`*NEW COOLVO SERVICE REQUEST*

Service:
${service}

Customer:
${name}

Phone:
${phone}

Location:
${city}

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


        window.open(whatsappURL,"_blank");

        bookingForm.reset();

    });

}