"use strict";

const activableSection = document.querySelector(".p");
const activableTitle = document.querySelector(".h1");

if (activableSection.classList.contains("success")) {
  activableTitle.innerHTML = "CORRECTO";
  activableSection.innerHTML = "Los datos son correctos.";
} else if (activableSection.classList.contains("warning")) {
  activableTitle.innerHTML = "AVISO";
  activableSection.innerHTML = "Tenga cuidado";
} else if (activableSection.classList.contains("error")) {
  activableTitle.innerHTML = "ERROR";
  activableSection.innerHTML = "Ha surgido un error";
}
