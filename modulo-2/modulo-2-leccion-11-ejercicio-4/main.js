'use strict';

const inputName = document.querySelector('.name');
const paragraph = document.querySelector('.paragraph');

function saveName() {
  let inputValue = document.querySelector('.name').value;
  paragraph.innerHTML = inputValue;

  localStorage.setItem('name', inputValue);
}

inputName.addEventListener('keyup', saveName);
