/* =========================================================
   COOLVO.IN — MAIN JAVASCRIPT
   ========================================================= */


/* ================= MOBILE MENU ================= */

function toggleMobileMenu() {
  const menu = document.getElementById("mobileMenu");

  if (!menu) return;

  menu.classList.toggle("show");
}


/* Close mobile menu after clicking a link */

document.querySelectorAll(".mobile-menu a").forEach(function(link) {
  link.addEventListener("click", function() {

    const menu = document.getElementById("mobileMenu");

    if (menu) {
      menu.classList.remove("show");
    }

  });
});


/* ================= HERO SLIDER ================= */

const heroSlides = document.querySelectorAll(".hero-slide");

let currentHeroSlide = 0;

function showHeroSlide(index) {

  if (!heroSlides.length) return;

  heroSlides.forEach(function(slide) {
    slide.classList.remove("active");
  });

  heroSlides[index].classList.add("active");
}


if (heroSlides.length > 1) {

  setInterval(function() {

    currentHeroSlide++;

    if (currentHeroSlide >= heroSlides.length) {
      currentHeroSlide = 0;
    }

    showHeroSlide(currentHeroSlide);

  }, 5000);

}


/* ================= QUICK BOOKING ================= */

function openQuickBooking(serviceName) {

  const serviceSelect = document.getElementById("service");

  const contactSection = document.getElementById("contact");

  if (serviceSelect) {
    serviceSelect.value = serviceName;
  }

  if (contactSection) {
    contactSection.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  }

}


/* ================= BOOKING FORM ================= */

const bookingForm = document.getElementById("bookingForm");

if (bookingForm) {

  bookingForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const name =
      document.getElementById("name")?.value.trim() || "";

    const phone =
      document.getElementById("phone")?.value.trim() || "";

    const city =
      document.getElementById("city")?.value.trim() || "";

    const service =
      document.getElementById("service")?.value.trim() || "";

    const problem =
      document.getElementById("problem")?.value.trim() ||
      "Not specified";


    if (!name || !phone || !city || !service) {

      alert(
        "Please fill your name, mobile number, area and service."
      );

      return;
    }


    const message =
`*COOLVO SERVICE REQUEST*

Name: ${name}
Mobile: ${phone}
Area: ${city}
Service: ${service}
Problem: ${problem}

Website: coolvo.in

Please confirm availability and service details.`;


    const whatsappURL =
      "https://wa.me/916399843648?text=" +
      encodeURIComponent(message);


    window.open(
      whatsappURL,
      "_blank",
      "noopener,noreferrer"
    );

  });

}


/* ================= COOLVO SUPPORT ================= */

const supportReplies = {

  "AC Problem":
    "AC mein cooling, water leakage, unusual noise ya koi aur problem hai to inspection zaroori ho sakti hai. Aap Book Service se request bhej sakte hain.",

  "Fridge Problem":
    "Fridge cooling, leakage ya doosri problem ke liye appliance ki condition aur issue details share karein. Coolvo WhatsApp par further guidance dega.",

  "Washing Machine Problem":
    "Washing machine mein spin, drainage, door, pipe ya doosri problem ho to service request bhej sakte hain.",

  "Book Service":
    "Service request ke liye neeche Book Service button use karein. Details WhatsApp par send hongi aur Coolvo availability confirm karega.",

  "Warranty":
    "Coolvo ki current policy 30-day warranty hai on appliances and services, subject to applicable conditions aur performed work.",

  "Service Areas":
    "Coolvo Pilibhit ke saath Puranpur, Bisalpur, Amariya, Majhola, Shahjahanpur aur nearby areas mein service requests leta hai, availability ke subject par."

};


function openSupport() {

  const panel =
    document.getElementById("supportPanel");

  if (!panel) return;

  panel.classList.add("show");

  panel.setAttribute(
    "aria-hidden",
    "false"
  );

}


function closeSupport() {

  const panel =
    document.getElementById("supportPanel");

  if (!panel) return;

  panel.classList.remove("show");

  panel.setAttribute(
    "aria-hidden",
    "true"
  );

}


function supportReply(topic) {

  const messages =
    document.getElementById("supportMessages");

  if (!messages) return;


  /* User message */

  const userMessage =
    document.createElement("div");

  userMessage.className = "user-msg";

  userMessage.textContent = topic;

  messages.appendChild(userMessage);


  /* Bot message */

  const botMessage =
    document.createElement("div");

  botMessage.className = "bot-msg";

  botMessage.textContent =
    supportReplies[topic] ||
    "Please WhatsApp par Coolvo se contact karein.";

  messages.appendChild(botMessage);


  messages.scrollTop =
    messages.scrollHeight;

}


/* ================= CLOSE SUPPORT ON OUTSIDE CLICK ================= */

document.addEventListener("click", function(event) {

  const panel =
    document.getElementById("supportPanel");

  const button =
    document.querySelector(".support-fab");

  if (!panel || !button) return;

  if (
    panel.classList.contains("show") &&
    !panel.contains(event.target) &&
    !button.contains(event.target)
  ) {

    closeSupport();

  }

});


/* ================= PHONE VALIDATION ================= */

const phoneInput =
  document.getElementById("phone");

if (phoneInput) {

  phoneInput.addEventListener("input", function() {

    this.value =
      this.value.replace(/\D/g, "").slice(0, 10);

  });

}


/* ================= CURRENT YEAR ================= */

document.querySelectorAll(".current-year").forEach(function(element) {

  element.textContent =
    new Date().getFullYear();

});


/* ================= CONSOLE BRAND CHECK ================= */

console.log(
  "COOLVO.IN — Best AC Service in Pilibhit"
);