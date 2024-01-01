// Exporting module
console.log('Exporting module');

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
