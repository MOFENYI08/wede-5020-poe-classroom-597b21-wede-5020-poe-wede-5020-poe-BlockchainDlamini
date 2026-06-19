
document.addEventListener("DOMContentLoaded", function() {
  const form = document.querySelector("form");
  const confirmation = document.getElementById("confirmation");

  form.addEventListener("submit", function(event) {
    event.preventDefault(); // stop page refresh
    confirmation.textContent = "Your booking is received!";
    confirmation.style.color = "black"; // optional styling
    confirmation.style.fontWeight = "bold";
  });
});
document.addEventListener("DOMContentLoaded", function() {
  const form = document.querySelector("form");
  const confirmation = document.getElementById("confirmation");

  // Show message when form is submitted
  form.addEventListener("submit", function(event) {
    event.preventDefault(); // stop page refresh
    confirmation.textContent = "Your feedback has been received!";
    confirmation.style.color = "black";
    confirmation.style.fontWeight = "bold";
  });
  // Clear message when form is reset
  form.addEventListener("reset", function() {
    confirmation.textContent = "";
  });
});
document.addEventListener("DOMContentLoaded", function() {
  const form = document.querySelector("form");
  const confirmation = document.getElementById("confirmation");

  if (!form || !confirmation) return; // safety check

  // Detect which page we are on by looking at the file name
  const page = window.location.pathname;

  form.addEventListener("submit", function(event) {
    event.preventDefault(); // stop page refresh

    if (page.includes("bookings.html")) {
      confirmation.textContent = "Your booking is received!";
    } else if (page.includes("enquiry.html")) {
      confirmation.textContent = "Your feedback has been received!";
    } else {
      confirmation.textContent = "Form submitted!";
    }

    confirmation.style.color = "black";
    confirmation.style.fontWeight = "bold";
  });

  form.addEventListener("reset", function() {
    confirmation.textContent = "";
  });
});
document.addEventListener("DOMContentLoaded", function() {
  const form = document.querySelector("form");
  const confirmation = document.getElementById("confirmation");

  if (!form || !confirmation) return; // safety check

  form.addEventListener("submit", function(event) {
    event.preventDefault(); // stop page refresh

    // Get values from inputs
    const name = document.getElementById("name").value.trim();
    const surname = document.getElementById("surname").value.trim();
    const hairstyle = document.getElementById("hairstyle").value.trim();
    const date = document.getElementById("date").value.trim();
    const time = document.getElementById("time").value.trim();

    // Check if any field is empty
    if (!name || !surname || !hairstyle || !date || !time) {
      confirmation.textContent = "Details not full!";
      confirmation.style.color = "red";
      confirmation.style.fontWeight = "bold";
    } else {
      confirmation.textContent = "Your booking is received!";
      confirmation.style.color = "black";
      confirmation.style.fontWeight = "bold";
    }
  });

  form.addEventListener("reset", function() {
    confirmation.textContent = "";
  });
});