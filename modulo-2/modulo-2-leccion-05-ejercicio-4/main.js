"use strict";
const scroll = document.querySelector(".scroll");

function bg() {
  const scrollValue = window.scrollY;

  if (scrollValue > 250) {
    scroll.classList.add("color1");
    scroll.classList.remove("color2");
  } else {
    scroll.classList.add("color2");
    scroll.classList.remove("color1");
  }
}

window.addEventListener("scroll", bg);
