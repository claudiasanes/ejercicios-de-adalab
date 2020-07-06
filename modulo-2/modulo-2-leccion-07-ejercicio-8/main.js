'use strict';

const buttons = document.querySelectorAll('.btn');

function changeBackgroundColor(event) {
  event.currentTarget.classList.toggle('alert');
}

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', changeBackgroundColor);
}
