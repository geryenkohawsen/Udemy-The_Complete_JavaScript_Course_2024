'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

let arr = ['a', 'b', 'c', 'd', 'e'];

/**
 * SLICE
 * slice() DOES NOT mutate the original array
 */
console.log('slice(2) --> ', arr.slice(2)); // copy from the 3rd element till the end
console.log('slice(2, 4)--> ', arr.slice(2, 4)); // copy from the 3rd element and stop BEFORE the 5th element
console.log('slice(-2) --> ', arr.slice(-2)); // copy two element from the BACK / END of the array
console.log('slice(-1) --> ', arr.slice(-1)); // copy one element (the last element) of the array
console.log('slice(1, -2) --> ', arr.slice(1, -2)); // copy from the 2nd element and stop before the 2nd element from the END of the array
console.log('slice() --> ', arr.slice()); // create a SHALLOW COPY of the array (same as spread operator)
console.log('...arr --> ', [...arr]); // create a SHALLOW COPY of the array

/**
 * SPLICE
 * splice() WILL MUTATE the original array!!
 */
// console.log('splice(2) --> ', arr.splice(2)); // same as slice(2) but return the result to the original array
arr.splice(-1); // delete the last element of the ORIGINAL array
console.log('CHECK --> ', arr);
arr.splice(1, 2); // delete 2 elements after the 2nd element in the array
console.log('CHECK --> ', arr);

/**
 * REVERSE
 * reverse the ORIGINAL array (mutation)
 */
arr = ['a', 'b', 'c', 'd', 'e'];
const arr2 = ['j', 'i', 'h', 'g', 'j'];
console.log(' reverse() --> ', arr2.reverse());
console.log('CHECK --> ', arr2);

/**
 * CONCAT
 * concatenate array and create a new copy (non-mutation)
 */
const letters = arr.concat(arr2); // same as using spread operator
console.log('CHECK --> ', letters);
console.log('using spread operators --> ', [...arr, ...arr2]);

/**
 * JOIN
 * join elements inside an array and create a new copy (non-mutation)
 */
console.log('join() --> ', letters.join(' - ')); // same as using spread operator
console.log('CHECK --> ', letters);
