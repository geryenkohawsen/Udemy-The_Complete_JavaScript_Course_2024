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

const displayMovements = movements => {
  // Empty container programmatically
  containerMovements.innerHTML = '';
  movements.forEach((mov, i) => {
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
