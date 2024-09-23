const menuToggle = document.querySelector(".menu-toggle");
const headerContainer = document.querySelector("#header-container");
const headerTitle = document.querySelector("h1"); // Välj h1-elementet

menuToggle.addEventListener("click", () => {
  toggleMenu();
});

let menuOpen = false;

function toggleMenu() {
  menuOpen = !menuOpen;

  if (menuOpen) {
    headerContainer.classList.add("show");
    headerTitle.style.display = "none"; // Döljer h1
  } else {
    headerContainer.classList.remove("show");
    headerTitle.style.display = "block"; // Visar h1 igen
  }
}

document.addEventListener("DOMContentLoaded", () => {
  AOS.init({
    easing: "ease-in-quad",
    duration: 400,
    once: false, // Allow re-triggering
  });
});
