'use strict';

const buttons = document.querySelector('.radiobtn');
const lightTheme = document.querySelector('#light');
const darkTheme = document.querySelector('#dark');

const container = document.querySelector('.container');

buttons.addEventListener('change', changeTheme);

function changeTheme(ev) {
  if (ev.currentTarget === lightTheme) {
    container.classList.add('light');
    container.classList.remove('dark');
  } else if (ev.currentTarget === darkTheme) {
    container.classList.add('dark');
    container.classList.remove('light');
  }
}
