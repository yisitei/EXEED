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

// ========== DASHBOARD MENU ==========
const heroSection = document.querySelector(".heroSection");
const dashboardSection = document.getElementById("dashboardSection");
const cardSection = document.getElementById("card-planning");

const menuBtn = document.getElementById("menuBtn"); // tombol ke dashboard
const homeBtn = document.getElementById("homeBtn"); // tombol ke home (kalo ada)

menuBtn.addEventListener("click", () => {
  // Sembunyikan bagian hero + card project
  heroSection.classList.add("hidden");
  cardSection.classList.add("hidden");

  // Tampilkan dashboard
  dashboardSection.classList.remove("hidden");
});

homeBtn.addEventListener("click", () => {
  // Tampilkan kembali hero dan card project
  heroSection.classList.remove("hidden");
  cardSection.classList.remove("hidden");

  // Sembunyikan dashboard
  dashboardSection.classList.add("hidden");
});

