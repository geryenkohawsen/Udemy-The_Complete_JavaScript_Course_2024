'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    time = '20:00',
    address,
  }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },
  orderPasta: function (ing1, ing2, ing3) {
    console.log(`Here is your pasta with ${ing1}, ${ing2}, and ${ing3}`);
  },

  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log('main --> ', mainIngredient);
    console.log('other ing --> ', otherIngredients);
  },
};

// SPREAD, because on the RIGHT side of the = sign
const arr = [1, 2, ...[3, 4]];

// REST, because on the LEFT side of the = sign
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(others);

// skipped element, will not be included, that is why the REST PATTERN need to be last
const [pizza, , risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log('pizza --> ', pizza);
console.log('risotto --> ', risotto);
console.log('other food --> ', otherFood);

// REST in objects
const { sat, ...weekdays } = restaurant.openingHours;
console.log('weekdays --> ', weekdays);

// Functions
const add = function (...numbers) {
  console.log('numbers --> ', numbers);
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  console.log('Add() result --> ', sum);
};
add(2, 3);
add(11, 5, 3, 9, 12);

const x = [23, 5, 7];
add(...x);

restaurant.orderPizza('mushroom', 'onion', 'olive', 'spinach');
/*
const arr = [7, 8, 9];
const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(' bad example --> ', badNewArr);

const newArr = [1, 2, ...arr];
console.log(' spread operator --> ', newArr);

console.log(' --> ', ...newArr);

const newMenu = [...restaurant.mainMenu, 'Gnocchi']; // this is a completely new array
console.log(' --> ', newMenu);

// COPY ARRAY
const mainMenuCopy = [...restaurant.mainMenu];
console.log('mainMenuCopy --> ', mainMenuCopy);

// JOIN 2 ARRAYS
const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log('allMenu --> ', menu);

// ITERABLES (arrays, strings, map, sets, NOT object)
const str = 'Gery';
const letters = [...str, '', 'Haw.'];
console.log(' --> ', letters);
console.log(' --> ', ...letters);
// console.log(`${...letters} test`);

const ingredients = [
  prompt("Let's make pasta! Ingredient 1?"),
  prompt('Ingredient 2?'),
  prompt('Ingredient 3?'),
];

restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);
restaurant.orderPasta(...ingredients);

// OBJECTS
const newRestaurant = {
  foundingYear: 1998,
  ...restaurant,
  founder: 'Gery',
};
console.log('newRestaurant --> ', newRestaurant);

const restaurantCopy = { ...restaurant };
restaurantCopy.name = 'New Restaurant';
console.log('copy --> ', restaurantCopy.name);
console.log('original --> ', restaurant.name);
*/

/*
restaurant.orderDelivery({
  time: '22:30',
  address: '123 street',
  mainIndex: 2,
  starterIndex: 2,
});

restaurant.orderDelivery({
  address: '123 street',
  starterIndex: 3,
});

const { name, categories, openingHours } = restaurant;
console.log(' --> ', name, categories, openingHours);

const {
  name: restaurantName,
  categories: hours,
  openingHours: tags,
} = restaurant;
console.log(' --> ', restaurantName, hours, tags);

// DEFAULT VALUES
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log('default value --> ', menu, starters);

// MUTATING VARIABLES
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };
({ a, b } = obj);
console.log(' --> ', a, b);

// NESTED OBJECTS
const {
  fri: { open: o, close: c },
} = openingHours;
console.log(' --> ', o, c);
*/

/*
const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];
console.log(a, b, c);

const [x, y, z] = arr; // this bracket on the left is not an "array" symbol
console.log(x, y, z);

// SKIPPING AN ELEMENT
let [main, secondary] = restaurant.categories;
console.log(' --> ', main, secondary);
const [first, , third] = restaurant.categories;
console.log(' --> ', first, third);

// SWITCHING VARIABLES
// const temp = main;
// main = secondary;
// secondary = temp;
// console.log(' --> ', main, secondary);
[main, secondary] = [secondary, main];
console.log(' --> ', main, secondary);

const [starter, mainCourse] = restaurant.order(2, 0);
console.log(' --> ', starter, mainCourse);

// NESTED DESTRUCTURING
const nested = [2, 4, [5, 6]];
const [i, , j] = nested;
console.log(' --> ', i, j);

const [l, , [m, n]] = nested;
console.log(' --> ', l, m, n);

// DEFAULT VALUES
const [p, q, r] = [8, 9];
console.log(' --> ', p, q, r);
const [e = 1, f = 1, g = 1] = [8, 9];
console.log(' --> ', e, f, g);
*/
