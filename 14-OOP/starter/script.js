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

Person.hey = function () {
  console.log('Hey there!');
  console.dir(this);
};
Person.hey();

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

console.log('gery.__proto__ --> ', gery.__proto__);
console.log('gery.__proto__.__proto__ --> ', gery.__proto__.__proto__); // Object.prototype is the top of the prototype chain
console.log(
  'gery.__proto__.__proto__.__proto__ --> ',
  gery.__proto__.__proto__.__proto__
);
console.dir(Person.prototype.constructor);

const arr = [1, 2, 3, 4, 1, 2, 3, 5]; // new Array === []
console.log('arr.__proto__ --> ', arr.__proto__);
console.log(arr.__proto__ === Array.prototype);
console.log('arr.__proto__.__proto__ --> ', arr.__proto__.__proto__);

Array.prototype.unique = function () {
  console.dir(this);
  return [...new Set(this)];
};

console.log(arr.unique());

const h1 = document.querySelector('h1');
console.dir(h1);
console.dir(x => x + 1);

///////////////////////////////////////
// Coding Challenge #1

/* 
1. Use a constructor function to implement a Car. A car has a brake and a speed property. The speed property is the current speed of the car in km/h;
2. Implement an 'accelerate' method that will increase the car's speed by 10, and log the new speed to the console;
3. Implement a 'brake' method that will decrease the car's speed by 5, and log the new speed to the console;
4. Create 2 car objects and experiment with calling 'accelerate' and 'brake' multiple times on each of them.

DATA CAR 1: 'BMW' going at 120 km/h
DATA CAR 2: 'Mercedes' going at 95 km/h

GOOD LUCK 😀
*/

/*
const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(`${this.make} is going ${this.speed}km/h`);
};

Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(`${this.make} is going ${this.speed}km/h`);
};

const bmw = new Car('BMW', 120);
const mercedes = new Car('Mercedes', 95);

bmw.accelerate();
bmw.accelerate();
bmw.brake();
bmw.accelerate();

mercedes.brake();
mercedes.brake();
mercedes.brake();
mercedes.accelerate();
*/

// class expression
// const PersonCl = class {};

// class declaration
class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  calcAge() {
    console.log(2037 - this.birthYear); // this will be written as the prototype of the new object
  }

  // same as greet method below
  greet2() {
    console.log(`222 ${this.fullName}!`);
  }

  get age() {
    return 2037 - this.birthYear;
  }

  set fullName(name) {
    console.log('name --> ', name);
    if (name.includes(' ')) this._fullName = name;
    else console.error(`${name} is not a full name!`);
  }

  get fullName() {
    return this._fullName;
  }

  static hey() {
    console.log('Hey there!');
    console.dir(this);
  }
}

const jessica = new PersonCl('Jessica Davis', 1996);
jessica.calcAge();
console.log('class getter --> ', jessica.age);
console.log(jessica.__proto__);
console.log(jessica.__proto__ === PersonCl.prototype);

// We can add directly
PersonCl.prototype.greet = function () {
  console.log(`Hello ${this.fullName}!`);
};
jessica.greet();
jessica.greet2();

PersonCl.hey();

// 1. Classes are NOT hoisted
// 2. Classes are first-class citizens (can be pass into function and return from a function)
// 3. Classes are executed in strict mode (all code inside the class will be in 'strict' mode)

const account = {
  owner: 'jonas',
  movements: [200, 530, 120, 300],

  get latest() {
    return this.movements.slice(-1).pop();
  },

  set latest(mov) {
    this.movements.push(mov);
  },
};

console.log('account getter --> ', account.latest);
console.log('account setter --> ', (account.latest = 50));
console.log('movements --> ', account.movements);
