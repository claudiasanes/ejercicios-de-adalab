'use strict';

const promos = [
  {
    promo: 'A',
    name: 'Ada',
    students: [
      {
        id: 'id-1',
        name: 'Sofía',
        age: 20,
      },
      {
        id: 'id-2',
        name: 'María',
        age: 21,
      },
      {
        id: 'id-3',
        name: 'Lucía',
        age: 22,
      },
    ],
  },
  {
    promo: 'B',
    name: 'Borg',
    students: [
      {
        id: 'id-4',
        name: 'Julia',
        age: 23,
      },
      {
        id: 'id-5',
        name: 'Tania',
        age: 24,
      },
      {
        id: 'id-6',
        name: 'Alaia',
        age: 25,
      },
    ],
  },
  {
    promo: 'C',
    name: 'Clarke',
    students: [
      {
        id: 'id-7',
        name: 'Lidia',
        age: 26,
      },
      {
        id: 'id-8',
        name: 'Celia',
        age: 27,
      },
      {
        id: 'id-9',
        name: 'Nadia',
        age: 28,
      },
    ],
  },
];

// const studentsWorkingInGoogle = ['id-2', 'id-3', 'id-5', 'id-9'];

// ------ TÚ CÓDIGO AQUÍ ------

// EJERCICIO 1 ------

// quiero pintar en nombre de la promoción

const resultElment = document.querySelector('.js-result');

const showPromos1 = () => {
  // primero le meto el ul, fuera de for ya que el ul solo quiero que aparezca una vez
  let codeHtml = `<ul>`;
  for (const promo of promos) {
    console.log(promo.name); // esto me va a dar los nombres de Ada Borg y Clarke
    // esto al ir dentro del for, del bucle, solo me hae falta meter 1 vez el li con la info que quiero y el for recorrerá y verá cuantas veces existe esa info, en este caso le he pedido el name, que hay tres, así que se me creará tres veces con los tres nombres
    codeHtml += `<li>${promo.name}</li>`;
  }
  codeHtml += `</ul>`;
  resultElment.innerHTML = codeHtml;
};

showPromos1();

// EJERCICIO 4 ------

const resultElment = document.querySelector('.js-result');

const showPromos4 = () => {
  let codeHtml = `<ul>`;
  for (const promo of promos) {
    codeHtml += `<li>`;
    codeHtml += `<p> Nombre:${promo.name}</p>`;
    codeHtml += `<ul>`;
    const students = promo.students;
    for (const student of students) {
      codeHtml += `<li> Nombre:${student.name}</li>`;
    }
    codeHtml += `</ul>`;
    codeHtml += `</li>`;
  }
  codeHtml += `</ul>`;
  resultElment.innerHTML = codeHtml;
};

showPromos4();

// EJERCICIO 4B ------

// lo mismo pero hecho con for clásico

const resultElment = document.querySelector('.js-result');

const showPromos4 = () => {
  let codeHtml = `<ul>`;
  for (let i = 0; i < Array.length; i++) {
    const element = promos[i];
    codeHtml += `<li>`;
    codeHtml += `<p> Nombre:${element.name}</p>`; // es lo mismo que `<p> Nombre:${promo[i].name}</p>`;
    codeHtml += `<ul>`;
    const students = promo.students;
    for (const student of students) {
      codeHtml += `<li> Nombre:${student.name}, ${student.age}</li>`;
    }
    codeHtml += `</ul>`;
    codeHtml += `</li>`;
  }
  codeHtml += `</ul>`;
  resultElment.innerHTML = codeHtml;
};

showPromos4();
