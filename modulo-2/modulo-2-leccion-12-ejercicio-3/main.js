'use strict';

const selectForm = document.querySelector('.js-select');
let options = [];
const formName = document.querySelector('.js-name');
const formLastname = document.querySelector('.js-lastname');
const formPhone = document.querySelector('.js-phone');

const users = [
  {
    name: 'Claudia',
    lastname: 'Flor',
    phone: 222333444,
  },
  {
    name: 'Pepa',
    lastname: 'Luna',
    phone: 555666777,
  },
  {
    name: 'Guille',
    lastname: 'Mandarina',
    phone: 888999000,
  },
];

function createUserOPtions() {
  // hacemos un bucle para que me recorra todos los objetos del array
  for (let i = 0; i < 3; i++) {
    let option = document.createElement('option');
    let content = document.createTextNode(users[i].name);
    option.appendChild(content);
    option.value = users[i].name;
    // para que todas las opciones tengan una clase común y así poderlos seleccionar todos
    option.classList.add('options');
    // ahora ya metemos los nombres dentro del select
    selectForm.appendChild(option);
  }
}

function handlerClick(event) {
  options = document.querySelectorAll('.options');
  let selectedPerson = event.currentTarget.value;
  let select = controlChange(selectedPerson);
  formName.value = users[select].name;
  formLastname.value = users[select].lastname;
  formPhone.value = users[select].phone;
}

function controlChange(p) {
  let number = 0;
  for (const person of users) {
    if (person.name === p) {
      number = users.indexOf(person);
    }
  }
  return number;
}

createUserOPtions();
selectForm.addEventListener('change', handlerClick);
