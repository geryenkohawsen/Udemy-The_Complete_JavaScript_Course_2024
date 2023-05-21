'use strict';

/////////////////////////
/*
const bookings = [];
const basePrice = 199;

const createBooking = function (
  flightNum,
  numPassengers = 1,
  price = basePrice * numPassengers
) {
  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};

createBooking('LH123');
createBooking('LH345', 2, 800);
createBooking('LH345', undefined, 300); // use undefined to skip parameter that we want to use the default
createBooking('LH345', 5);
*/

/////////////////////////
/*
const flight = 'LH234';
const gery = {
  name: 'Geryenko Hawsen',
  passport: 123123123,
};

const checkIn = function (flightNum, passenger) {
  flightNum = 'LH399';
  passenger.name = 'Mr. ' + passenger.name;

  if (passenger.passport === 123123123) {
    alert('Checked in');
  } else {
    alert('Wrong passport!');
  }
};

// checkIn(flight, gery);
console.log(flight);
console.log(gery);

const flightNum = flight;
const passenger = gery;

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 1000000);
};

newPassport(gery);
checkIn(flight, gery);

console.log(flight);
console.log(gery);
*/

////////////////////
/*
// Generic function
const oneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase();
};

// Generic function
const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};

// Higher-order function
const transformer = function (str, fn) {
  console.log(`Original string: ${str}`);
  console.log(`Transformed string: ${fn(str)}`);

  console.log(`Transformed by: ${fn.name}`); // 'name' property of the function
};

transformer('JavaScript is the best!', upperFirstWord);
console.log('-------------------------');
transformer('JavaScript is the best!', oneWord);

// JavaScript callbacks!!
const high5 = function () {
  console.log('✋');
};
document.body.addEventListener('click', high5);
[1, 2, 3, 'Gery'].forEach(high5);
*/

/////////////////////////
/*
// function returning function
const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

const greeterHey = greet('Hey');
greeterHey('Jonas');
greeterHey('Gery');

greet('Hello')('Yamada'); // calling directly the returned function

// arrow function returning arrow function
const aisatsu =
  (greeting = 'Hi') =>
  name => {
    console.log(`${greeting} ${name}`);
  };

aisatsu()('Gery');
aisatsu('Bye')('Gery');
*/

const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],
  // book: function () {},
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({
      flight: `${this.iataCode}${flightNum}`,
      name,
    });
  },
};

lufthansa.book(239, 'Geryenko Hawsen');
lufthansa.book(635, 'John Smith');
console.log('lufthansa --> ', lufthansa);

const eurowings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
};

const book = lufthansa.book;

// Does NOT work
// book(23, 'Sarah Williams');

// CALL METHOD
book.call(eurowings, 23, 'Sarah Williams');
console.log('eurowings --> ', eurowings);

book.call(lufthansa, 239, 'Mary Cooper');
console.log(lufthansa);

const swiss = {
  airline: 'Swiss Airlines',
  iataCode: 'LX',
  bookings: [],
};

book.call(swiss, 583, 'Mary Cooper');
console.log('swiss --> ', swiss);

// APPLY METHOD (Not used in modern JavaScript)
const flightData = [583, 'George Cooper'];
book.apply(swiss, flightData);
console.log('swiss #2 --> ', swiss);

// Better way of doing it
// Use spread operator!!
book.call(swiss, ...flightData);
console.log('swiss #3 --> ', swiss);

// BIND METHOD
const bookEW = book.bind(eurowings)
const bookLH = book.bind(lufthansa)
const bookLX = book.bind(swiss)

bookEW(23, 'Steven Williams')

const bookEW23 = book.bind(eurowings, 23)
bookEW23('Geryenko Hawsen')
bookEW23('Yukimura Sanada')

// With Event Listeners
lufthansa.planes = 300
lufthansa.buyPlane = function() {
  console.log(this);
  this.planes++
  console.log('planes → ', this.planes);
}

// [this] keyword will reference the element of event listener by default
// we need to manual attach the [this] keyword
document.querySelector('.buy').addEventListener('click', lufthansa.buyPlane.bind(lufthansa))

// PARTIAL APPLICATION
const addTax = (rate, value) => value + value * rate
console.log('addTax → ', addTax(0.1, 200));

// when [this] keyword is not needed, use null (could be any other values)
const addVAT = addTax.bind(null, 0.23) // addVat = value => value + value * 0.23
console.log('addVAT → ', addVAT(200));
console.log('addVAT → ', addVAT(23));

const addTaxRate = function(rate) {
  return function(value) {
    return value + value * rate
  }
}
const addVAT2 = addTaxRate(0.23)
console.log('addVAT2 → ', addVAT2(200));
console.log('addVAT2 → ', addVAT2(23));
