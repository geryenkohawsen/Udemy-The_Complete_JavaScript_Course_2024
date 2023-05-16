'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

const getCode = str => str.slice(0, 3).toUpperCase();

for (const flight of flights.split('+')) {
  const [type, from, to, time] = flight.split(';');
  const output = `${type.startsWith('_Delayed') ? '!!' : ''}${type.replaceAll(
    '_',
    ' '
  )} ${getCode(from)} ${getCode(to)} ${time.replace(':', 'h')}`.padStart(36);
  console.log(output);
}

///////////////////////////////////////
// Coding Challenge #4

/* 
Write a program that receives a list of variable names written in underscore_case
and convert them to camelCase.

The input will come from a textarea inserted into the DOM (see code below),
and conversion will happen when the button is pressed.

THIS TEST DATA (pasted to textarea)
underscore_case
 first_name
Some_Variable 
  calculate_AGE
delayed_departure

SHOULD PRODUCE THIS OUTPUT (5 separate console.log outputs)
underscoreCase      ✅
firstName           ✅✅
someVariable        ✅✅✅
calculateAge        ✅✅✅✅
delayedDeparture    ✅✅✅✅✅

HINT 1: Remember which character defines a new line in the textarea 😉
HINT 2: The solution only needs to work for a variable made out of 2 words, like a_b
HINT 3: Start without worrying about the ✅. Tackle that only after you have the variable name conversion working 😉
HINT 4: This challenge is difficult on purpose, so start watching the solution in case you're stuck. Then pause and continue!

Afterwards, test with your own test data!

GOOD LUCK 😀
*/

/*
document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));
const textareaEl = document.querySelector('textarea');
const btnEl = document.querySelector('button');

btnEl.addEventListener('click', () => {
  const input = textareaEl.value;
  const rows = input.split('\n');

  for (const [i, row] of rows.entries()) {
    const [first, second] = row.trim().toLowerCase().split('_');
    const newRow = `${first}${second.replace(
      second[0],
      second[0].toUpperCase()
    )}`;
    // newRow.padEnd(20, ' ');
    // we can omit the 2nd parameter if we just want empty spaces
    console.log(`${newRow.padEnd(20)}${'✅'.repeat(i + 1)}`);
  }
});
/*

/*
// SPLIT and JOIN
console.log('a+very+nice+string'.split('+'));
console.log('Geryenko Hawsen'.split(' '));

const [firstName, lastName] = 'Geryenko Hawsen'.split(' ');

const newName = ['Mr.', firstName, lastName.toUpperCase()].join(' ');
console.log(newName);

const capitalizeName = function (name) {
  const names = name.split(' ');
  const namesUpper = [];

  for (const n of names) {
    // namesUpper.push(n[0].toUpperCase() + n.slice(1));
    namesUpper.push(n.replace(n[0], n[0].toUpperCase()));
  }
  console.log(namesUpper.join(' '));
};

capitalizeName('jessica ann smith davis');
capitalizeName('geryenko hawsen');

// Padding
const message = 'Go to gate 23!';
console.log(message.padStart(25, '+').padEnd(30, '-'));
console.log('Gery'.padStart(8, '=').padEnd(10, '+'));

const maskCreditCard = function (number) {
  const str = number + '';
  const last = str.slice(-4);
  return last.padStart(str.length, '*');
};

console.log(maskCreditCard(12345678));
console.log(maskCreditCard(412374668889));
console.log(maskCreditCard('4123746688891234'));

// Repeat
const message2 = 'Bad weather... All departures will be delay...';
console.log(message2.repeat(3));

const planeInLine = function (n) {
  console.log(`There are ${n} planes in line ${'🛩️'.repeat(n)}`);
};
planeInLine(5);
planeInLine(3);
planeInLine(12);
*/

