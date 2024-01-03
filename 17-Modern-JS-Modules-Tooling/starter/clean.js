'strict mode';

const budget = Object.freeze([
  { value: 250, description: 'Sold old TV 📺', user: 'jonas' },
  { value: -45, description: 'Groceries 🥑', user: 'jonas' },
  { value: 3500, description: 'Monthly salary 👩‍💻', user: 'jonas' },
  { value: 300, description: 'Freelancing 👩‍💻', user: 'jonas' },
  { value: -1100, description: 'New iPhone 📱', user: 'jonas' },
  { value: -20, description: 'Candy 🍭', user: 'matilda' },
  { value: -125, description: 'Toys 🚂', user: 'matilda' },
  { value: -1800, description: 'New Laptop 💻', user: 'jonas' },
]);

const spendingLimits = Object.freeze({
  jonas: 1500,
  matilda: 100,
});

spendingLimits.jay = 300;
console.log('spendingLimits --> ', spendingLimits);

const getLimit = (limits, user) => spendingLimits?.[user] ?? 0;

// PURE FUNCTION
const addExpense = function (
  state,
  limits,
  value,
  description,
  user = 'jonas'
) {
  const cleanUser = user.toLowerCase();

  return value <= getLimit(limits, cleanUser)
    ? [...state, { value, description, user: cleanUser }]
    : state;

  // with object literal syntax, if prop name is same as variable name, we can just put it as it is
  // budget.push({ value: -value, description, user: cleanUser });
};

const newBudget1 = addExpense(budget, spendingLimits, 10, 'Pizza 🍕');
console.log('newBudget1 --> ', newBudget1);

const newBudget2 = addExpense(
  newBudget1,
  spendingLimits,
  100,
  'Going to movies 🍿',
  'Matilda'
);
console.log('newBudget2 --> ', newBudget2);

const newBudget3 = addExpense(newBudget2, spendingLimits, 200, 'Stuff', 'Jay');
console.log('newBudget3 --> ', newBudget3);

// const checkExpenses2 = function (state, limits) {
//   return state.map(entry => {
//     return entry.value < -getLimit(entry.user)
//       ? { ...entry, flag: 'limit' }
//       : entry;
//   });
//   // for (const entry of budget)
//   //   if (entry.value < -getLimit(entry.user)) entry.flag = 'limit';
// };

// PURE FUNCTION (with arrow function) that does not mutate anything
const checkExpenses = (state, limits) =>
  state.map(entry =>
    entry.value < -getLimit(entry.user) ? { ...entry, flag: 'limit' } : entry
  );

const finalBudget = checkExpenses(newBudget3, spendingLimits);
console.log('finalBudget --> ', finalBudget);

const logBigExpenses = function (state, bigLimit) {
  const bigExpenses = state
    .filter(entry => entry.value <= -bigLimit)
    .map(entry => entry.description.slice(-2))
    .join(' / ');
  // .reduce((acc, cur) => `${acc} / ${cur.description.slice(-2)}`, ''); //* when using reduce

  console.log('bigExpenses --> ', bigExpenses);

  // let output = '';
  // for (const entry of budget)
  //   output +=
  //     entry.value <= -bigLimit ? `${entry.description.slice(-2)} / ` : '';
  // output = output.slice(0, -2); // Remove last '/ '
  // console.log(output);
};

console.log('after adding expenses', budget);
logBigExpenses(finalBudget, 500);
