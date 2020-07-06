'use strict';

//creamos un array con varios objetos dentro

const adalabers = [
  {
    name: 'María',
    age: 29,
    job: 'diseñadora',
  },
  {
    name: 'Lucía',
    age: 31,
    job: 'química',
  },
  {
    name: 'Susana',
    age: 34,
    job: 'periodista',
  },
  {
    name: 'Rocío',
    age: 25,
    job: 'actriz',
  },
  {
    name: 'Inmaculada',
    age: 21,
    job: 'diseñadora',
  },
];

function countAdalabers() {
  return adalabers.length;
}

function averageAge() {
  // variable a la que se le asignará la suma de todas las edades
  let acc = 0;

  for (i = 0; i < adalabers.length; i++) {
    // sumar edades en variable acc
    acc += adalabers[i].age;
  }
  return (result = acc / adalabers.length);
}

function theYoungest() {}

function countDesigners() {}
