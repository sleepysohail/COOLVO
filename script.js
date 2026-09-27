// HERO IMAGE SLIDER

let slides = document.querySelectorAll('.slide');
let currentSlide = 0;

function showSlide(index){

slides.forEach(slide=>{
slide.classList.remove('active');
});

slides[index].classList.add('active');

}

setInterval(()=>{

currentSlide++;

if(currentSlide >= slides.length){
currentSlide = 0;
}

showSlide(currentSlide);

},4000);


// SERVICE CARD BOOKING

function openBooking(service){

document.getElementById("service").value = service;

document
.getElementById("contact")
.scrollIntoView({
behavior:"smooth"
});

}


// WHATSAPP APPOINTMENT FORM

document
.getElementById("bookingForm")
.addEventListener("submit",function(e){

e.preventDefault();

let name =
document.getElementById("name").value;

let phone =
document.getElementById("phone").value;

let city =
document.getElementById("city").value;

let service =
document.getElementById("service").value;

let problem =
document.getElementById("problem").value;

let message =
`*NEW SERVICE REQUEST*

Name: ${name}
Phone: ${phone}
City: ${city}
Service: ${service}

Problem:
${problem}

Sent From Coolvo.in Website`;

let whatsappUrl =
`https://wa.me/916399843648?text=${encodeURIComponent(message)}`;

window.open(whatsappUrl,'_blank');

});