Aquí voy a ir metiendo alternativas que no hemos metido pero que se podrían usar

---------- esto sería la función paintProducts con for... of ----------
const paintProducts = () => {
let codeHTML = '';
for (const product of products) {
codeHTML += `<article class="card">`;
codeHTML += `<img src="${product.imageUrl}" class="card__img" alt="producto: ${product.name}">`;
codeHTML += `<h3 class="card__title">${product.name}</h3>`;
codeHTML += `<p class="card__description">${product.price} €</p>`;
codeHTML += `<button class="card__btn" id="${product.id}">Añadir a la cesta</button>`;
codeHTML += `</article>`;
}
const cardsElement = document.querySelector('.js-cards');
cardsElement.innerHTML = codeHTML;
};

---------- esta es la versión del contenido de la función listenProdutClicks(); con for... of pero lo vamos a hacer con for clásico, como vemos justo debajo ----------

const productsBtns = document.querySelector('js-product-inc');
for (const productsBtn of productsBtns) {
productsBtn.addEventListener('click', handleProductsClick);
};

---------- alternativas para localizar el botón sobre el que se está haciendo click en el producto ----------
const handleProductsClick = (ev) => {
esta es la escogida finalmente ---> const clickedId = parseInt(ev.currentTarget.id);
const clickedIndex = ev.currentTarget.dataset.index;
const clickedProduct = products[clickedIndex];
console.log('me han clickado', clickedProduct);

---------- con método funcional de array ----------

const product = products.find(productItem => productItem.id === clickedId;)

esto es haciendo con un método funcionl de array lo mismo que:

for (const product of products) {
if (product.id === clickedId) {
console.log(product);
}
}

---

-//

// // product objects methods

// function incQuantity() {
// this.quantity += 1;
// }

// function decQuantity() {
// if (this.quantity > 0) {
// this.quantity -= 1;
// }
// }

// // PAINT PRODUCTS

// let cardsElement = document.querySelector('.js-products');

// // le hemos metido los parámetros name, price y imageUrl porque son los que van a variar en cada card
// function getProductHtmlCode(product) {
// let htmlCode = '';
// htmlCode += `<article class="card">`;
// htmlCode += `<img src="${product.imageUrl}" class="card__img" alt="Producto: ${product.name}">`;
// htmlCode += `<h3 class="card__title">${product.name}</h3>`;
// htmlCode += `<p class="card__description">${product.price} €</p>`;
// htmlCode += `<button class="card__btn">Añadir a la cesta</button>`;
// htmlCode += `</article>`;
// return htmlCode;
// }
// // creamos una función para coger los productos y meterlos en card elements, es decir, pintar los produtos en la pantalla
// function paintProducts() {
// let productsCode = '';
// for (const product of products) {
// productsCode += getProductHtmlCode(product);
// }
// // productsElement.innerHTML = productsCode;
// // const \_product1 = getProductHtmlCode(product1);
// // const \_product2 = getProductHtmlCode(product2);
// // const \_product3 = getProductHtmlCode(product3);
// // productsElement.innerHTML = \_product1 + \_product2 + \_product3;
// }

// // debemos ejecutar la función, si no aparecerá como undefined
// paintProducts();

// // paint cart items

// const cartElement = document.querySelector('.js-cart');

// function getCartItemHtmlCode(product) {
// let htmlCode = '';
// htmlCode += `<tr>`;
// htmlCode += `<td>${product.name}</td>`;
// htmlCode += `<td>${product.price}</td>`;
// htmlCode += `<td>`;
// htmlCode += `<button class="js-dec-btn card__btn">-</button>`;
// htmlCode += `${product.quantity}`;
// htmlCode += `<button class="js-inc-btn card__btn">+</button>`;
// htmlCode += `</td>`;
// htmlCode += `<td class="text-align-right">${ // product.price * product.quantity // }€</td>`;
// htmlCode += `</tr>`;
// return htmlCode;
// }

// function getCartTotalHtmlCode(totalPrice) {
// let htmlCode = '';
// htmlCode += `<tr class="text--bold">`;
// htmlCode += `<td>Total</td>`;
// htmlCode += `<td colspan="3" class="text-align-right">${totalPrice}€</td>`;
// htmlCode += `</tr>`;
// return htmlCode;
// }

// function paintCartItems() {
// // cartElement.innerHTML = '';
// // for (let i = 0; i < products.length; i += 1) {
// // cartElement.innerHTML += getCartItemHtmlCode(products[i]);
// // }

// cartElement.innerHTML = '';
// for (let i = products.length - 1; i >= 0; i -= 1) {
// cartElement.innerHTML += getCartItemHtmlCode(products[i]);
// }

// // cartElement.innerHTML = '';
// // for (const product of products) {
// // cartElement.innerHTML += getCartItemHtmlCode(product);
// // }

// // const totalPrice = product1.price _ product1.quantity + product2.price _ product2.quantity + product3.price \* product3.quantity;
// // const total = getCartTotalHtmlCode(totalPrice);
// // cartElement.innerHTML = item1 + item2 + item3 + total;

// // para que cada vez que yo pulse el botón de incrementar o decrementar, cada vez que pinte una cantidad distinta, escuchamos. esta función se podría meter también debajo de cada vez que ejecutamos paintCardItems(), pero si ya la metemos dentro de esa misma función no hace falta estar repitiéndola, ya sabrá que cada vez que pinte nuevos números escuchará
// listenCartBtns();
// }

// paintCartItems();

// // listen events

// function handleQuantityBtn(ev) {
// const currentTarget = ev.currentTarget;
// if (currentTarget.classList.contains('js-inc-btn')) {
// product.incQuantity();
// } else if (currentTarget.classList.contains('js-dec-btn')) {
// product.decQuantity();
// }
// paintCartItems();
// }

// // creamos esta función para que
// function listenCartBtns() {
// // usar querySelectorAll
// const incBtn = document.querySelector('.js-inc-btn');
// incBtn.addEventListener('click', handleQuantityBtn);
// const decBtn = document.querySelector('.js-dec-btn');
// decBtn.addEventListener('click', handleQuantityBtn);
// }

// // address

// const userAddress = {};

// const address = document.querySelector('.js-address');
// const city = document.querySelector('.js-city');
// const zip = document.querySelector('.js-zip');

// function handleAddress(ev) {
// // el name es el que lleva dentro del input, en este caso los names de los inputs que tengo en htl son city, address y zip, pero así no lo tengo que repeteir 3 veces, según donde esté será uno u otro
// const name = ev.currentTarget.name;
// userAddress[name] = ev.currentTarget.value;
// paintAddress();
// }

// function paintAddress() {
// document.querySelector('.js-address-info').innerHTML = `${ // userAddress.address || '' // } ${userAddress.city || ''} ${userAddress.zip || ''}`;
// }

// address.addEventListener('keyup', handleAddress);
// city.addEventListener('keyup', handleAddress);
// zip.addEventListener('keyup', handleAddress);
