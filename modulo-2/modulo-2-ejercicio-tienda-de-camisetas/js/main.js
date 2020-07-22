'use strict';

// lo primero que tengo que hacer es obtener los atos de la api y pintarlos en un array
// me creo un array vacío donde iré metiendo los productos
let products = [];
// creamos este array que llenaremos con los productos que añadamos al carrito de la compra
let cart = [];

// API -------------------------------------------

// creo una función para recoger los datos de la api co el fetch
const getDataFromApi = () => {
  fetch('./api/data.json')
    .then((response) => response.json())
    .then((data) => {
      // le pongo data.items  porque yo quiero accedes a los objetos dentro de ese array
      products = data.items;
      // la ejecuto aquí porque dentro de esta función es donde he obtenido los productos, antes no existían
      paintProducts();
    });
};

// CATALOG PRODUCTS ----------------------------------------------

// es mucho más sencillo meter una maquetación de lo que queremos tener en html primero, con su css y todo y luego meterlo en JS que al revés

// ponemos for clásico porque for... of no te permite luego identificar un elemento del bucle de forma independiente, ya que tienen características distintas. Con datos como un id o un index, puedes ya que cada elemento va a tener uno de esos datos que no es el mismo para ningún otro elemento del bucle
const paintProducts = () => {
  // creo una variable donde iré pintando los objetos
  let codeHTML = '';
  for (let index = 0; index < products.length; index += 1) {
    codeHTML += `<article class="card">`;
    codeHTML += `  <img src="${products[index].imageUrl}" class="card__img" alt="products[index]o: ${products[index].name}">`;
    codeHTML += `  <h3 class="card__title">${products[index].name}</h3>`;
    codeHTML += `  <p class="card__description">${products[index].price} €</p>`;
    codeHTML += `  <button class="card__btn js-product-inc" id="${products[index].id} data-index="${index}" data-id="${products[index].id}">Añadir a la cesta</button>`;
    codeHTML += `</article>`;
  }
  // me traigo la sección del html dentro la cual pintaré las cards
  const cardsElement = document.querySelector('.js-cards');
  cardsElement.innerHTML = codeHTML;
  listenProductsClicks();
};

// CART ----------------------------------------------

const paintCart = () => {
  let codeHTML = '';
  for (let index = 0; index < cart.length; index += 1) {
    codeHTML += `<tr>`;
    codeHTML += `<td>${cart[index].name}</td>`;
    codeHTML += `<td>${cart[index].price}</td>`;
    codeHTML += `<td>`;
    codeHTML += `<button class="card__btn js-cart-decrement" id="${cart[index].id}">-</button>`;
    codeHTML += ` ${cart[index].quantity}`;
    codeHTML += `<button class="card__btn js-cart-increment" id="${cart[index].id}">+</button>`;
    codeHTML += `</td>`;
    codeHTML += `<td class="text-align-right">${
      cart[index].price * cart[index].quantity
    }€</td>`;
    codeHTML += `</tr>`;
  }
  codeHTML += getCartTotalHtmlCode();
  const cardsElement = document.querySelector('.js-cart');
  cardsElement.innerHTML = codeHTML;
  listenCartClicks();
};

const getCartTotalHtmlCode = () => {
  let htmlCode = '';
  htmlCode += `<tr class="text--bold">`;
  htmlCode += `  <td>Total</td>`;
  htmlCode += `  <td colspan="3" class="text-align-right">${getTotalPrice()}€</td>`;
  htmlCode += `</tr>`;
  return htmlCode;
};

const getTotalPrice = () => {
  let total = 0;
  for (const product of cart) {
    total += product.price * product.quantity;
  }
  return total;
  // el for anterior es equivalente a este reduce
  return cart.reduce((total, product) => total + product.price, 0);
};

// EVENTS --------------------------------------

// va a ser la función que se ejecuta cuando sucede el evento
const handleProductsClick = (ev) => {
  // cogemos el id porque distingue a producto de otro, entonces decimos que el evento sucede donde yo esté clickando en ese momento (ev.currentTarget) teniendo en cuenta el id de cada elemento para distinguirlos.
  // hago un parseInt porque al venir este id del html siempre siempre me viene con un string, así que lo tendré que pasar a número
  const clickedId = parseInt(ev.currentTarget.id);
  // busco con find dentro del array del cart si existe un elemento con el mismo id que el elemento clickado y me devuelve el objeto encontrado, si me devuelve undefined es que el objeto no existía
  const cartProduct = cart.find((productItem) => productItem.id === clickedId);
  const product = products.find((productItem) => productItem.id === clickedId);
  // lo mismo que acabamos que hacer con find pero con for of. creo un for of para que recorra los productos e identifique a cuál de los tres botones he pulsado
  // for (const product of products) {
  //   if (product.id === clickedId) {
  //     console.log(product);
  //   }
  //   cart.push(product);
  // }

  // si es undefined quire decir que no está metido ese procdcuto en el cart aun, en ese caso lo añado com prodcuto nuevo y lo meto al array de cart
  if (cartProduct === undefined) {
    // creas una nueva propiedad del objeto product y le dices que es igual a 1. es una propiedad más como name, img etc
    product.quantity = 1;
    cart.push(product);
    // si no solo me aumentas la cantidad del cartProduct
  } else {
    cartProduct.quantity += 1;
  }
  updateLocalStorage();
  paintCart();
};

