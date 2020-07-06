"use strict";

/* EJERCICIO 2 */

const superWave = document.querySelector(".super-wave");

superWave.classList.add("color");

console.log(superWave);

/* EJERCICIO 3 */

const kiwis = 2 * 5;
const peras = 3 * 2;
const uvas = 0.5 * 4;
console.log(kiwis + peras + uvas);

/* EJERCICIO 4 */

const total = parseInt(document.querySelector(".total").innerHTML);
const people = parseInt(document.querySelector(".people").innerHTML);
const difference = parseInt(document.querySelector(".difference").innerHTML);

const sharePeople = (total - difference) / people;
const shareAna = sharePeople + difference;

document.querySelector(".shareAna").innerHTML = shareAna + "euros";
document.querySelector(".sharePeople").innerHTML = sharePeople + "euros";

/* EJERCICIO 5 */

let year = 60;
const day = 365;
const hour = 24;

const totalHours = year * day * hour;

// year = 26;

// const totalHours = year * day * hour;
// console.log(totalHours);

/* EJERCICIO 6 y 7 */

const name = "Lola";
console.log(`Hola ${name}, encantada de conocerte`);

/* EJERCICIO 8 */

const firstDogImage =
  "https://images.dog.ceo/breeds/schipperke/n02104365_8156.jpg";
const firstDogName = "Dina";

const secondDogImage =
  "https://images.dog.ceo/breeds/collie-border/n02106166_355.jpg";
const secondDogName = "Luna";

const thirdDogImage =
  "https://images.dog.ceo/breeds/affenpinscher/n02110627_7065.jpg";
const thirdDogName = "Lana";

const dog1 = document.querySelector(".dog-1");
const dog2 = document.querySelector(".dog-2");
const dog3 = document.querySelector(".dog-3");

dog1.innerHTML = `<img src='${firstDogImage}' alt='${firstDogName}'>`;
dog2.innerHTML = `<img src='${secondDogImage}' alt='${secondDogName}'>`;
dog3.innerHTML = `<img src='${thirdDogImage}' alt='${thirdDogName}'>`;

/* EJERCICIO 9 */

const partnerName = document.querySelector(".partnerName");
const numberCharacter = document.querySelector(".numberCharacter");

partnerName.innerHTML = "Concha Asensio ";
numberCharacter.innerHTML = partnerName.innerHTML.length;

/* EJERCICIO 10 */

/* EJERCICIO 11 */
