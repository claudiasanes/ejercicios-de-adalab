"use strict";

const input = document.querySelector(".js-input");
const result = document.querySelector(".js-result");

function handleInput() {
  console.log("Han tecleado");
  result.innerHTML = input.value;
}

input.addEventListener("keyup", handleInput);
