'use strict';

// 1. lo primero es ver los flujos del usuario y decidimos or donde vamos a empezar

// 2. ahora escuchamos el botón, lo llamamos
const btn = document.querySelector('.js-update');
// 3. probamos a ver is lo hemos hecho bien
console.log(btn);
// 7. pintamos la constante face, que es el h1
const face = document.querySelector('.js-face');
const select = document.querySelector('.js-select-face');
// 10. llamamos a la constante del contenedor que va a tener el color de fondo
const container = document.querySelector('.js-container');

// 5. añadimos la función
function handlerUpdateClick() {
  // 6. metemos esta cnstante aquí porque si la metemos fuera no irá cambiando cuando yo haga update, sino que mantendrá el valor que tenía fuera. Sacamos el value de la variable select
  let selectValue = select.value;
  // 8. recogemos el value del input y lo pintamos en dentro del contenido del h1 (inner.html)
  face.innerHTML = selectValue;
  // 9. vamos al siguiente paso, crear una variable que sea igual a número aleatiorio de entre 0 y 100, multiplicando por 100 y sin decimales, con parseInt
  const randomNumber = parseInt(Math.random() * 100);
  console.log(randomNumber);
  // 11. creamos la condicional de los pares e impares y los colores de fondo. Si el número que sea tiene se divide entre 2 y el resto es =  a 0 entonces es par.
  if (randomNumber % 2 === 0) {
    container.classList.add('correct-yellow-color');
    container.classList.remove('chilean-fire-color');
  } else {
    container.classList.add('chilean-fire-color');
    container.classList.remove('correct-yellow-color');
  }
}

// 4. añadimos el listener
btn.addEventListener('click', handlerUpdateClick);

// 12. por último, para hacerlo todo más limpio y ordenado, en ve de una sola función estaría mejor dividirlo en varias funciones, paso por paso, lo dejo comentado cómo sería

/* 

function handlerUpdateClick(ev) {
    updateFace();
    updateBackground();
}

function updateFace() {
    let selectValue = select.value;
    face.innerHTML = selectValue; 
}

function updateBackground() {
  const randomNumber = parseInt(Math.random() * 100);
    if (randomNumber % 2 === 0) {
        container.classList.add('correct-yellow-color');
        container.classList.remove('chilean-fire-color');
    } else {
        container.classList.add('chilean-fire-color');
        container.classList.remove('correct-yellow-color');
    }
}

btn.addEventListener('click', handlerUpdateClick);

*/
