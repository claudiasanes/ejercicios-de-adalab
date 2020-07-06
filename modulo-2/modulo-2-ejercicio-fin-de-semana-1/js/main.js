"use strict";

//SELECTORS...

const userName = document.querySelector(".js-user-name");
const userPasswrod = document.querySelector(".js-user-password");
const loginButton = document.querySelector(".js-login-button");
const errorMessage = document.querySelector(".error-wrapper");

let attemps = 0;

const userInfo = {
  name: "front23",
  password: "bicicleta",
};

//FUNCTIONS

function enterID() {
  //Number of user attemps
  // Nada más clickear el botón, se considera un intento, por lo que antes de analizar nada con condicionales, tenemos que incrementar el valor de attempts por 1. Esto lo podemos hacer con dos operadores:
  // attemps += 1;
  // attemps++;
  attemps += 1;
  if (
    userName.value === userInfo.name &&
    userPasswrod.value === userInfo.password
  ) {
    alert("Estás dentro 🕺🏻");
  } else if (attemps > 3) {
    alert("BLOQUEADO 🔥");
  } else {
    errorMessage.classList.remove("hidden");
  }
}

//LISTENERS

loginButton.addEventListener("click", enterID);
