"use strict";

const adalaber1 = {
  name: "Susana",
  age: 34,
  job: "periodista",
};

const result = document.querySelector(".js-result");

result.innerHTML = `Mi nombre es ${adalaber1.name}, tengo ${adalaber1.age} años y soy ${adalaber1.job}`;

const adalaber2 = {};
adalaber2.name = "Rocío";
adalaber2.age = 25;
adalaber2.job = "actriz";
// ejercicio 2
adalaber2.distance = 50;
adalaber2.run = (phrase) => `Estoy corriendo ${phrase}`;

const result2 = document.querySelector(".js-result2");

result2.innerHTML = `Mi nombre es ${adalaber2.name}, tengo ${adalaber2.age} años y soy ${adalaber2.job}`;

//ejercicio 2
const running = document.querySelector(".js-run");
running.innerHTML = `${adalaber2.run("una maratón")} de ${
  adalaber2.distance
} kilómetros`;
