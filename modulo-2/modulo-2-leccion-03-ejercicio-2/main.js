"use strict";

const userName = document.querySelector(".user-name");
userName.innerHTML = "Pepe";

if (userName === "Claudia" || userName === "Concha") {
  console.log(`Bienvenida, ${userName}`);
} else {
  console.log(
    `Lo siento pero el usuario que has introducido no está registrado`
  );
}
