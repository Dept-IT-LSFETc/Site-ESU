// acasa.js — Handles the registration form submission

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("registrationForm");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const nume = document.getElementById("nume").value.trim();
    const email = document.getElementById("email").value.trim();
    const mesaj = document.getElementById("mesaj").value.trim();

    if (!nume || !email || !mesaj) {
      alert("Te rugăm să completezi toate câmpurile.");
      return;
    }

    // Simulate form submission (can be connected to real backend)
    alert(
      "Îți mulțumim pentru înscriere, " + nume + "! Te vom contacta pe email."
    );

    // Optionally reset the form
    form.reset();
  });
});
