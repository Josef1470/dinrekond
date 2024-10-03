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

const buttons = document.querySelectorAll("button[id^='button']");
buttons.forEach((button) => {
  let isExpanded = false; // Track whether the current box is expanded

  button.addEventListener("click", () => {
    // Collapse any currently expanded content before expanding the clicked one
    buttons.forEach((otherButton) => {
      const otherContainer = otherButton.closest(".container-3-box");
      const otherContent = otherContainer.querySelector(".extra-content");

      // If another box is expanded and it's not the current one, collapse it
      if (
        otherButton !== button &&
        otherContent.classList.contains("expanded")
      ) {
        otherContent.classList.remove("expanded");
        otherButton.innerHTML = "&darr;"; // Set button to down arrow for collapsed box
      }
    });

    // Find the parent container and content area of the clicked button
    const container = button.closest(".container-3-box");
    const content = container.querySelector(".extra-content");

    // Toggle the current box between expanded and collapsed states
    if (!isExpanded) {
      content.classList.add("expanded");
      button.innerHTML = "&uarr;"; // Change button to up arrow
    } else {
      content.classList.remove("expanded");
      button.innerHTML = "&darr;"; // Change button to down arrow
    }

    isExpanded = !isExpanded; // Toggle the state of the current box
  });
});
