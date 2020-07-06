"use strict";

/* EJERCICIO 1 */

document.querySelector("h1").innerHTML =
  "Esta página no es compatible con la versión actual de tu navegador. Por favor actualízalo a la versión más reciente";

/* EJERCICIO 2 sin terminar */

const direction = document.querySelector(".dir");
direction.innerHTML = "Cuesta San Vicente";

direction = "Calle Mayor";

/* EJERCICIO 3 */

// Obtenemos el elemento con el que queremos trabajar usando document.querySelector()
const textElement = document.querySelector(".text");

// Cambiamos el contenido del elemento, indicando que sea igual al actual, más una nueva palabra añadida
textElement.innerHTML = textElement.innerHTML + " Mundo";

/* EJERCICIO 4 */

const item1 = document.querySelector(".item1");
const item2 = document.querySelector(".item2");
const select = document.querySelector(".h2");
select.innerHTML = select.innerHTML + item1.innerHTML;

/* EJERCICIO 5 */

const password = document.querySelector(".ejercicio5");
password.innerHTML = "**";

/* EJERCICIO 6 */

const content6 = document.querySelector(".ejercicio6");
const content1 =
  "<h1>Lorem ipsum</h1><img src='http://via.placeholder.com/350x150' alt='img'><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>";

content6.innerHTML = content1;

/* EJERCICIO 7 */

const content7 = document.querySelector(".ejercicio7");
const contentLi = "<li>1</li><li>2</li><li>3</li>";

content7.innerHTML = contentLi;

/* EJERCICIO 8 */

const buttonDisabled = document.querySelector(".button-2");
buttonDisabled.classList.add("opacity");
