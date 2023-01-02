/*
let js = 'amazing';
console.log(40 + 8 + 23 - 10);

console.log('Jonas');
console.log(23);

let firstName = 'Gery';
console.log(firstName);
console.log(firstName);
console.log(firstName);

// variable name conventions
let jonas_matilda = 'JM';

let _function = 'todo';
let PI = 3.1415;

let myFirstJob = 'Programmer';
let mySecondJob = 'Teacher';

let jon1 = 'Programmer';
let job2 = 'Teacher';

console.log(myFirstJob);
*/

/*
let javascriptIsFun = true;
console.log(javascriptIsFun);

// console.log(typeof true);
console.log(typeof javascriptIsFun);
// console.log(typeof 23);
// console.log(typeof 'jonas');

javascriptIsFun = 'YES!';
console.log(typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(typeof year);

let testNull = null;
console.log(testNull);
console.log('test', typeof testNull);
*/
/*
let age = 30;
age = 31;

const birthYear = 1999;
// birthYear = 1990;

var job = 'programmer';
job = 'teacher';

lastName = 'Hawsen';
console.log(lastName);
console.log(typeof lastName);
*/
/*
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(ageJonas, ageSarah);

console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);

const firstName = 'Geryenko';
const lastName = 'Hawsen';
console.log(firstName + ' ' + lastName);

// Assignment operators 代入演算子
let x = 10 + 5;
x += 10;
x *= 4;
x++;
x--;
x--;
console.log(x);

// Comparison operators 比較演算子
console.log(ageJonas > ageSarah);
console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18;

console.log(now - 1991 > now - 2018);
*/
/*
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;

console.log(now - 1991 > now - 2018);

let x, y;
x = y = 25 - 10 - 5;
console.log(x, y);

const averageAge = (ageJonas + ageSarah) / 2;
console.log(ageJonas, ageSarah, averageAge);
*/

// Coding Challenge #1
// Mark and John are trying to compare their BMI (Body Mass Index), which is
// calculated using the formula:
// BMI = mass / height ** 2 = mass / (height * height) (mass in kg and height in meter).
// Your tasks:
// 1. Store Mark's and John's mass and height in variables
// 2. Calculate both their BMIs using the formula (you can even implement both
// versions)
// 3. Create a Boolean variable 'markHigherBMI' containing information about
// whether Mark has a higher BMI than John.
// Test data:
// § Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95
// m tall.
// § Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76
// m tall.

/*
const markWeight1 = 78;
const markHeight1 = 1.69;
const markWeight2 = 95;
const markHeight2 = 1.88;
const johnWeight1 = 92;
const johnHeight1 = 1.95;
const johnWeight2 = 85;
const johnHeight2 = 1.76;

const markBMI1 = markWeight1 / markHeight1 ** 2;
const markBMI2 = markWeight2 / markHeight2 ** 2;
const johnBMI1 = johnWeight1 / johnHeight1 ** 2;
const johnBMI2 = johnWeight2 / johnHeight2 ** 2;

const markHigherBMI1 = markBMI1 > johnBMI1;
const markHigherBMI2 = markBMI2 > johnBMI2;

console.log(markHigherBMI1, markHigherBMI2);
*/
/*
const firstName = 'Jonas';
const job = 'teacher';
const birthYear = 1991;
const year = 2037;

const jonas =
  "I'm " + firstName + ', a ' + (year - birthYear) + ' year old ' + job + '!';
console.log(jonas);

const jonasNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;
console.log(jonasNew);

console.log(`Just a regular string...`);

console.log(
  'String with \n\
multiple \n\
lines'
);

console.log(`String
multiple
lines`);
*/
/*
const age = 15;

if (age >= 18) {
  console.log('You are allowed to drive!');
} else {
  const yearsLeft = 18 - age;
  console.log(`Please wait ${yearsLeft} years~`);
}

const birthYear = 2022;

let century;
if (birthYear <= 2000) {
  century = 20;
} else {
  century = 21;
}
console.log(century);
*/

// Coding Challenge #2
// Use the BMI example from Challenge #1, and the code you already wrote, and improve it.
// Your tasks:
// 1. Print a nice output to the console, saying who has the higher BMI. The message
// is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
// 2. Use a template literal to include the BMI values in the outputs. Example: "Mark's
// BMI (28.3) is higher than John's (23.9)!

/*
const markWeight1 = 78;
const markHeight1 = 1.69;
const markWeight2 = 95;
const markHeight2 = 1.88;
const johnWeight1 = 92;
const johnHeight1 = 1.95;
const johnWeight2 = 85;
const johnHeight2 = 1.76;

const markBMI1 = markWeight1 / markHeight1 ** 2;
const markBMI2 = markWeight2 / markHeight2 ** 2;
const johnBMI1 = johnWeight1 / johnHeight1 ** 2;
const johnBMI2 = johnWeight2 / johnHeight2 ** 2;

const markHigherBMI1 = markBMI1 > johnBMI1;
const markHigherBMI2 = markBMI2 > johnBMI2;

if (markHigherBMI1) {
  const diff1 = markBMI1 - johnBMI1;
  console.log(`Mark's BMI is higher than John's! by ${diff1}`);
} else {
  console.log("John's BMI is higher than Mark's!");
}

if (markHigherBMI2) {
  const diff2 = markBMI2 - johnBMI2;
  console.log(`Mark's BMI is higher than John's! by ${diff2}`);
} else {
  console.log("John's BMI is higher than Mark's!");
}
*/

