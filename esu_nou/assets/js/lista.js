// lista.js — Manages dynamic behavior of the participant list

document.addEventListener("DOMContentLoaded", () => {
  console.log("Lista participanților este încărcată.");

  // Example: Future enhancement for dynamic filtering or search
  // You can implement a live search or sort by column if needed

  // Sample: Auto-scroll to "în așteptare" participant
  const pending = document.querySelector(".badge.bg-warning");
  if (pending) {
    pending.scrollIntoView({ behavior: "smooth", block: "center" });
  }
});
