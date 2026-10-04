/* =========================================
   COOLVO SERVICES PAGE
   Service Booking Modal + WhatsApp
   ========================================= */

const COOLVO_WHATSAPP = "916399843648";

/* ---------- OPEN BOOKING MODAL ---------- */

function openServiceBooking(serviceName = "") {
  const modal = document.getElementById("serviceBookingModal");
  const serviceSelect = document.getElementById("selectedService");

  if (!modal) return;

  if (serviceSelect && serviceName) {
    serviceSelect.value = serviceName;
  }

  modal.classList.add("show");
  modal.setAttribute("aria-hidden", "false");

  document.body.style.overflow = "hidden";

  const nameInput = document.getElementById("serviceName");

  if (nameInput) {
    setTimeout(() => {
      nameInput.focus();
    }, 150);
  }
}


/* ---------- CLOSE BOOKING MODAL ---------- */

function closeServiceBooking() {
  const modal = document.getElementById("serviceBookingModal");

  if (!modal) return;

  modal.classList.remove("show");
  modal.setAttribute("aria-hidden", "true");

  document.body.style.overflow = "";
}


/* ---------- FORM SUBMISSION ---------- */

const serviceForm = document.getElementById("serviceBookingForm");

if (serviceForm) {
  serviceForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("serviceName")?.value.trim() || "";
    const phone = document.getElementById("servicePhone")?.value.trim() || "";
    const service =
      document.getElementById("selectedService")?.value.trim() || "";

    const address =
      document.getElementById("serviceAddress")?.value.trim() || "";

    const problem =
      document.getElementById("serviceProblem")?.value.trim() || "";

    if (!name) {
      alert("Please enter your name.");
      return;
    }

    if (!/^[6-9]\d{9}$/.test(phone)) {
      alert("Please enter a valid 10-digit mobile number.");
      return;
    }

    if (!service) {
      alert("Please select a service.");
      return;
    }

    if (!address) {
      alert("Please enter your address.");
      return;
    }

    const message =
`*COOLVO SERVICE REQUEST*

Name: ${name}
Mobile: ${phone}
Service: ${service}

Address:
${address}

Problem / Requirement:
${problem || "Not specified"}

Please confirm service availability and visit details.

Website: coolvo.in`;

    const whatsappURL =
      `https://wa.me/${COOLVO_WHATSAPP}?text=${encodeURIComponent(message)}`;

    window.open(whatsappURL, "_blank", "noopener,noreferrer");

    serviceForm.reset();

    closeServiceBooking();
  });
}


/* ---------- PHONE NUMBER VALIDATION ---------- */

const servicePhone = document.getElementById("servicePhone");

if (servicePhone) {
  servicePhone.addEventListener("input", function () {
    this.value = this.value.replace(/\D/g, "").slice(0, 10);
  });
}


/* ---------- CLOSE WHEN CLICKING OUTSIDE ---------- */

const serviceModal = document.getElementById("serviceBookingModal");

if (serviceModal) {
  serviceModal.addEventListener("click", function (event) {
    if (event.target === serviceModal) {
      closeServiceBooking();
    }
  });
}


/* ---------- ESC KEY ---------- */

document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    closeServiceBooking();
  }
});


/* ---------- SERVICE CARD BUTTON SUPPORT ---------- */

document.querySelectorAll("[data-service-book]").forEach((button) => {
  button.addEventListener("click", function () {
    const serviceName = this.getAttribute("data-service-book") || "";
    openServiceBooking(serviceName);
  });
});