/*
const airline = 'TAP Air Portugal';

console.log(airline.toLowerCase());
console.log(airline.toUpperCase());

// FIX capitalization in name
const passenger = 'jOnAS';
const passengerLower = passenger.toLocaleLowerCase();
const passengerCorrect =
  passengerLower[0].toUpperCase() + passengerLower.slice(1);
console.log(passengerCorrect);

// Comparing emails
const email = 'hello@jonas.io';
const loginEmail = '   Hello@Jonas.Io \n';

// const lowerEmail = loginEmail.toLocaleLowerCase();
// const trimmedEmail = lowerEmail.trim();
const normalizedEmail = loginEmail.toLowerCase().trim();
console.log(normalizedEmail);
console.log(email === normalizedEmail);

// Replacing part of a string
const priceID = 'Rp 288,97';
const priceUS = priceID.replace('Rp ', '$').replace(',', '.');
console.log(priceUS);

const announcement =
  'All passengers come to boarding door 23. Boarding door 23!';
console.log(announcement.replace('door', 'gate')); // replace method will only replace the first appearance
console.log(announcement.replaceAll('door', 'gate')); // JS method
console.log(announcement.replace(/replace/g, 'gate')); // RegEx

// Booleans
const plane = 'Airbus A320neo';
console.log(plane.includes('A320'));
console.log(plane.startsWith('a'));
console.log(plane.startsWith('A'));
console.log(plane.includes('Boeing'));

if (plane.startsWith('Airbus') && plane.endsWith('neo')) {
  console.log('Part of the NEW Airbus Family');
}

// Practice exercise
const checkBaggage = function (items) {
  const baggage = items.toLowerCase();
  if (baggage.includes('knife') || baggage.includes('gun')) {
    console.log('Your are NOT allowed on board');
  } else {
    console.log('Welcome aboard!');
  }
};
checkBaggage('I have a laptop, some food and a pocket knife');
checkBaggage('Socks and camera');
checkBaggage('Got some snacks and a gun for protection');
*/

/*
const plane = 'A320';

console.log(plane[0]);
console.log(plane[1]);
console.log(plane[2]);
console.log('B737'[0]);

console.log(airline.length);
console.log('B373'.length);

console.log(airline.indexOf('r'));
console.log(airline.lastIndexOf('r'));
console.log(airline.indexOf('Portugal')); // case-sensitive

console.log(airline.slice(4)); //ONLY begin parameter
console.log(airline.slice(4, 7)); // has end parameter

console.log(airline.slice(0, airline.indexOf(' ')));
console.log(airline.slice(airline.lastIndexOf(' ') + 1));

console.log(airline.slice(-2)); // will start extracting from the end
console.log(airline.slice(1, -1));

const checkMiddleSeat = function (seat) {
  // B and E are middle seats
  const s = seat.slice(-1); // get last letter of the string
  if (s === 'B' || s === 'E') console.log('You got the middle seat...');
  else console.log('You got lucky!!');
};

checkMiddleSeat('11B');
checkMiddleSeat('23C');
checkMiddleSeat('3E');

console.log(new String('Gery'));
console.log(typeof new String('Gery'));
console.log(typeof new String('Gery').slice(1)); // all String method will return a primitive (string)
*/

/*
const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

const openingHours = {
  [weekdays[1]]: {
    open: 12,
    close: 22,
  },
  [weekdays[`${2 + 2}`]]: {
    open: 11,
    close: 23,
  },
  [`${weekdays[2 + 3]}`]: {
    open: 0, // Open 24 hours
    close: 24,
  },
  [weekdays[1 + 1]]: {
    open: 3,
    close: 18,
  },
};

const question = new Map([
  ['question', 'What is the best programming language in the world?'],
  [1, 'C'],
  [2, 'Java'],
  [3, 'JavaScript'],
  ['correct', 3],
  [true, 'Correct'],
  [false, 'Try again...'],
]);
console.log(question);

// Convert object to map
console.log(Object.entries(openingHours));
const hoursMap = new Map(Object.entries(openingHours));
console.log(hoursMap);

// Quiz app
console.log(question.get('question'));
for (const [key, value] of question) {
  if (typeof key === 'number') console.log(`Answer ${key}: ${value}`);
}

// const answer = Number(prompt('Your answer'));
// console.log(answer);

// console.log(question.get(question.get('correct') === answer));

// Convert Map back to Array
console.log([...question]);
console.log([...question.keys()]);
console.log([...question.values()]);
*/

/*
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

const rest = new Map(); // easiest way to create a map is by passing an empty map
rest.set('name', 'Classico Italiano');
rest.set(1, 'Firenze, Italy');
console.log(rest.set(2, 'Lisbon, Portugal')); // updating the set method like this will return the set itself

rest
  .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
  .set('open', 11)
  .set('close', 23)
  .set(true, 'We are open!')
  .set(false, 'We are close...');

console.log(rest.get('name'));
console.log(rest.get(Number('1')));

const time = 23;
console.log(rest.get(time >= rest.get('open') && time < rest.get('close')));

console.log(rest.has('categories'));
// rest.clear(); // delete whole map
console.log(rest.delete(2));

const arr = [1, 2];
rest.set(arr, 'Test');
rest.set(document.querySelector('h1'), 'Heading'); // we can also use dumb element (special-type object)
console.log(rest);
console.log(rest.size);

console.log(rest.get(arr));
*/

