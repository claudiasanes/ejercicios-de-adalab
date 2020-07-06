'use strict';

const numberParagraph = document.querySelector('.number');

function getNumber() {
  fetch('https://rand.fun/number/integer')
    .then((response) => response.json())
    .then((data) => (numberParagraph.innerHTML = data.result));
}

document.querySelector('.js-emoji').addEventListener('click', getNumber);
