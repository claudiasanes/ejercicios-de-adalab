'use strict';

const numbers = [1, 2, 3];

/*
// esta sería la solución hecho de la manera clásica
function numbersList() {
  const list = document.querySelector('.list');
  let listContent = '';
  for (let i = 0; i < numbers.length; i++) {
    // es importante aquí poner += porque si no solo saldrá el último valor del array
    listContent += `<li>${numbers[i]}</li>`;
  }
  list.innerHTML = listContent;

  return list;
}

numbersList();
*/

// Vamos a crear  un loop que por cada elemento del array numbers creará un nuevo elemento `li` y un textNode con el elemento del array como contenido.
for (let i = 0; i < numbers.length; i++) {
  // necesitamos referencia al ul
  const list = document.querySelector('.list');

  // Crea elemento li
  const newItem = document.createElement('li');

  // Crea contenido cuyo valor es el elemento del array
  const newContent = document.createTextNode(numbers[i]);

  // Añadimos el contenido al elemento li
  newItem.appendChild(newContent);
  // Añadimos el nuevo li y su contenido a la lista ul
  list.appendChild(newItem);
}
