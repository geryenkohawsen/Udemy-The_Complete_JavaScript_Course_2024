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
