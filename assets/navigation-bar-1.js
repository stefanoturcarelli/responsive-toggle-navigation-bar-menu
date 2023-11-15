"use strict";

function onEvent(event, selector, callback) {
  return selector.addEventListener(event, callback);
}

function select(selector, parent = document) {
  return parent.querySelector(selector);
}

const grid = select(".grid");
const menuBtn = select(".menu-btn");

function openMenu() {
  grid.classList.toggle("grid-open");
  menuBtn.classList.toggle("btn-container-open");
}

onEvent("click", menuBtn, () => {
  openMenu();
});
