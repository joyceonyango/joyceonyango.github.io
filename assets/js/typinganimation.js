/* ============================================================
   typing-animation.js — Joyce Onyango Portfolio
   Cycles through role titles in the hero h1
   ============================================================ */

(function () {
  const roles = [
    "Geospatial & Data Scientist",
    "Geospatial & Data Analyst",
    "Geospatial Developer"
  ];

  const TYPE_SPEED        = 70;   // ms per character when typing
  const DELETE_SPEED      = 40;   // ms per character when deleting
  const PAUSE_AFTER_TYPE  = 2000; // ms to hold the completed word
  const PAUSE_AFTER_DELETE = 400; // ms to pause before typing next word

  let roleIndex  = 0;
  let charIndex  = 0;
  let isDeleting = false;

  function type() {
    const el = document.getElementById("role");
    if (!el) return; // guard: exit silently if element not found

    const current = roles[roleIndex];

    if (!isDeleting) {
      el.textContent = current.slice(0, ++charIndex);

      if (charIndex === current.length) {
        setTimeout(() => { isDeleting = true; type(); }, PAUSE_AFTER_TYPE);
        return;
      }
      setTimeout(type, TYPE_SPEED);

    } else {
      el.textContent = current.slice(0, --charIndex);

      if (charIndex === 0) {
        isDeleting = false;
        roleIndex  = (roleIndex + 1) % roles.length;
        setTimeout(type, PAUSE_AFTER_DELETE);
        return;
      }
      setTimeout(type, DELETE_SPEED);
    }
  }

  // Start after DOM is ready
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", type);
  } else {
    type();
  }
})();