/*
// type conversion
const inputYear = '1991';
console.log(Number(inputYear), inputYear, String(123123));
console.log(Number(inputYear) + 18);

console.log(Number('Jonas '));
console.log(typeof NaN);

console.log(String(23), 23);

// type coercion
console.log('I am ' + 23 + ' years old');
console.log('23' - '10' + 3);
console.log('23' - '10' - 3);
console.log('23' / '2');

let n = '1' + 1;
n = n - 1;
console.log('n -> ', n);
*/

// 5 falsy values: 0, '', undefined, null, NaN

/*
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Jonas'));
console.log(Boolean({}));
console.log(Boolean(''));

const money = 0;
if (money) {
	console.log("Don't spend it all!");
} else {
	console.log('Get a job!');
}

let height = 0;
if (height) {
	console.log('YAY! Height is defined');
} else {
	console.log(`Height is ${height}`);
}
*/

/*
const age = '18';
if (age === 18) console.log('You are an adult! (Strict)');
if (age == 18) console.log('You are an adult! (Loose)');

const favorite = Number(prompt("What's is your favorite number?"));
console.log(favorite, typeof favorite);

if (favorite === 23) {
	console.log('23 is a number');
} else if (favorite === 7) {
	console.log('7 is also a number');
} else if (favorite === 9) {
	console.log('9 is also a number');
} else {
	console.log('Chosen number is not 23 or 7 or 9...');
}

if (favorite !== 23) console.log('Why not 23?');
*/

/*
const hasDriverLicense = true;
const hasGoodVision = true;
console.log(hasDriverLicense && hasGoodVision);
console.log(hasDriverLicense || hasGoodVision);
console.log(!hasDriverLicense);

// if (hasDriverLicense && hasGoodVision) {
// 	console.log('You can drive!');
// } else {
// 	console.log('You should not drive...');
// }

const isTired = false;
console.log(hasDriverLicense && hasGoodVision && isTired);

if (hasDriverLicense && hasGoodVision && !isTired) {
	console.log('You can drive!');
} else {
	console.log('Someone else should drive...');
}
*/

// Coding Challenge #3
// There are two gymnastics teams, Dolphins and Koalas. They compete against each
// other 3 times. The winner with the highest average score wins a trophy!
// Your tasks:
// 1. Calculate the average score for each team, using the test data below
// 2. Compare the team's average scores to determine the winner of the competition,
// and print it to the console. Don't forget that there can be a draw, so test for that
// as well (draw means they have the same average score)
// 3. Bonus 1: Include a requirement for a minimum score of 100. With this rule, a
// team only wins if it has a higher score than the other team, and the same time a
// score of at least 100 points. Hint: Use a logical operator to test for minimum
// score, as well as multiple else-if blocks 😉
// 4. Bonus 2: Minimum score also applies to a draw! So a draw only happens when
// both teams have the same score and both have a score greater or equal 100
// points. Otherwise, no team wins the trophy
// Test data:
// § Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
// § Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
// § Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106

/*
const scoreDolphins = (96 + 108 + 89) / 3;
const scoreKoalas = (88 + 91 + 110) / 3;
console.log(scoreDolphins, scoreKoalas);

if (scoreDolphins === scoreKoalas) {
	console.log('draw');
} else if (scoreDolphins > scoreKoalas) {
	console.log('dolphins won');
} else {
	console.log('koalas won');
}

// BONUS 1
const minScore = 100;
const scoreDolphinsB1 = (97 + 112 + 101) / 3;
const scoreKoalasB1 = (109 + 95 + 123) / 3;
console.log(scoreDolphinsB1, scoreKoalasB1);

if (
	scoreDolphinsB1 === scoreKoalasB1 &&
	scoreDolphinsB1 > 100 &&
	scoreKoalasB1 > 100
) {
	console.log('draw');
} else if (scoreDolphinsB1 > scoreKoalasB1 && scoreDolphinsB1 > 100) {
	console.log('dolphins won');
} else if (scoreKoalasB1 > scoreDolphinsB1 && scoreKoalasB1 > 100) {
	console.log('koalas won');
}

// BONUS 2
const scoreDolphinsB2 = (97 + 112 + 101) / 3;
const scoreKoalasB2 = (109 + 95 + 106) / 3;
console.log(scoreDolphinsB2, scoreKoalasB2);

if (
	scoreDolphinsB2 === scoreKoalasB2 &&
	scoreDolphinsB2 > 100 &&
	scoreKoalasB2 > 100
) {
	console.log('draw');
} else if (scoreDolphinsB2 > scoreKoalasB2 && scoreDolphinsB2 > 100) {
	console.log('dolphins won');
} else if (scoreKoalasB2 > scoreDolphinsB2 && scoreKoalasB2 > 100) {
	console.log('koalas won');
}
*/

const day = 'monday';
switch (day) {
	case 'monday': // day === 'monday'
		console.log('Task1');
		console.log('Task2');
		break;
	case 'tuesday':
		console.log('Task3');
		break;
	case 'wednesday':
	case 'thursday':
		console.log('Task 4');
		break;
	case 'friday':
		console.log('TGIF!');
		break;
	case 'saturday':
	case 'sunday':
		console.log('Enjoy the weekend!');
		break;
	default:
		console.log('Not a valid day...');
}

if (day === 'monday') {
	console.log('Task1');
	console.log('Task2');
} else if (day === 'tuesday') {
	console.log('Task3');
} else if (day === 'wednesday' || day === 'thursday') {
	console.log('Task 4');
} else if (day === 'friday') {
	console.log('TGIF!');
} else if (day === 'saturday' || day === 'sunday') {
	console.log('Enjoy the weekend!');
} else {
	console.log('Not a valid day...');
}
