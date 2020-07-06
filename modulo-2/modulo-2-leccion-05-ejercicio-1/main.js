"use strict";

// elemento de HTML
const button = document.querySelector(".btn");
const p = document.querySelector(".hello");

// handler
function showMessage() {
  p.innerHTML = "Mi primer click, ¡ole yo y la mujer que me parió!";
}

// listener sobre el elemento, con tipo de evento y handler
button.addEventListener("click", showMessage);
