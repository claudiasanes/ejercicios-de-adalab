"use strict";

const btn = document.querySelector(".button");
const message = document.querySelector(".input");

function hello() {
  message.value = "Hola, Claudia";
}

btn.addEventListener("click", hello);
