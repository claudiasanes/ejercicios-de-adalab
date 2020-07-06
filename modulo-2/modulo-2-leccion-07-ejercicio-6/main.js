'use strict';

// Usando for...of vamos a hacer un pequeño programa que le pregunte a la usuaria cuáles son sus dos películas o libros favoritos mediante un formulario. Cuando pulse el botón enviar guardaremos la información en un array, lo recorreremos y mostraremos este mensaje por cada obra: "¡A mí también me encantó "OBRA"! Tenemos mucho en común, humana.", donde OBRA será el nombre de la obra.

const button = document.querySelector('.btn');

function showMessage() {
  // hay que definir estas constantes dentro del handler
  const book1Value = document.querySelector('#book1').value;
  const book2Value = document.querySelector('#book2').value;
  const bookList = [book1Value, book2Value];

  for (const book of bookList) {
    console.log(
      `¡A mí también me encantó "${book}"! Tenemos mucho en común, humana.`
    );
  }
}

button.addEventListener('click', showMessage);
