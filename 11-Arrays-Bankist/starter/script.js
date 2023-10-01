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

const displayMovements = (movements, sort = false) => {
  // Empty container programmatically
  containerMovements.innerHTML = '';

  const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;

  movs.forEach((mov, i) => {
    const type = mov > 0 ? 'deposit' : 'withdrawal';

    const html = `
      <div class="movements__row">
        <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
        <div class="movements__value">${mov}€</div>
      </div>
    `;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${acc.balance}€`;
};

const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${incomes}€`;

  const out = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${Math.abs(out)}€`;

  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .filter((int, i, arr) => {
      // console.log(arr);
      return int >= 1;
    })
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = `${interest}€`;
};

const createUsernames = function (accs) {
  accs.forEach(acc => {
    acc.username = acc.owner
      .toLocaleLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};

createUsernames(accounts);

const updateUI = function (acc) {
  displayMovements(acc.movements);
  // Display balance
  calcDisplayBalance(acc);
  // Display summary
  calcDisplaySummary(acc);
};

// Event handler
let currentAccount;

btnLogin.addEventListener('click', function (e) {
  // Prevent form from submitting
  e.preventDefault();

  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );
  console.log(currentAccount);

  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    // Display UI and welcome message
    labelWelcome.textContent = `Welcome back ${
      currentAccount.owner.split(' ')[0]
    }`;
    containerApp.style.opacity = 100;

    // Clear input fields
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();

    // Display movements
    updateUI(currentAccount);
  }
});

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const receiverAcc = accounts.find(
    acc => acc.username === inputTransferTo.value
  );
  inputTransferAmount.value = inputTransferTo.value = '';

  if (
    amount > 0 &&
    receiverAcc &&
    currentAccount.balance >= amount &&
    receiverAcc.username !== currentAccount.username
  ) {
    // Transfer money
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);

    // Update UI
    updateUI(currentAccount);
  }
});

btnLoan.addEventListener('click', e => {
  e.preventDefault();

  const amount = Number(inputLoanAmount.value);

  // Loan money
  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    // Add movement
    currentAccount.movements.push(amount);

    // Update UI
    updateUI(currentAccount);

    // Clear input fields
    inputLoanAmount.value = '';
  }
});

btnClose.addEventListener('click', function (e) {
  e.preventDefault();

  if (
    inputCloseUsername.value === currentAccount.username &&
    Number(inputClosePin.value) === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      acc => acc.username === currentAccount.username
    );

    // Delete account
    accounts.splice(index, 1);

    // Hide UI
    containerApp.style.opacity = 0;

    // Clear input fields
    inputCloseUsername.value = inputClosePin.value = '';
  }
});

let sorted = false;
btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  displayMovements(currentAccount.movements, !sorted);
  sorted = !sorted;
});

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

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

// const eurToUsd = 1.1;
// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// /**
//  * using map() method
//  */
// const movementUSD = movements.map(mov => mov * eurToUsd);
// console.log(movementUSD);

// /**
//  * using normal for loop
//  */
// const movementsUSDfor = [];
// for (const mov of movements) {
//   movementsUSDfor.push(mov * eurToUsd);
// }
// console.log(movementsUSDfor);

// // original array is not mutated
// console.log('original array → ', movements);

// const movementDescriptions = movements.map(
//   (mov, i) =>
//     `Movement ${i + 1}: You ${mov > 0 ? 'deposited' : 'withdrew'} ${Math.abs(
//       mov
//     )}`
// );
// console.log(movementDescriptions);

/*
const deposits = movements.filter(function (mov, i, arr) {
  return mov > 0;
});
console.log(movements);
console.log(deposits);

const depositsFor = [];
for (const mov of movements) {
  if (mov > 0) depositsFor.push(mov);
}
console.log(depositsFor);

const withdrawal = movements.filter(mov => mov < 0);
console.log(withdrawal);
*/

/*
console.log(movements);

// accumulator -> SNOWBALL
// const balance = movements.reduce(function (acc, cur, i, arr) {
//   console.log(`Iteration ${i}: ${acc} + ${cur }`);
//   return acc + cur;
// }, 0);
const balance = movements.reduce((acc, cur) => acc + cur, 0);
console.log('balance → ', balance);

let balance2 = 0;
for (const mov of movements) balance2 += mov;
console.log('balance2 → ', balance2);

///// Maximum value
const max = movements.reduce((acc, mov) => {
  if (acc > mov) return acc;
  else return mov; // return current movement as the accumulator
}, movements[0]);
console.log('max → ', max);
*/

///////////////////////////////////////
// Coding Challenge #2

/* 
Let's go back to Julia and Kate's study about dogs. This time, they want to convert dog ages to human ages and calculate the average age of the dogs in their study.

Create a function 'calcAverageHumanAge', which accepts an arrays of dog's ages ('ages'), and does the following things in order:

1. Calculate the dog age in human years using the following formula: if the dog is <= 2 years old, humanAge = 2 * dogAge. If the dog is > 2 years old, humanAge = 16 + dogAge * 4.
2. Exclude all dogs that are less than 18 human years old (which is the same as keeping dogs that are at least 18 years old)
3. Calculate the average human age of all adult dogs (you should already know from other challenges how we calculate averages 😉)
4. Run the function for both test datasets

TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]

GOOD LUCK 😀
*/

// const test = [5, 2, 4, 1, 15, 8, 3].map(num => num + 100);

// /**
//  * TRY #1
//  * @param {*} ages
//  * @returns
//  */
// const calcAverageHumanAge = function (ages) {
//   const filteredDogToHumanYears = ages
//     .map(dogAge => {
//       if (dogAge <= 2) return dogAge * 2;
//       else return 16 + dogAge * 4;
//     })
//     .filter(humanAge => humanAge >= 18);

//   return (
//     filteredDogToHumanYears.reduce(
//       (acc, filteredHumanAge) => acc + filteredHumanAge
//     ) / filteredDogToHumanYears.length
//   );
// };

// const calcAverageHumanAge2 = function (ages) {
//   return ages
//     .map(dogAge => (dogAge <= 2 ? dogAge * 2 : 16 + dogAge * 4))
//     .filter(humanAge => humanAge >= 18)
//     .reduce((acc, cur, i, arr) => {
//       if (i + 1 === arr.length) return (acc + cur) / arr.length;
//       return acc + cur;
//     });
// };

// console.log('test data 1 → ', calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]));
// console.log('test data 1 → ', calcAverageHumanAge2([5, 2, 4, 1, 15, 8, 3]));
// console.log('test data 2 → ', calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]));
// console.log('test data 2 → ', calcAverageHumanAge2([16, 6, 10, 5, 6, 1, 4]));

// /**
//  * LECTURE ANSWER
//  */
// const calcAverageHumanAge3 = function (ages) {
//   const humanAges = ages.map(dogAge =>
//     dogAge <= 2 ? dogAge * 2 : 16 + dogAge * 4
//   );
//   const adults = humanAges.filter(age => age >= 18);
//   console.log(humanAges);
//   console.log(adults);

//   // const average = adults.reduce((acc, age) => acc + age, 0) / adults.length;
//   const average = adults.reduce(
//     (acc, age, i, arr) => acc + age / arr.length,
//     0
//   );

//   return average;
// };

// const avg1 = calcAverageHumanAge3([5, 2, 4, 1, 15, 8, 3]);
// const avg2 = calcAverageHumanAge3([16, 6, 10, 5, 6, 1, 4]);
// console.log('avg1 → ', avg1);
// console.log('avg2 → ', avg2);

/*
const eurToUsd = 1.1;
console.log(movements);

// Chaining just like a pipeline
const totalDepositsUSD = movements
  .filter(mov => mov < 0)
  .map(mov => mov * eurToUsd)
  //// We can inspect error using the third parameter of the callback function
  // .map((mov, i, arr) => {
  //   console.log(arr);
  //   return mov * eurToUsd;
  // })
  .reduce((acc, mov) => acc + mov, 0);
console.log(totalDepositsUSD);
*/

///////////////////////////////////////
// Coding Challenge #3

/* 
Rewrite the 'calcAverageHumanAge' function from the previous challenge, but this time as an arrow function, and using chaining!

TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]

GOOD LUCK 😀
*/

/*
const calcAverageHumanAgeChaining = function (ages) {
  return ages
    .map(dogAge => (dogAge <= 2 ? dogAge * 2 : 16 + dogAge * 4))
    .filter(humanAge => humanAge >= 18)
    .reduce((acc, cur, i, arr) => acc + cur / arr.length, 0);
};

console.log(
  'test data 1 → ',
  calcAverageHumanAgeChaining([5, 2, 4, 1, 15, 8, 3])
);
console.log(
  'test data 2 → ',
  calcAverageHumanAgeChaining([16, 6, 10, 5, 6, 1, 4])
);

///// Lecture answer
const calcAverageHumanAgeChainingAns = ages =>
  ages
    .map(age => (age <= 2 ? age * 2 : 16 + age * 4))
    .filter(age => age >= 18)
    .reduce((acc, age, i, arr) => acc + age / arr.length, 0);

console.log(
  'test data 1 → ',
  calcAverageHumanAgeChainingAns([5, 2, 4, 1, 15, 8, 3])
);
console.log(
  'test data 2 → ',
  calcAverageHumanAgeChainingAns([16, 6, 10, 5, 6, 1, 4])
);
*/

/*
const firstWithdrawal = movements.find(mov => mov < 0);
console.log(movements);
console.log(firstWithdrawal);

console.log(accounts);

const account = accounts.find(acc => acc.owner === 'Jessica Davis');
console.log(account);
*/

/*
const arr = [[1, 2, 3], 4, 5, [6, 7, 8], 9, 10, 11, 12, 13];
console.log(arr.flat());

const arrDeep = [[1, 2, 3], 4, 5, [6, 7, 8], [[9, 10], 11], 12, 13];
console.log(arrDeep.flat(2));

const accountMovements = accounts.map(acc => acc.movements);
console.log('accountMovements --> ', accountMovements);
const allMovements = accountMovements.flat();
console.log('allMovements --> ', allMovements);
const overallBalance = allMovements.reduce(
  (acc, movements) => acc + movements,
  0
);
console.log('overallBalance --> ', overallBalance);

const chaining = accounts
  .map(acc => acc.movements)
  .flat()
  .reduce((acc, moves) => acc + moves, 0);
console.log('chaining --> ', chaining);

const chainingWithFlatMap = accounts
  .flatMap(acc => acc.movements) // only goes one level deep
  .reduce((acc, moves) => acc + moves, 0);
console.log('chainingWithFlatMap --> ', chainingWithFlatMap);
*/

/*
// Strings
const owners = ['Jessica Davis', 'Michael Jackson', 'John', 'John 2'];
console.log('sort --> ', owners.sort());
console.log('sort --> ', owners); // the sort method will mutate the original array

// Numbers
console.log('movements --> ', movements);
console.log('movements --> ', movements.sort()); // will not sort numbers

// return < 0, A, B (keep order)
// return > 0, B, A (swtich order)
const sortedNumber = movements.sort((a, b) => {
  if (a > b) return 1;
  if (b > a) return -1;
});
console.log(sortedNumber);

const sortedNumberBetter = movements.sort((a, b) => a - b);
console.log(sortedNumberBetter);
*/

/*
console.log([1, 2, 3, 4, 5, 6, 7]);
console.log(new Array(1, 2, 3, 4, 5, 6, 7));

// Empty arrays + fill method
const x = new Array(7);
console.log(x);
x.fill(1, 3, 5);
console.log('x --> ', x); // will mutate the original array
x.fill(1);
console.log('x --> ', x);

// Array.from
const y = Array.from({ length: 7 }, () => 1);
console.log('y --> ', y);

const z = Array.from({ length: 7 }, (_, i) => i + 1);
console.log('z --> ', z);

labelBalance.addEventListener('click', () => {
  const movementsUI = Array.from(
    document.querySelectorAll('.movements__value'),
    el => el.textContent.replace('€', '')
  );
  console.log('move --> ', movementsUI);
});
*/

/*
///////////////////////////////////////
// Array Methods Practice

// 1.
const bankDepositSum = accounts
  .flatMap(acc => acc.movements)
  .filter(mov => mov > 0)
  .reduce((sum, cur) => sum + cur, 0);
console.log('bankDepositSum --> ', bankDepositSum);

// 2.
const numDeposits1000Easy = accounts
  .flatMap(acc => acc.movements)
  .filter(mov => mov >= 1000).length;
console.log('numDeposits1000Easy --> ', numDeposits1000Easy);

const numDeposits1000Reduce = accounts
  .flatMap(acc => acc.movements)
  .reduce((count, cur) => (cur >= 1000 ? count + 1 : count), 0);
console.log('numDeposits1000Reduce --> ', numDeposits1000Reduce);

let a = 10;
a++; // return value is still the original value
++a; // this is the prefix plus plus, the return value will be the new value

// 3.
const sums = accounts
  .flatMap(acc => acc.movements)
  .reduce(
    (sums, cur) => {
      // cur > 0 ? (sums.deposit += cur) : (sums.withdrawal += cur);
      sums[cur > 0 ? 'deposit' : 'withdrawal'] += cur;
      return sums;
    },
    { deposit: 0, withdrawal: 0 }
  );
console.log('sums --> ', sums);

// 4.
// this is a nice title -> This Is a Nice Title
function convertTitleCase(title) {
  const exceptions = [
    'a',
    'an',
    'the',
    'and',
    'but',
    'or',
    'for',
    'in',
    'of',
    'on',
    'to',
    'up',
    'with',
    'is',
  ];

  const capitalize = str => str[0].toUpperCase() + str.slice(1);

  const titleCase = title
    .toLowerCase()
    .split(' ')
    .map(word =>
      exceptions.includes(word) ? word : word[0].toUpperCase() + word.slice(1)
    )
    .join(' ');
  return capitalize(titleCase);
}

console.log(convertTitleCase('this is a nice title'));
console.log(convertTitleCase('thIS is a LONGER title'));
console.log(convertTitleCase('tHis Is A pRetTY ranDom title'));
*/

///////////////////////////////////////
// Coding Challenge #4

/* 
Julia and Kate are still studying dogs, and this time they are studying if dogs are eating too much or too little.
Eating too much means the dog's current food portion is larger than the recommended portion, and eating too little is the opposite.
Eating an okay amount means the dog's current food portion is within a range 10% above and 10% below the recommended portion (see hint).

1. Loop over the array containing dog objects, and for each dog, 
calculate the recommended food portion and add it to the object as a new property. 
Do NOT create a new array, simply loop over the array. 
Formula: recommendedFood = weight ** 0.75 * 28. 
(The result is in grams of food, and the weight needs to be in kg)

2. Find Sarah's dog and log to the console whether it's eating too much or too little. 
HINT: Some dogs have multiple owners, so you first need to find Sarah in the owners array, 
and so this one is a bit tricky (on purpose) 🤓

3. Create an array containing all owners of dogs who eat too much ('ownersEatTooMuch') 
and an array with all owners of dogs who eat too little ('ownersEatTooLittle').

4. Log a string to the console for each array created in 3., 
like this: "Matilda and Alice and Bob's dogs eat too much!" 
and "Sarah and John and Michael's dogs eat too little!"

5. Log to the console whether there is any dog eating EXACTLY the amount of food that is recommended 
(just true or false)

6. Log to the console whether there is any dog eating an OKAY amount of food 
(just true or false)

7. Create an array containing the dogs that are eating an OKAY amount of food 
(try to reuse the condition used in 6.)

8. Create a shallow copy of the dogs array and sort it by recommended food portion in an ascending order 
(keep in mind that the portions are inside the array's objects)

HINT 1: Use many different tools to solve these challenges, you can use the summary lecture to choose between them 😉
HINT 2: Being within a range 10% above and below the recommended portion means: current > (recommended * 0.90) && current < (recommended * 1.10). Basically, the current portion should be between 90% and 110% of the recommended portion.

TEST DATA:
const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] }
];

GOOD LUCK 😀
*/

const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] },
];

function getRecommendedFoodPortion(weight) {
  return Math.trunc(weight ** 0.75 * 28);
}

// 1.
for (const dog of dogs) {
  dog.recommendedFood = getRecommendedFoodPortion(dog.weight);
}
console.log('#1 --> ', dogs);

// 2.
function checkRecommendedFoodRange(curFood, recommendedFood) {
  if (curFood > recommendedFood * 0.9 && curFood < recommendedFood * 1.1) {
    return 'eats okay!!';
  } else if (curFood > recommendedFood * 1.1) {
    return 'eats too much...';
  } else {
    return 'eats too little...';
  }
}

for (const dog of dogs) {
  if (dog.owners.includes('Sarah')) {
    console.log(
      `Sarah's dogs ${checkRecommendedFoodRange(
        dog.curFood,
        dog.recommendedFood
      )}`
    );
    break;
  }
}

// 3.
const eatTooMuchOwners = dogs
  .filter(dog => dog.curFood > dog.recommendedFood * 1.1)
  .flatMap(dog => dog.owners);
console.log('eatTooMuchOwners --> ', eatTooMuchOwners);

const eatTooLittleOwners = dogs
  .filter(dog => dog.curFood < dog.recommendedFood * 0.9)
  .flatMap(dog => dog.owners);
console.log('eatTooLittleOwners --> ', eatTooLittleOwners);

// 4.
console.log(
  '4. tooMuch --> ',
  eatTooMuchOwners.join(' and '),
  'dogs eat too much!'
);

console.log(
  '4. tooLittle --> ',
  eatTooLittleOwners.join(' and '),
  'dogs eat too little!'
);

// 5.
for (const dog of dogs) {
  if (dog.curFood === dog.recommendedFood) console.log('5. --> ', true);
  else console.log('5. --> ', false);
}

// 6.
