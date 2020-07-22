'use strict';

/* Do your magic! 🦄🦄🦄*/

const ENDPOINT =
  'https://raw.githubusercontent.com/Adalab/ejercicios-en-clase-j/master/modulo-2-practica-fin-de-semana-02-fetch/data/users.json';

let users = [];
let favorites = getLocalData();

const list = document.querySelector('.js-user-list');
console.log('hola');

// 1) creamos una función para obtener los datos contenidos en la API contenido en la constante ENDPOINT, ejecutamos dentro las funciones paintData - para que me pinte los datos - y addListener - para que los datos que me haya pintado tengan el listener, de tal modo que si hago click ejecute la función
function getData() {
  fetch(ENDPOINT)
    // lo que sea que me llegue que me lo transforme a json, json lleva() orque es un método, resonse es un objeto
    .then((response) => response.json())
    // data es todo lo que recibo de la api
    .then((data) => {
      users = data;
      // meto aquí la función paintData() porque fuera no está definido ni data ni users (users fuera está vacío)
      paintDataIndex(users);
      addListeners();
      checkFavorites();
      console.log(users);
    });
}
// esta función no depende de ningún evento por lo que tendré que ejecutarle para que ocurra lo que hay dentro
getData();

// 2) esta función se encarga de pintar los datos obtenidos del data, en este caso, si miramos la API encontramos que necesitamos los valores name, comment y picture de los objetos contenido en el array. Hacemos un buble for of para recorrer el array y pintar estos datos todas las veces que aparezcan
/*function paintData(array) {
  for (const elem of array) {
    // arriba creamos una variable "list" vacía que vamos a llenar ahora que sabemos qué datos queremos meter
    list.innerHTML += `<li><div><img src="${elem.picture}"><span>${elem.name}</span><div><p>${elem.comment}</p></li>`;
  }
}*/

function paintDataIndex(array) {
  for (let i = 0; i < array.length; i++) {
    list.innerHTML += `<li id='princess-${i}'><div><img src="${array[i].picture}"><span>${array[i].name}</span><div><p>${array[i].comment}</p></li>`;
  }
}

// en esta función añadimos los listeners a todos los elementos 'li', que son los contenedores del perfil de cada princesa, una vez hemos llamado a todos los li los recorremos con un bucle, para que afecte a todos y le ponemos listeners con un click ejecuten la función addToFavorites
function addListeners() {
  const liElemList = document.querySelectorAll('li');
  for (const li of liElemList) {
    li.addEventListener('click', favoritesHandler);
  }
}

function favoritesHandler(evt) {
  const target = evt.currentTarget;
  addToFavorites(target);
  saveIntoLocal();
}

// la función del evento, no se ejecuta hasta que no suceda el evento
function addToFavorites(targetElem) {
  // llamamos a una constante que es sobre la que va a ocurrir el evento, pero se odría poner a pelo ev.currentTarget.classList.add('favorite'), pero de esta forma es más claro
  // creamos una constante que es igual al contenido del span del elemento sobre el que tenga el evento tenga puesto el listener
  const princessName = targetElem.querySelector('span').innerHTML;
  // hacemos un for(bucle) que recorra todos los objetos del data (ya que data es un array con 7 objetos, cada uno con los datos de una princesa). users es igual a data (lo hemos difinido en la primera función) y user es uno de los elementos de users, en este caso el objeto de cada princesa
  // for (const user of users) {
  // declaramos un condicional donde si el valor name de uno de los objetos es igua a princessName (el contenido del spam del elemento sobre el que el evento tenga puesto el listener en ese momento) entonces se añade ese user al array 'favorites', que definimos arriba del todo y está vacío
  //  if (user.name === princessName) {
  // favorites.push(user);
  //}
  //}

  // le añadimos a elemento sobre el que sucede el evento(el li sobre el que se haga click), se le añade la clase favorite, que cambia el fondo a otro color

  const elemIndex = favorites.findIndex((elem) => elem.name === princessName);

  if (elemIndex === -1) {
    targetElem.classList.add('favorite');
    const elemFavorite = users.find((user) => user.name === princessName);
    favorites.push(elemFavorite);
  } else {
    targetElem.classList.remove('favorite');
    favorites.splice(elemIndex, 1);
  }

  console.log(favorites);

  //ejecutamos la función de guardar los datos en local después de que marquemos algún user como favorito
}
// esta función guarda en el localStorage el array que contenga los users marcados como favoritos, la carpeta de localStorage se llama favoritePrincesses, de manera que cuando yo me vuelva a meter en la página esas princesas favoritas las tenga guardadas
function saveIntoLocal() {
  // es importante meter después del nombre de mi carpeta local y antes de los datos que queremos guardar dentro, el JSON.stringify (convierte los datos de un objeto literal o un array en una cadena, para que el localStorage lo pueda leer). El paso contrario, pasar de una cadena que tiene la información de un objeto a un objeto JavaScript usamos JSON.parse
  localStorage.setItem('favoritePrincesses', JSON.stringify(favorites));
}

function getLocalData() {
  const localFavorites = JSON.parse(localStorage.getItem('favoritePrincesses'));

  /*
  if(localFavorites !== null) {
    return localFavorites
  } else {
    return []
  }*/

  /*
  if(localFavorites === null) {
    return []
  } else {
    return localFavorites
  }*/

  return localFavorites === null ? [] : localFavorites;
}

// cuando recargas la página checkeará si los li's (objetos de cada perfil de princesa) est'en favoritos y si lo está le añadirá la clase así te seguirá apareciendo las princesas favoritas marcadas con el fondo de color
function checkFavorites() {
  const liElems = document.querySelectorAll('li');

  for (const li of liElems) {
    const princessName = li.querySelector('span').innerHTML;
    const elemFav = favorites.find((elem) => elem.name === princessName);

    if (elemFav !== undefined && princessName === elemFav.name) {
      li.classList.add('favorite');
    }
  }
}
