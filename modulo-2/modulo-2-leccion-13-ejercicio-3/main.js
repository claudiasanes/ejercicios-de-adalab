'use strict';

// const names = ['María', 'Lucía', 'Susana', 'Rocío', 'Inmaculada'];
// const welcome = names.map((name) => `Bienvenida ${name}`);
// console.log(welcome);

const users = [
  { name: 'María', isPremium: false },
  { name: 'Lucía', isPremium: true },
  { name: 'Susana', isPremium: true },
  { name: 'Rocío', isPremium: false },
  { name: 'Inmaculada', isPremium: false },
];

const PremiumUsers = users.map((user) => {
  if (user.isPremium === false) {
    return `Bienvenida ${user.name}`;
  } else if (user.isPremium === true) {
    return `Bienvenida ${user.name}. Gracias por confiar en nosotros.`;
  }
});

console.log(PremiumUsers);
