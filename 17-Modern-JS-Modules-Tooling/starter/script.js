/*
// // importing module
// import { addToCart, totalPrice as price, tq } from './shoppingCart.js';

console.log('Importing module');
// // console.log(shippingCost);

// addToCart('shirt', 2);
// console.log(price, totalQuantity);

// import * as ShoppingCart from './shoppingCart.js'; // this module is exposing a public API just like a class
// ShoppingCart.addToCart('shirt', 12);
// console.log('ShoppingCart.totalPrice --> ', ShoppingCart.totalPrice);

import add, { cart } from './shoppingCart.js'; // you can mix named and default but it is NOT common practice
add('pizza', 2);
add('bread', 5);
add('milk', 1);
console.log('cart --> ', cart);

// console.log('Start fetching');
// const res = await fetch('https://jsonplaceholder.typicode.com/posts');
// const data = await res.json();
// console.log(data);
// console.log('Finish fetching');

const getLastPost = async function () {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await res.json();

  return { title: data.at(-1).title, text: data.at(-1).body };
};

const lastPost = getLastPost();
console.log('lastPost --> ', lastPost);

// Not very clean
lastPost.then(last => console.log(last));

const lastPost2 = await getLastPost();
console.log('lastPost2 --> ', lastPost2);
*/

/*
const ShoppingCart2 = (function () {
  const cart = [];
  const shippingCost = 10;
  const totalPrice = 237;
  const totalQuantity = 23;

  const addToCart = function (product, quantity) {
    cart.push({ product, quantity });
    console.log(
      `Adding ${quantity} ${product} to cart (shipping cost is ${shippingCost})`
    );
  };

  const orderStock = function (product, quantity) {
    console.log(`Ordering ${quantity} ${product} from supplier`);
  };

  return { addToCart, cart, totalPrice, totalQuantity };
})();

ShoppingCart2.addToCart('shirt', 2);
ShoppingCart2.addToCart('pizza', 5);
console.log(ShoppingCart2);
console.log(ShoppingCart2.shippingCost);
*/

/*
// will not work in the browser but will work in node
export.addToCart = function (product, quantity) {
  cart.push({ product, quantity });
  console.log(
    `Adding ${quantity} ${product} to cart (shipping cost is ${shippingCost})`
  );
};

// import
const { addToCart } = require('./shoppingCart.js'); // require is the CommonJS specification that will only work in node.js
*/
