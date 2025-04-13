// contact.js — Handles contact form submission

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (!name || !email || !message) {
      alert("Te rugăm să completezi toate câmpurile.");
      return;
    }

    // Simulate successful submission
    alert(`Mulțumim pentru mesaj, ${name}! Vom reveni în curând.`);
    form.reset();
  });
});
