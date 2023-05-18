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
