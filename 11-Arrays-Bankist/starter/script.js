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

// Empty container programmatically
containerMovements.innerHTML = '';

const displayMovements = movements => {
  movements.forEach((mov, i) => {
    const type = mov > 0 ? 'deposit' : 'withdrawal';

    const html = `
      <div class="movements__row">
        <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
        <div class="movements__value">${mov}</div>
      </div>
    `;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};
displayMovements(account1.movements);

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

// let arr = ['a', 'b', 'c', 'd', 'e'];

// /**
//  * SLICE
//  * slice() DOES NOT mutate the original array
//  */
// console.log('slice(2) --> ', arr.slice(2)); // copy from the 3rd element till the end
// console.log('slice(2, 4)--> ', arr.slice(2, 4)); // copy from the 3rd element and stop BEFORE the 5th element
// console.log('slice(-2) --> ', arr.slice(-2)); // copy two element from the BACK / END of the array
// console.log('slice(-1) --> ', arr.slice(-1)); // copy one element (the last element) of the array
// console.log('slice(1, -2) --> ', arr.slice(1, -2)); // copy from the 2nd element and stop before the 2nd element from the END of the array
// console.log('slice() --> ', arr.slice()); // create a SHALLOW COPY of the array (same as spread operator)
// console.log('...arr --> ', [...arr]); // create a SHALLOW COPY of the array

// /**
//  * SPLICE
//  * splice() WILL MUTATE the original array!!
//  */
// // console.log('splice(2) --> ', arr.splice(2)); // same as slice(2) but return the result to the original array
// arr.splice(-1); // delete the last element of the ORIGINAL array
// console.log('CHECK --> ', arr);
// arr.splice(1, 2); // delete 2 elements after the 2nd element in the array
// console.log('CHECK --> ', arr);

// /**
//  * REVERSE
//  * reverse the ORIGINAL array (mutation)
//  */
// arr = ['a', 'b', 'c', 'd', 'e'];
// const arr2 = ['j', 'i', 'h', 'g', 'j'];
// console.log(' reverse() --> ', arr2.reverse());
// console.log('CHECK --> ', arr2);

// /**
//  * CONCAT
//  * concatenate array and create a new copy (non-mutation)
//  */
// const letters = arr.concat(arr2); // same as using spread operator
// console.log('CHECK --> ', letters);
// console.log('using spread operators --> ', [...arr, ...arr2]);

// /**
//  * JOIN
//  * join elements inside an array and create a new copy (non-mutation)
//  */
// console.log('join() --> ', letters.join(' - ')); // same as using spread operator
// console.log('CHECK --> ', letters);

/////////////////////////////////////////////////
/*
const arr = [23, 11, 64];
console.log(arr[0]);
console.log(arr.at(0));

// getting last element of an array
console.log(arr[arr.length - 1]);
console.log(arr.slice(-1)[0]);
console.log(arr.at(-1));

console.log('gery'.at(0));
console.log('gery'.at(-1));
*/
/////////////////////////////////////////////////
/*
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// for (const movement of movements) {
for (const [i, movement] of movements.entries()) {
  if (movement > 0) console.log(`Movement ${i + 1}: You deposited ${movement}`);
  else console.log(`Movement ${i + 1}: You withdrew ${Math.abs(movement)}`);
}

///// forEach CANNOT be break
console.log('----- FOREACH -----');
movements.forEach((movement, i, arr) => {
  if (movement > 0) console.log(`Movement ${i + 1}: You deposited ${movement}`);
  else console.log(`Movement ${i + 1}: You withdrew ${Math.abs(movement)}`);
});
// 0: function(200)
// 1: function(450)
// 2: function(400)
// ...
*/

/////////////////////////////////////////////////
/*
const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

currencies.forEach((value, key, map) => {
  console.log(`${key}: ${value}`);
});

// Set
const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR']);
console.log(currenciesUnique);
currenciesUnique.forEach((value, _, map) => {
  console.log(`${_}: ${value}`);
});
*/

///////////////////////////////////////
// Coding Challenge #1

/* 
Julia and Kate are doing a study on dogs. So each of them asked 5 dog owners about their dog's age, and stored the data into an array (one array for each). For now, they are just interested in knowing whether a dog is an adult or a puppy. A dog is an adult if it is at least 3 years old, and it's a puppy if it's less than 3 years old.

Create a function 'checkDogs', which accepts 2 arrays of dog's ages ('dogsJulia' and 'dogsKate'), and does the following things:

1. Julia found out that the owners of the FIRST and the LAST TWO dogs actually have cats, not dogs! So create a shallow copy of Julia's array, and remove the cat ages from that copied array (because it's a bad practice to mutate function parameters)
2. Create an array with both Julia's (corrected) and Kate's data
3. For each remaining dog, log to the console whether it's an adult ("Dog number 1 is an adult, and is 5 years old") or a puppy ("Dog number 2 is still a puppy 🐶")
4. Run the function for both test datasets

HINT: Use tools from all lectures in this section so far 😉

TEST DATA 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
TEST DATA 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]

GOOD LUCK 😀
*/

// const dataJulia1 = [3, 5, 2, 12, 7].slice(1, 3);
// const dataJulia2 = [9, 16, 6, 8, 3].slice(1, 3);
// const dataKate1 = [4, 1, 15, 8, 3];
// const dataKate2 = [10, 5, 6, 1, 4];

// function checkDogs(arr1, arr2) {
//   const datas = [...arr1, ...arr2];

//   datas.forEach((data, i) => {
//     const isAdult = data >= 3 ? 'adult' : 'puppy';
//     console.log(
//       `Dog number ${i + 1} is an ${isAdult}, and is ${data} years old`
//     );
//   });
// }

// console.log('--- DATA 1 ---');
// checkDogs(dataJulia1, dataKate1);
// console.log('--- DATA 2 ---');
// checkDogs(dataJulia2, dataKate2);

// /**
//  * LECTURE ANSWER
//  */
// const checkDogsAns = function (dogsJulia, dogsKate) {
//   const dogsJuliaCorrected = dogsJulia.slice();
//   dogsJuliaCorrected.splice(0, 1);
//   dogsJuliaCorrected.splice(-2);

//   const dogs = dogsJuliaCorrected.concat(dogsKate);

//   dogs.forEach(function (dog, i) {
//     if (dog >= 3) {
//       console.log(`Dog number ${i + 1} is an adult, and is ${dog} years old`);
//     } else {
//       console.log(`Dog number ${i + 1} is an puppy, and is ${dog} years old`);
//     }
//   });
// };

// console.log('===== ANSWER =====');
// console.log('--- Answer Data 1 ---');
// checkDogsAns([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);
// console.log('--- Answer Data  --- ');
// checkDogsAns([9, 16, 6, 8, 3], [10, 5, 6, 1, 4]);

/////////////////////////////////////////////////
const eurToUsd = 1.1;
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/**
 * using map() method
 */
const movementUSD = movements.map(mov => mov * eurToUsd);
console.log(movementUSD);

/**
 * using normal for loop
 */
const movementsUSDfor = [];
for (const mov of movements) {
  movementsUSDfor.push(mov * eurToUsd);
}
console.log(movementsUSDfor);

// original array is not mutated
console.log('original array → ', movements);

const movementDescriptions = movements.map(
  (mov, i) =>
    `Movement ${i + 1}: You ${mov > 0 ? 'deposited' : 'withdrew'} ${Math.abs(
      mov
    )}`
);
console.log(movementDescriptions);
