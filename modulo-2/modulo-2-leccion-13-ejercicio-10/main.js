'use strict';

const users = [
  { name: 'María', isPremium: false, pin: 2389 },
  { name: 'Lucía', isPremium: true, pin: 2384 },
  { name: 'Susana', isPremium: true, pin: 2837 },
  { name: 'Rocío', isPremium: false, pin: 5232 },
  { name: 'Inmaculada', isPremium: false, pin: 8998 },
];

const incidentUser = users.find((user) => user.pin === 5232);
const unsubscribedUser = users.findIndex((user) => user.pin === 5232);

// he quitado a la usuaria número 3, que es el resultado de unsubscridebUser y le he dicho que empiece a contar a partir del número 3 y que cuente 1 número solo, es decir, que solo me quite el 3
users.splice(3, 1);

console.log(incidentUser);
console.log(unsubscribedUser);

console.log(users);
