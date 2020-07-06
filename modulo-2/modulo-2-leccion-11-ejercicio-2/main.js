'use strict';

const button = document.querySelector('.btn');
const result = document.querySelector('.result');

function getSWAPI() {
  const swapiCharacters = document.querySelector('.seeker').value;

  fetch(`https://swapi.dev/api/people/?search=${swapiCharacters}`)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      debugger;
      for (let i = 0; i < data.results.length; i++) {
        result.innerHTML = `El nombre es ${data.results[i].name} y el género es ${data.results[i].gender}`;
      }
    });
}

button.addEventListener('click', getSWAPI);