const handleCartIncrementClick = (ev) => {
  // obtenemos el id del producto clickado
  const clickedId = parseInt(ev.currentTarget.id);
  // buscamos con find. El find es un método funcional, que siempre trabajan sobre arrays. Find ejecuta una función que va a pasar por cada uno de los elementos del array (buscando por id), cuando coincida con el id del elemento clickado dejará de recorrer y me devolverá un true, ese elemnto es al que le incrementará o decrementará la cantidad
  // const product = cart.find(productItem => productItem.id === clickedId);
  // buscamos con for of, que lo mismo que si utilizáramos la función findCartProduct
  // con el código: const productItem = findCartProduct(clickedId)
  for (const productItem of cart) {
    // cuando encontramos el producto
    if (productItem.id === clickedId) {
      // lo incrementamos
      productItem.quantity += 1;
      console.log(productItem);
    }
  }
  updateLocalStorage();
  paintCart();
};

const findCartProduct = (clickedId) => {
  for (const productItem of cart) {
    if (productItem.id === clickedId) {
      return productItem;
    }
  }
};

const handleCartDecrementClick = (ev) => {
  // obtenemos el id del producto clickado
  const clickedId = parseInt(ev.currentTarget.id);

  // buscamos con for clásico porque queremos saber el index del elemento
  for (let index = 0; index < cart.length; index++) {
    // en vez de for clásico podriamos utilizar find index para buscar la posición del elemento a borrar. buscart con findindex la condición que tenemos debajo de productItem.id === clickedId
    // const index = cart.findIndex(productItem => productItem.id === clickedId);
    const productItem = cart[index];
    // cuando encontramos el producto...
    if (productItem.id === clickedId) {
      // decrementamos solo en caso de que el cart tenga más de 1 unidad de ese producto
      if (productItem.quantity > 1) {
        productItem.quantity -= 1;
      } else {
        // si es 1, 0 o whatever, si no cumple lo del ser mayor que 1, entonces borro ese producto del cart, basándome en su índice
        cart.splice(index, 1);
      }
    }
  }
  updateLocalStorage();
  paintCart();
};

// llamamos a esta función en paintProducts() porque fuera no ha sucedido, los tres botonoes a los que voy a llamar aquí son llamados en esta función dinámica, no puedo buscar estos botones antes de haber sido pintados
const listenProductsClicks = () => {
  // llamo a todos los botones de las cards de añadir a la cesta, que es donde tengo que poner el escuchar de uno de los eventos para incluir un producto a la cesta de la compra
  const productsBtns = document.querySelectorAll('.js-product-inc');
  // recorro todos los botones con un for clásico y cuando los tengo identificados les pongo un listener para cuando haga click me haga algo que definiré a confinuación en la función handleProductsClick
  for (let index = 0; index < productsBtns.length; index++) {
    const productsBtn = productsBtns[index];
    productsBtn.addEventListener('click', handleProductsClick);
  }
};

const listenCartClicks = () => {
  const cartIncrementBtns = document.querySelectorAll('.js-cart-increment');
  for (let index = 0; index < cartIncrementBtns.length; index++) {
    const productsBtn = cartIncrementBtns[index];
    productsBtn.addEventListener('click', handleCartIncrementClick);
  }
  const cartDecrementBtns = document.querySelectorAll('.js-cart-decrement');
  for (let index = 0; index < cartDecrementBtns.length; index++) {
    const productsBtn = cartDecrementBtns[index];
    productsBtn.addEventListener('click', handleCartDecrementClick);
  }
};

// LOCAL STORAGE ------------------------------

// el intringify pasa a texto los datos del objeto para poder que el lolcastorage pueda leerlo y se pueda guardar en él, la ejecuto cuando se modifica el cart con alguna acción del usuario
const updateLocalStorage = () => {
  localStorage.setItem('cart', JSON.stringify(cart));
};

const getFromLocalStorage = () => {
  const data = JSON.parse(localStorage.getItem('cart'));
  // si data es null quiere decir que es la primera vez que entra a la página por lo tanto el cart está vacío, entonces, le digo que en caso de que no sea null me modifique  los datos de la compra si ya tengo algo guardardado en localStorage, es decir, si la usuaria ya había guardados cosas en el cart, sino hago esto me dará error
  // guardo los datos objetinos en el array de cart (arriba del todo), igual el array del cart al data
  if (data !== null) {
    cart = data;
  }
};

// RESET ------------------------------------

const btnReset = document.querySelector('.js-reset');

const resetCart = () => {
  cart = [];
  updateLocalStorage();
  paintCart();
};

btnReset.addEventListener('click', resetCart);

// start app

getDataFromApi();
getFromLocalStorage();
paintProducts();
paintCart();
