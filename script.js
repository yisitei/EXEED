// Nanti kita isi logic sidebar, admin view, dll di sini
console.log("Script Loaded 🚀");
lucide.createIcons();

const buttons = document.querySelectorAll(".tab-btn");
buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    buttons.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
  });
});

window.addEventListener("DOMContentLoaded", () => {
  lucide.createIcons();

  const tabBtns = document.querySelectorAll(".tab-btn");

  tabBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      tabBtns.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
    });
  });
});

// ========== ANIMASI SCROLL REVEAL ==========
const reveals = document.querySelectorAll(".animasi");
window.addEventListener("scroll", () => {
  reveals.forEach((item) => {
    const windowHeight = window.innerHeight;
    const revealTop = item.getBoundingClientRect().top;
    const revealPoint = 150;

    if (revealTop < windowHeight - revealPoint) {
      item.classList.add("active");
    } else {
      item.classList.remove("active");
    }
  });
});
