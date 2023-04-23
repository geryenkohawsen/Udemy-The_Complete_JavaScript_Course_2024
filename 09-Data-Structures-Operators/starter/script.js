'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[`${2 + 2}`]]: {
    open: 11,
    close: 23,
  },
  [`day-${2 + 4}`]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  // ES6 enhanced object literals
  openingHours,

  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery({ starterIndex = 1, mainIndex = 0, time = '20:00', address }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },
  orderPasta(ing1, ing2, ing3) {
    console.log(`Here is your pasta with ${ing1}, ${ing2}, and ${ing3}`);
  },

  orderPizza(mainIngredient, ...otherIngredients) {
    console.log('main --> ', mainIngredient);
    console.log('other ing --> ', otherIngredients);
  },
};

/*
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

for (const item of menu) console.log('item --> ', item);

for (const [idx, el] of menu.entries()) {
  console.log(`${idx + 1}: ${el}`);
}

console.log('meny.entries() --> ', [...menu.entries()]);
*/

/*
const rest1 = {
  name: 'Capri',
  // numGuests: 20,
  numGuests: 0,
  owner: '',
};

const rest2 = {
  name: 'La Piazza',
  owner: 'Giovanni Rossi',
};
*/

///////////////////////////////////////
// Coding Challenge #1

/* 
We're building a football betting app (soccer for my American friends 😅)!

Suppose we get data from a web service about a certain game (below). In this challenge we're gonna work with the data. So here are your tasks:

1. Create one player array for each team (variables 'players1' and 'players2')
2. The first player in any player array is the goalkeeper and the others are field players. For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players
3. Create an array 'allPlayers' containing all players of both teams (22 players)
4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'
5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')
6. Write a function ('printGoals') that receives an arbitrary number of player names (NOT an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)
7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, WITHOUT using an if/else statement or the ternary operator.

TEST DATA FOR 6: Use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. Then, call the function again with players from game.scored

GOOD LUCK 😀
*/

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

/*
// Task 1
const [players1, players2, players3] = game.players;
console.log('p1 --> ', players1);
console.log('p2 --> ', players2);

// Task 2
const [gk, ...fieldPlayers] = players1;
console.log('gk --> ', gk);
console.log('fp --> ', fieldPlayers);

// Task 3
const allPlayers = [...players1, ...players2];
console.log('all players --> ', allPlayers);

// Task 4
const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
console.log('p1 final --> ', players1Final);

// Task 5
// const { team1, x: draw, team2 } = { ...game.odds };
// console.log('team1 odds --> ', team1);
// console.log('draw odds --> ', draw);
// console.log('team2 odds --> ', team2);
// Task 5 ANSWER
const {
  odds: { team1, x: draw, team2 },
} = game;
console.log('task 5 --> ', team1, draw, team2);

// Task 6
function printGoals(...players) {
  console.log(`${players.length} goals were scored`);
}

printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
printGoals('Davies', 'Muller');
printGoals(...game.scored);

// Task 7
team1 < team2 && console.log('Team 1 is more likely to win');
team1 > team2 && console.log('Team 2 is more likely to win');
*/

/*
// OR assignment operator (assign a value to a variable if variable if falsy)
// rest1.numGuests = rest1.numGuests || 10;
// rest2.numGuests = rest2.numGuests || 10;
// rest1.numGuests ||= 10;
// rest2.numGuests ||= 10;

// NULLISH assignment operator (null or undefined)
rest1.numGuests ??= 10;
rest2.numGuests ??= 10;

// AND assignment operator
// rest1.owner = rest1.owner && '<ANONYMOUS>';
// rest2.owner = rest2.owner && '<ANONYMOUS>';

rest1.owner &&= '<ANONYMOUS>'; // nothing will happened because original value is FALSY (empty string)
rest2.owner &&= '<ANONYMOUS>';

console.log('rest1 --> ', rest1);
console.log('rest2 --> ', rest2);
*/

/*
restaurant.numGuests = 0;
// truthy falsy
const guests = restaurant.numGuests || 10;
console.log('logical OR operator --> ', guests);

// Nullish: null and undefined ONLY (NOT 0 or '')
const guestsCorrect = restaurant.numGuests ?? 10;
console.log('nullish coalescing --> ', guestsCorrect);
*/

/*
// use ANY data type, return ANY data type, short-circuiting
console.log(' num x str --> ', 3 || 'Gery');
console.log(' empty str x str --> ', '' || 'Gery');
console.log(' true x zero --> ', true || '0');
console.log(' undefined x null --> ', undefined || null);
console.log(' zero x undefined --> ', 0 || undefined);
console.log('many values --> ', undefined || 0 || '' || 'Hello' || 23 || null);

restaurant.numGuests = 23;
const guest1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log('guest --> ', guest1);

// AND Operator
console.log('--- AND ---');
console.log(' zero & str --> ', 0 && 'Gery');
console.log(' num & str --> ', 7 && 'Gery');
console.log(' many values --> ', 'Hello' && 23 && null && 'Gery');

const guest2 = restaurant.numGuests2 || 10;

// this one
if (restaurant.orderPizza) {
  restaurant.orderPizza('mushroom', 'spinach');
}
// is same to this one
restaurant.orderPizza && restaurant.orderPizza('mushroom', 'spinach');
*/

/*
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
*/

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
