// // importing module
// import { addToCart, totalPrice as price, tq } from './shoppingCart.js';

// console.log('Importing module');
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
