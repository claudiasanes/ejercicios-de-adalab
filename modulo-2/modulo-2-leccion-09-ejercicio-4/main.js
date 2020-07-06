'use strict';

/*
Flujo 1.1: pinto los datos
Flujo 1.2: Escucho evento click
---
Flujo 2.1: reacciono al click
Flujo 2.2: obtengo la info que necesito
Flujo 2.3: modifico mis datos
(reinicio el flujo)
Flujo 2.4: pinto los datos
Flujo 2.5: escucho evento click

*/

// partimos de un array con varios objetos
const tasks = [
  {
    name: 'Recoger setas en el campo',
    completed: true,
  },
  {
    name: 'Comprar pilas',
    completed: true,
  },
  {
    name: 'Poner una lavadora de blancos',
    completed: true,
  },
  {
    name: 'Aprender cómo se realizan las peticiones al servidor en JavaScript',
    completed: false,
  },
];

// a partir del array con objetos dado, primero debemos pintar la lista de tareas, el <ul> de mi html.
const ulElement = document.querySelector('.js-list');

// // Después de pintarlo, escuchamos los eventos, que es cuando la usuario realiza una acción que activa una función. Debemos leer la info de lo que ha hecho la usuario, que en este caso es tachar una tarea, modificamos los datos, en este caso el array

function paintTasks() {
  let className;
  let checked;
  let htmlCode = '';
  // si la tarea i(1a iteración) el elemento completed es igual a true entonces me pintas en la variable className throught y en la variable checked me pintas checked, si no, están vacías
  for (let i = 0; i < tasks.length; i += 1) {
    if (tasks[i].completed === true) {
      className = 'through';
      checked = 'checked';
    } else {
      className = '';
      checked = '';
    }
    // aquí genero el código html que quiero que aparezca, lo partimos así para que sea más fácil de leer
    htmlCode += `<li class="${className}">`;
    // con value identifico los elementos de forma única, ya que i= i+1, por lo tanto el primer value será 1, el segundo 2, el tercero 3 y así
    htmlCode += `<input type="checkbox" ${checked} class="js-checkbox" value="${i}" />`;
    htmlCode += `${tasks[i].name}</li>`;
  }
  ulElement.innerHTML = htmlCode;
}

// ahora tenemos que escuchar eventos
//creo la función manejadora
function handleCheckbox(ev) {
  const index = parseInt(ev.target.value);
  // un boobleano negado, si es true, al negarlo lo convertimos en false, y si es false lo convertimos en true
  tasks[index].completed = !tasks[index].completed;
  updateAll();
}

function listenerCheckboxEvents() {
  // coge todos los elementos del html con la clase js-checkbox con querySelectorAll y dentro del array checkboxElements escucho cada uno de sus elementos, para ello tengo que crear un buble que me recorra todo el array y ejecuto la función manejadora handleCheckbox
  const checkboxElements = document.querySelectorAll('.js-checkbox');
  for (let i = 0; i < checkboxElements.length; i++) {
    checkboxElements[i].addEventListener('change', handleCheckbox);
  }
}

//reset
const resetElement = document.querySelector('.js-reset');

function reset(ev) {
  ev.preventDefault();
  for (const task of tasks) {
    task.completed = false;
  }
  updateAll();
}

resetElement.addEventListener('click', reset);

// start app
function updateAll() {
  paintTasks();
  listenerCheckboxEvents();
}

updateAll();