/*
const orderSet = new Set([
  'Pasta',
  'Pizza',
  'Pizza',
  'Risotto',
  'Pasta',
  'Pizza',
]);
console.log(orderSet);

console.log('Set from string --> ', new Set('Gery'));

console.log('get size of a Set --> ', orderSet.size);
console.log('check if Set has a specific element --> ', orderSet.has('Pizza'));
console.log('check if Set has a specific element --> ', orderSet.has('Bread'));
console.log('add a new element to a Set --> ', orderSet.add('Garlic Bread'));
console.log('add a new element to a Set --> ', orderSet.add('Garlic Bread')); // 'Garlic Bread' will only be added ONCE!
console.log('delete element from a Set --> ', orderSet.delete('Risotto'));
// orderSet.clear();
console.log('FINAL orderSet --> ', orderSet);

for (const order of orderSet) console.log(order);

// Set is commonly use for deleting duplicates from an Array
const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];
// Set is also an iterables so we can DECONSTRUCT them with spread operator
// const staffUnique = new Set(staff);
const staffUnique = [...new Set(staff)];

console.log('Set of staff --> ', staffUnique);

// Example when we don't need the entire array but just the number of unique elements
console.log(
  new Set(['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter']).size
);

console.log(new Set('Gery').size);
*/

///////////////////////////////////////
// Coding Challenge #2

/* 
Let's continue with our football betting app!

1. Loop over the game.scored array and print each player name to the console, along with the goal number (Example: "Goal 1: Lewandowski")
2. Use a loop to calculate the average odd and log it to the console (We already studied how to calculate averages, you can go check if you don't remember)
3. Print the 3 odds to the console, but in a nice formatted way, exactly like this:
      Odd of victory Bayern Munich: 1.33
      Odd of draw: 3.25
      Odd of victory Borrussia Dortmund: 6.5
Get the team names directly from the game object, don't hardcode them (except for "draw"). HINT: Note how the odds and the game objects have the same property names 😉

BONUS: Create an object called 'scorers' which contains the names of the players who scored as properties, and the number of goals as the value. In this game, it will look like this:
      {
        Gnarby: 1,
        Hummels: 1,
        Lewandowski: 2
      }

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
// TASK 1
for (const [idx, player] of game.scored.entries()) {
  console.log(`Goal ${idx + 1}: ${player}`);
}

// TASK 2
const odds = Object.values(game.odds);
let oddsAvg = 0;
for (const odd of Object.values(game.odds)) oddsAvg += odd;
console.log('Average odds --> ', oddsAvg / odds.length);

// TASK 3
for (const [team, odd] of Object.entries(game.odds)) {
  // console.log('team & odd --> ', team, odd);
  const teamStr = team === 'x' ? 'draw' : `victory ${game[team]}`;
  console.log(`Odd of ${teamStr}: ${odd}`);
}

// BONUS
const scorers = {};
for (const player of game.scored) {
  scorers[player] ? scorers[player]++ : (scorers[player] = 1);
}
console.log('scorers --> ', scorers);
*/

/*
// property NAMES
const properties = Object.keys(openingHours);
console.log('properties --> ', properties);
let openStr = `We are open on ${properties.length} days: `;

for (const day of properties) {
  openStr += `${day}, `;
}
console.log('openStr --> ', openStr);

// property VALUES
const values = Object.values(openingHours);
console.log('values --> ', values);

// Entire object
const entries = Object.entries(openingHours); // different way of calling compared to Array -> numArray.entries() // Object.entries(numArray)
console.log('entries --> ', entries);

// for (const entry of entries) -> destructure
// for (const [key, value] of Array)
for (const [key, { open, close }] of entries) {
  console.log(`On ${key} we open at ${open} and close at ${close}`);
}
*/

/*
if (restaurant.openingHours && restaurant.openingHours.mon)
  console.log('if statement --> ', restaurant.openingHours.mon.open);

// console.log('NO if statement --> ', restaurant.openingHours.mon.open);

// WITH optional chaining
console.log('optional chaining --> ', restaurant.openingHours.mon?.open);
console.log('optional chaining --> ', restaurant.openingHours?.mon?.open);

// example
const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

for (const day of days) {
  const open = restaurant.openingHours[day]?.open ?? 'closed';
  console.log(`On ${day}, we open at ${open}`);
}

// Methods
console.log(
  'check if method exist before calling it --> ',
  restaurant.order?.(3, 2) ?? 'Method does not exist'
);
console.log(
  'check if method exist before calling it --> ',
  restaurant.orderRisotto?.(0, 2) ?? 'Method does not exist'
);

//Arrays
const users = [{ name: 'Jonas', email: 'email1@gmail.com' }];

console.log(
  'check if element in array exist or not --> ',
  users[0]?.name ?? 'User array empty'
);
console.log(
  'check if element in array exist or not --> ',
  users[1]?.name ?? 'User array empty'
);
/*
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
