"use strict";

const lorem = document.querySelector(".lorem");
const lorem2 = document.querySelector(".lorem2");

function newLorem() {
  lorem2.classList.remove("hidden");
}

lorem.addEventListener("mouseover", newLorem);
