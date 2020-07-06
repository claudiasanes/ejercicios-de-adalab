"use strict";

const button = document.querySelector(".button");

const event = {
  type: button,
};

function logEvent() {
  console.log(event);
}

button.addEventListener("click", logEvent);
