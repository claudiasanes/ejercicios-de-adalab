'use strict';

// DATA

const product1 = {
  name: 'Node JS',
  price: 12,
  imageUrl: './images/node-js.jpg',
  quantity: 1,
};

const product2 = {
  name: 'JavaScript',
  price: 15,
  imageUrl: './images/javascript.jpg',
  quantity: 1,
};

const product3 = {
  name: 'React JS',
  price: 13,
  imageUrl: './images/react.jpg',
  quantity: 1,
};

// PAINT PRODUCTS

const cardsElement = document.querySelector('.js-products');

// le hemos metido los parámetros name, price y imageUrl porque son los que van a variar en cada card
function getProductHtmlCode(product) {
  let htmlCode = '';
  htmlCode += `<article class="card">`;
  htmlCode += `  <img src="${product.imageUrl}" class="card__img" alt="Producto: ${product.name}">`;
  htmlCode += `  <h3 class="card__title">${product.name}</h3>`;
  htmlCode += `  <p class="card__description">${product.price} €</p>`;
  htmlCode += `  <button class="card__btn">Añadir a la cesta</button>`;
  htmlCode += `</article>`;
  return htmlCode;
}

// creamos una función para coger los productos y meterlos en card elements, es deir, pintar los produtos en la pantalla
function paintProducts() {
  const _product1 = getProductHtmlCode(product1);
  const _product2 = getProductHtmlCode(product2);
  const _product3 = getProductHtmlCode(product3);
  cardsElement.innerHTML = _product1 + _product2 + _product3;
}

// debemos ejecutar la función, si no aparecerá como undefined
paintProducts();

// paint cart items

const cartElement = document.querySelector('.js-cart');

function getCartItemHtmlCode(product) {
  let htmlCode = '';
  htmlCode += `<tr>`;
  htmlCode += `  <td>${product.name}</td>`;
  htmlCode += `  <td>${product.price}</td>`;
  htmlCode += `  <td>`;
  htmlCode += `    <button class="js-dec-btn card__btn">-</button>`;
  htmlCode += `    ${product.quantity}`;
  htmlCode += `    <button class="js-inc-btn card__btn">+</button>`;
  htmlCode += `  </td>`;
  htmlCode += `  <td class="text-align-right">${
    product.price * product.quantity
  }€</td>`;
  htmlCode += `</tr>`;
  return htmlCode;
}

function getCartTotalHtmlCode(totalPrice) {
  let htmlCode = '';
  htmlCode += `<tr class="text--bold">`;
  htmlCode += `  <td>Total</td>`;
  htmlCode += `  <td colspan="3" class="text-align-right">${totalPrice}€</td>`;
  htmlCode += `</tr>`;
  return htmlCode;
}

function paintCartItems() {
  cartElement.innerHTML = '';
  const totalPrice =
    product1.price * product1.quantity +
    product2.price * product2.quantity +
    product3.price * product3.quantity;
  const item1 = getCartItemHtmlCode(product1);
  const item2 = getCartItemHtmlCode(product2);
  const item3 = getCartItemHtmlCode(product3);
  const total = getCartTotalHtmlCode(totalPrice);
  cartElement.innerHTML = item1 + item2 + item3 + total;
  // para que cada vez que yo pulse el botón de incrementar o decrementar, cada vez que pinte una cantidad distinta, escuchamos. esta función se podría meter también debajo de cada vez que ejecutamos paintCardItems(), pero si ya la metemos dentro de esa misma función no hace falta estar repitiéndola, ya sabrá que cada vez que pinte nuevos números escuchará
  listenCartBtns();
}
paintCartItems();

// listen events

function handleQuantityBtn(ev) {
  const currentTarget = ev.currentTarget;
  if (currentTarget.classList.contains('js-inc-btn')) {
    product1.quantity += 1;
  } else if (product1.quantity > 0) {
    product1.quantity -= 1;
  }
  paintCartItems();
}

// creamos esta función para que
function listenCartBtns() {
  const incBtn = document.querySelector('.js-inc-btn');
  incBtn.addEventListener('click', handleQuantityBtn);
  const decBtn = document.querySelector('.js-dec-btn');
  decBtn.addEventListener('click', handleQuantityBtn);
}

// address

const userAddress = {};

const address = document.querySelector('.js-address');
const city = document.querySelector('.js-city');
const zip = document.querySelector('.js-zip');

function handleAddress(ev) {
  // el name es el que lleva dentro del input, en este caso los names de los inputs que tengo en htl son city, address y zip, pero así no lo tengo que repeteir 3 veces, según donde esté será uno u otro
  const name = ev.currentTarget.name;
  userAddress[name] = ev.currentTarget.value;
}

address.addEventListener('keyup', handleAddress);
city.addEventListener('keyup', handleAddress);
zip.addEventListener('keyup', handleAddress);
