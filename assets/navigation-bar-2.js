"use strict";

// function onEvent(event, selector, callback) {
//   return selector.addEventListener(event, callback);
// }

// function select(selector, parent = document) {
//   return parent.querySelector(selector);
// }

// const grid = select(".grid");
// const menuBtn = select(".menu-btn");

// function openMenu() {
//   grid.classList.toggle("grid-open");
//   menuBtn.classList.toggle("btn-container-open");
// }

// onEvent("click", menuBtn, () => {
//   openMenu();
// });

// ! Navigation Bar 2

const navBar2 = document.querySelector("nav ul");
const bars = document.querySelector("#bars");

function showMenu() {
  navBar2.style.right = "0rem";
}

function hideMenu() {
  navBar2.style.right = "-20rem";
}

bars.addEventListener("click", () => {
  // Check if the menu is currently visible
  if (navBar2.style.right === "-20rem") {
    showMenu(); // If hidden, show the menu
  } else {
    hideMenu(); // If visible, hide the menu
  }
});
