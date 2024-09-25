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
  // Initialize AOS animation if you're using it
  AOS.init({
    easing: "ease-in-quad",
    duration: 400,
    once: false, // Allow re-triggering
  });
});

// Select all buttons
const buttons = document.querySelectorAll("button[id^='button']");
buttons.forEach((button) => {
  let isExpanded = false;
  button.addEventListener("click", () => {
    // Find the parent container and content area
    const container = button.closest(".container-3-box");
    const content = container.querySelector(".extra-content");
    if (!isExpanded) {
      content.style.height = content.scrollHeight + "px"; // This should allow for full height
      button.innerHTML = "&uarr;"; // Change button to up arrow
    } else {
      content.style.height = "0"; // Collapse back to zero height
      button.innerHTML = "&darr;"; // Change button to down arrow
    }
    isExpanded = !isExpanded; // Toggle state
  });
});

window.onload = function () {
  window.scrollTo(0, 1); // Scroll the page by 1px to trigger a re-layout
  window.scrollTo(0, 0); // Immediately scroll back to the top
};
