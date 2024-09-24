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

// const buttons2 = document.getElementById("button1");

// let isExpanded2 = false; // Moved outside the event listener to maintain state

// buttons2.addEventListener("click", () => {
//   const container2 = document.getElementById("container-3-box");
//   const content2 = container2.querySelector("#extra-content"); // Select class with "."

//   if (!isExpanded2) {
//     content2.style.height = content2.scrollHeight + "px"; // Expand to full content height
//     buttons2.innerHTML = "&uarr;"; // Change to up arrow
//   } else {
//     content2.style.height = "0"; // Collapse
//     buttons2.innerHTML = "&darr;"; // Change to down arrow
//   }

//   isExpanded2 = !isExpanded2; // Toggle the expansion state
// });
