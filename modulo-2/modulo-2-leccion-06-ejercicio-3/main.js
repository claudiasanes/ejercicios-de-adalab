"use strict";

const adalaber2 = {};
adalaber2.name = "Rocío";
adalaber2.age = 25;
adalaber2.job = "actriz";
adalaber2.distance = 50;
adalaber2.run = (phrase) => `Estoy corriendo ${phrase}`;
adalaber2.showBio = function () {
  return (
    "Mi nombre es" +
    this.name +
    "tengo" +
    this.age +
    "años y soy" +
    this.currentJob
  );
};

console.log(adalaber2.showBio());

const result2 = document.querySelector(".js-result2");

result2.innerHTML = `Mi nombre es ${adalaber2.name}, tengo ${adalaber2.age} años y soy ${adalaber2.job}`;
