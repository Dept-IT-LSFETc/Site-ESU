// intrebari.js — Optional interactivity for FAQ

document.addEventListener("DOMContentLoaded", function () {
  console.log("Întrebări frecvente (FAQ) încărcate.");

  // Example: Scroll to a specific FAQ item if a hash is present
  const hash = window.location.hash;
  if (hash && document.querySelector(hash)) {
    const targetCollapse = document.querySelector(hash);
    const bsCollapse = new bootstrap.Collapse(targetCollapse, {
      toggle: true,
    });
    targetCollapse.scrollIntoView({ behavior: "smooth" });
  }

  // You can extend this with analytics, custom triggers, etc.
});
