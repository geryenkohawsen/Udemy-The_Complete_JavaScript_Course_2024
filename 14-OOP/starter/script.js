'use strict';

const Person = function (firstName, birthYear) {
  // Instance properties
  this.firstName = firstName;
  this.birthYear = birthYear;

  // NEVER DO THIS !!
  // Will create the same method to every new Person
  // calcAge = function () {
  //   console.log(2037 - this.birthYear);
  // };
};

const gery = new Person('Gery', 1999);
console.log(gery);

// 1. New {} is created
// 2. function is called, this = {}
// 3. {} linked to prototype
// 4. function automatically return {}

const matilda = new Person('Matilda', 2017);
const jack = new Person('Jack', 1997);
console.log(matilda, jack);

console.log('instanceof --> ', gery instanceof Person);

// Prototypes
console.log(Person.prototype);
Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

gery.calcAge();
matilda.calcAge();

console.log('gery.__proto__ --> ', gery.__proto__);
console.log(
  'gery.__proto__ === Person.prototype --> ',
  gery.__proto__ === Person.prototype
);

console.log(
  'log(Person.prototype.isPrototypeOf(gery) --> ',
  Person.prototype.isPrototypeOf(gery)
);
console.log(
  'log(Person.prototype.isPrototypeOf(Person) --> ',
  Person.prototype.isPrototypeOf(Person)
);

// We can attach properties to the prototype also
Person.prototype.species = 'Homo sapiens';
console.log(gery.species, matilda.species);
console.log(
  'gery.hasOwnProperty(firstName) --> ',
  gery.hasOwnProperty('firstName')
);
console.log(
  'gery.hasOwnProperty(species) --> ',
  gery.hasOwnProperty('species')
);
