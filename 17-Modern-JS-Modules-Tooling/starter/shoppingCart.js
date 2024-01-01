/*
// Exporting module
console.log('Exporting module');

// Blocking code
console.log('start fetching users');
await fetch('https://jsonplaceholder.typicode.com/users');
console.log('end fetching users');

const shippingCost = 10;
export const cart = [];

export const addToCart = function (product, quantity) {
  cart.push({ product, quantity });
  console.log(`Adding ${quantity} ${product} to cart`);
};

const totalPrice = 237;
const totalQuantity = 23;

// named exports
export { totalPrice, totalQuantity as tq };

// default exports
export default function (product, quantity) {
  cart.push({ product, quantity });
  console.log(`Adding ${quantity} ${product} to cart`);
}
*/
