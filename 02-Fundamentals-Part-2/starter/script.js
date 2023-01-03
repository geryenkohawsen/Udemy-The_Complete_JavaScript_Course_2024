'use strict';

/*
let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log('I can drive!!');

// const interface = 'Audio';
// const private = 123;
*/

/*
function logger() {
	console.log('My name is Gery');
}

// calling / running / invoking function
logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
	console.log(apples, oranges);
	const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
	return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

const num = Number('23');
*/

/*
// Function declaration ❗❕
function calcAge1(birthYear) {
	return 2037 - birthYear;
}
const age1 = calcAge1(1991);
console.log(age1);

// Function expression ❗❕
const calcAge2 = function (birthYear) {
	return 2037 - birthYear;
};
const age2 = calcAge2(1991);
console.log(age2);
*/

/*
// Arrow function
const calcAge3 = (birthYear) => 2037 - birthYear; // no need for return keyword if one line
const age3 = calcAge3(1991);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
	const age = 2037 - birthYear;
	const retirement = 65 - age;
	// return retirement;
	return `${firstName} retire in ${retirement} years`;
};

console.log(yearsUntilRetirement(1991, 'Jonas'));
console.log(yearsUntilRetirement(1980, 'Bob'));
*/

/*
function cutFruitPieces(fruit) {
	return fruit * 4;
}

function fruitProcessor(apples, oranges) {
	const applePieces = cutFruitPieces(apples);
	const orangePieces = cutFruitPieces(oranges);

	const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of oranges.`;
	return juice;
}

console.log(fruitProcessor(2, 3));
*/

/*
const calcAge = function (birthYear) {
	return 2037 - birthYear;
};

const yearsUntilRetirement = function (birthYear, firstName) {
	const age = calcAge(birthYear);
	const retirement = 65 - age;

	if (retirement > 0) {
		console.log(`${firstName} retire in ${retirement} years`);
		return retirement;
	} else {
		console.log(`${firstName} has already retired 🎉`);
		return -1;
	}
};

console.log(yearsUntilRetirement(1991, 'Jonas'));
console.log(yearsUntilRetirement(1950, 'Mike'));
*/

// Coding Challenge #1
// Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new
// gymnastics discipline, which works differently.
// Each team competes 3 times, and then the average of the 3 scores is calculated (so
// one average score per team).
// A team only wins if it has at least double the average score of the other team.
// Otherwise, no team wins!
// Your tasks:
// 1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
// 2. Use the function to calculate the average for both teams
// 3. Create a function 'checkWinner' that takes the average score of each team
// as parameters ('avgDolphins' and 'avgKoalas'), and then logs the winner
// to the console, together with the victory points, according to the rule above.
// Example: "Koalas win (30 vs. 13)"
// 4. Use the 'checkWinner' function to determine the winner for both Data 1 and
// Data 2
// 5. Ignore draws this time
// Test data:
// § Data 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
// § Data 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27
// Hints:
// § To calculate average of 3 values, add them all together and divide by 3
// § To check if number A is at least double number B, check for A >= 2 * B.
// Apply this to the team's average scores 😉

/*
const calcAverage = (s1, s2, s3) => (s1 + s2 + s3) / 3;

const checkWinner = function (avgTeam1, avgTeam2) {
	if (avgTeam1 >= avgTeam2 * 2) {
		return `Dolphins won! (${avgTeam1} vs. ${avgTeam2})`;
	} else if (avgTeam2 >= avgTeam1 * 2) {
		return `Koalas won! (${avgTeam2} vs. ${avgTeam1})`;
	} else {
		return `No team wins...`;
	}
};
const avgDolphins = calcAverage(141, 23, 71);
const avgKoalas = calcAverage(65, 54, 49);

console.log(checkWinner(avgDolphins, avgKoalas));
console.log(checkWinner(123, 11)); // test
*/

