'use strict';

/*
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
*/

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

/*
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

/*
console.log('================================================================');
console.log('================================================================');

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
*/

/*
console.log('================================================================');
console.log('================================================================');

const PersonProto = {
  calcAge() {
    console.log(2037 - this.birthYear);
  },

  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },

  cl() {
    console.log(this);
  },
};

const steven = Object.create(PersonProto);
console.log(steven);
steven.name = 'Steven';
steven.birthYear = 2002;
steven.calcAge();
steven.cl();

console.log(steven.__proto__ === PersonProto);

const sarah = Object.create(PersonProto);
sarah.init('Sarah', 1979);
sarah.calcAge();
sarah.cl();

console.dir(sarah);
/*

///////////////////////////////////////
// Coding Challenge #2

/* 
1. Re-create challenge 1, but this time using an ES6 class;
2. Add a getter called 'speedUS' which returns the current speed in mi/h (divide by 1.6);
3. Add a setter called 'speedUS' which sets the current speed in mi/h (but converts it to km/h before storing the value, by multiplying the input by 1.6);
4. Create a new car and experiment with the accelerate and brake methods, and with the getter and setter.

DATA CAR 1: 'Ford' going at 120 km/h

GOOD LUCK 😀
*/

/*
class CarCl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  accelerate() {
    this.speed += 10;
    console.log(`${this.make} is going ${this.speed}km/h`);
  }

  brake() {
    this.speed -= 5;
    console.log(`${this.make} is going ${this.speed}km/h`);
  }

  get speedUS() {
    return this.speed / 1.6;
  }

  set speedUS(speed) {
    this.speed = speed * 1.6;
  }
}

const ford = new CarCl('Ford', 120);
console.log(ford.speedUS);
ford.accelerate();
ford.accelerate();
ford.brake();
ford.speedUS = 50;
console.log(ford);
*/

/*
///////////////////////////////////////
// Inheritance Between "Classes": Constructor Functions
console.log('===== Inheritance Between "Classes": Constructor Functions =====');

const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

const Student = function (firstName, birthYear, course) {
  Person.call(this, firstName, birthYear);
  this.course = course;
};

// Linking prototype
Student.prototype = Object.create(Person.prototype);

Student.prototype.introduce = function () {
  console.log(`My name is ${this.firstName} and I study ${this.course}`);
};

const mike = new Student('Mike', 2020, 'Computer Science');
mike.introduce();
mike.calcAge();

console.log(mike.__proto__);
console.log(mike.__proto__.__proto__);

console.log(mike instanceof Student);
console.log(mike instanceof Person); // will also be true because Student is linked to Person
console.log(mike instanceof Object);

Student.prototype.constructor = Student;
console.dir(Student.prototype.constructor);
*/

///////////////////////////////////////
// Coding Challenge #3

/* 
1. Use a constructor function to implement an Electric Car (called EV) as a CHILD "class" of Car. Besides a make and current speed, the EV also has the current battery charge in % ('charge' property);
2. Implement a 'chargeBattery' method which takes an argument 'chargeTo' and sets the battery charge to 'chargeTo';
3. Implement an 'accelerate' method that will increase the car's speed by 20, and decrease the charge by 1%. Then log a message like this: 'Tesla going at 140 km/h, with a charge of 22%';
4. Create an electric car object and experiment with calling 'accelerate', 'brake' and 'chargeBattery' (charge to 90%). Notice what happens when you 'accelerate'! HINT: Review the definition of polymorphism 😉

DATA CAR 1: 'Tesla' going at 120 km/h, with a charge of 23%

GOOD LUCK 😀
*/
/*
const EV = function (make, speed, charge) {
  Car.call(this, make, speed);
  this.charge = charge;
};

// Link the prototype
EV.prototype = Object.create(Car.prototype);
EV.prototype.constructor = EV;

EV.prototype.chargeBattery = function (chargeTo) {
  this.charge = chargeTo;
  console.log(`${this.make} is charge to ${this.charge}%`);
};

EV.prototype.accelerate = function () {
  this.speed += 20;
  this.charge--;
  console.log(
    `${this.make} going at ${this.speed}km/h, with a charge of ${this.charge}%`
  );
};

const tesla = new EV('Tesla', 120, 23);
tesla.chargeBattery(90);
console.log(tesla);
tesla.brake();
tesla.accelerate();
*/

/*
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

class StudentCl extends PersonCl {
  constructor(fullName, birthYear, course) {
    // ALWAYS needs to happen first!
    super(fullName, birthYear);
    this.course = course;
  }

  introduce() {
    console.log(`My name is ${this.firstName} and I study ${this.course}`);
  }

  calcAge() {
    console.log(`I'm ${this.fullName} and I am ${this.birthYear} years old`);
  }
}

const martha = new StudentCl('Martha Jones', 2012, 'Computer Science');
martha.introduce();
martha.calcAge();
*/

/*
const PersonProto = {
  calcAge() {
    console.log(2037 - this.birthYear);
  },

  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const steven = Object.create(PersonProto);

const StudentProto = Object.create(PersonProto);
StudentProto.init = function (firstName, birthYear, course) {
  PersonProto.init.call(this, firstName, birthYear);
  this.course = course;
};

StudentProto.introduce = function () {
  console.log(`My name is ${this.firstName} and I study ${this.course}`);
};

const jay = Object.create(StudentProto);
jay.init('Jay', 2010, 'Sports Science');
jay.introduce();
jay.calcAge();
*/

class Account {
  // Public fields
  locale = navigator.language;

  // PRIVATE fields
  #movements = [];
  #pin; // legacy code will write this._pin = pin inside the constructor

  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this.#pin = pin;

    console.log(`Thanks for opening an account, ${this.owner}`);
  }

  // Public Interface AKA an API
  getMovements() {
    return this.#movements;
  }

  deposit(val) {
    this.#movements.push(val);
  }

  withdraw(val) {
    this.deposit(-val); // this negative should not be necessary for the user, better to abstract in the code
  }

  // This is an internal PRIVATE method that should not be exposed
  #approveLoan(val) {
    return true;
  }

  requestLoan(val) {
    if (this.#approveLoan(val)) {
      this.deposit(val);
      console.log('Loan approved');
    }
  }

  static helper() {
    console.log('Hello!!');
  }
}

const acc1 = new Account('Jonas', 'EUR', 1111);

// acc1.movements.push(250); // not good because it is not encapsulated
// acc1.movements.push(-140); // not good because it is not encapsulated
acc1.deposit(250);
acc1.withdraw(140);
acc1.requestLoan(1000);
// acc1.#approveLoan(1000); // will cause error because it is a private method

console.log('public methods getMovements() --> ', acc1.getMovements());
console.log(acc1);
// console.log(acc1.pin); // Should not be accessible from outside the class

Account.helper();
