'use strict';

const button = document.querySelector('.btn');

function getSWAPI() {
  const swapiUrl = document.querySelector('.seeker').value;

  fetch(`https://swapi.dev/api/${swapiUrl}`)
    .then((response) => response.json())
    .then((data) => console.log(data));
  return fetch(swapiUrl);
}

button.addEventListener('click', getSWAPI);

console.log(getSWAPI());