/*
const friend1 = 'Michael';
const friend2 = 'Steven';
const friend3 = 'Peter';

const friends = ['Michael', 'Steven', 'Peter'];
console.log(friends);

const y = new Array(1991, 1999, 2001, 2002, 'Me');

console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length - 1]);
// friends = ['bob', 'Alice'];

const firstName = 'Gery';
const gery = [firstName, 'Hawsen', 2023 - 1999, 'developer', friends];
console.log(gery);
console.log(gery.length);

// Exercise
const calcAge = function (birthYear) {
	return 2023 - birthYear;
};
const years = [1990, 1967, 2002, 2010, 2018];

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years.length - 1);

console.log(age1, age2, age3);

const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years.length - 1)];
console.log(ages);
*/

/*
// Add elements
const friends = ['Michael', 'Steven', 'Peter']; // add element to the back
const newLength = friends.push('Jay');
console.log(friends);
console.log(newLength);

friends.unshift('John'); // add element to the front
console.log(friends);

// Remove elements
friends.pop(); // remove last element
const popped = friends.pop();
console.log(popped);
console.log(friends);

friends.shift(); // remove first element
console.log(friends);

console.log(friends.indexOf('Steven'));
console.log(friends.indexOf('Bob'));

friends.push(23);
console.log(friends.includes('Steven'));
console.log(friends.includes('Bob'));
console.log(friends.includes(23));

if (friends.includes('Steven')) {
	console.log('You have a friend called Steven');
}
*/

// Coding Challenge #2
// Steven is still building his tip calculator, using the same rules as before: Tip 15% of the bill if the bill value is between 50 and 300, and if the value is different, the tip is 20%.
// Your tasks:
// 1. Write a function 'calcTip' that takes any bill value as an input and returns the corresponding tip, calculated based on the rules above (you can check out the code from first tip calculator challenge if you need to). Use the function type you like the most. Test the function using a bill value of 100
// 2. And now let's use arrays! So create an array 'bills' containing the test data below
// 3. Create an array 'tips' containing the tip value for each bill, calculated from the function you created before
// 4. Bonus: Create an array 'total' containing the total values, so the bill + tip
// Test data: 125, 555 and 44
// Hint: Remember that an array needs a value in each position, and that value can actually be the returned value of a function! So you can just call a function as array values (so don't store the tip values in separate variables first, but right in the new array) 😉

/*
const calcTip = function (bill) {
	return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};

const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
console.log(bills, tips);
const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
console.log(totals);
*/

/*
const jonasArray = [
	'Jonas',
	'Schmedtmann',
	2037 - 1991,
	'teacher',
	['Michael', 'Steven', 'Peter'],
];
*/

/*
const jonas = {
	firstName: 'Jonas',
	lastName: 'Schmedtmann',
	age: 2037 - 1991,
	job: 'teacher',
	friends: ['Michael', 'Steven', 'Peter'],
};
console.log(jonas);

console.log(jonas.lastName);
console.log(jonas['lastName']);

const nameKey = 'Name';
console.log(jonas['first' + nameKey]);
console.log(jonas['last' + nameKey]);

// console.log(jonas.'last');

const interestedIn = prompt(
	'What do you want to know about Jonas? Choose between firstName, lastName, age, job, and friends.'
);

if (jonas[interestedIn]) {
	console.log(jonas[interestedIn]);
} else {
	console.log('Wrong request!');
}

jonas.location = 'Portugal';
jonas['twitter'] = '@twitter';
console.log(jonas);

console.log(
	`${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]}`
);
*/

const jonas = {
	firstName: 'Jonas',
	lastName: 'Schmedtmann',
	birthYear: 1991,
	job: 'teacher',
	friends: ['Michael', 'Steven', 'Peter'],
	hasDriversLicense: true,

	// calcAge: function (birthYear) {
	// 	return 2037 - birthYear;
	// },

	// calcAge: function () {
	// 	// console.log(this);
	// 	return 2037 - this.birthYear;
	// },

	calcAge: function () {
		this.age = 2027 - this.birthYear;
		return this.age;
	},

	getSummary: function () {
		return `${jonas.firstName} is a ${this.calcAge()}-year old ${
			this.job
		}, and he has ${this.hasDriversLicense ? 'a' : 'no'} driver's license`;
	},
};
console.log(jonas.calcAge());

console.log(jonas.age);
console.log(jonas.age);
console.log(jonas.age);

console.log(jonas.getSummary());
