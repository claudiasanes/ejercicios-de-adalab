'use strict';

// lo primero es llamar a los elementos que voy a necesitar, en este caso el botón, sobre el que pondremos un listener, el que ejecutará la función
const button = document.querySelector('.btn');
// definimos el listener
button.addEventListener('click', getUserData);

// añadimos la función
function getUserData() {
  // llamamos al value del input, que es donde escribiremos el usuarios que queremos buscar
  const username = document.querySelector('.username').value;
  // añadimos el fetch con la url y la variable username, ya que todavía no sabemos cuál introducirá el usuario en el input
  fetch(`https://api.github.com/orgs/${username}`)
    // transformamos la respuesta de la url en json para que JS lo pueda leer
    .then((response) => response.json())
    // con el data(la info) que nos devuelve json vamos a llamar  las constantes que nos interesan, con las que queremos trabajar
    .then((data) => {
      const name = document.querySelector('.name');
      const img = document.querySelector('.avatar');
      const repositories = document.querySelector('.repositories');
      // Asignamos como valor de estas constantes los datos que hemos obtenido de la api. En este caso, las propiedades que queremos acceder son: "name" (nombre), "avatarl_url" (imagen) y "public_repos" (nº de repositorios). Si no entiendes de dónde he sacado estos nombres, échale un ojo a este ejemplo (de Miguel tihihi): https://api.github.com/users/migueldelmazo
      name.innerHTML = data.name;
      img.src = data.avatar_url;
      repositories.innerHTML = data.public_repos;
    });
}
