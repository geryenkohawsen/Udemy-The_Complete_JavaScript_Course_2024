'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

////////////////////////////////
////////////////////////////////
////////////////////////////////

/*
// Selecting elements
console.log('document element --> ', document.documentElement);
console.log('head --> ', document.head);
console.log('body --> ', document.body);

console.log('querySelector --> ', document.querySelector('.header'));
const allSections = document.querySelectorAll('.section');
console.log('allSections --> ', allSections);

console.log('getElementById --> ', document.getElementById('section--1'));
console.log(
  'getElementsByTagName --> ',
  document.getElementsByTagName('button') // this will return a LIVE HTML collection of all elements
);
console.log(
  'getElementsByTagName --> ',
  document.getElementsByClassName('.btn') // return a LIVE HTML collection
);
*/

// Creating and inserting elements
const message = document.createElement('div'); // created but not inserted to the DOM yet
message.classList.add('cookie-message');
// message.textContent = 'We use cookies!'; // this is just a text
message.innerHTML =
  'We use cookies for improved functionality and analytics! <button class="btn btn--close-cookie">Got it!</button>'; // can be use to insert string and html elements

const header = document.querySelector('.header');
// message element is a LIVE element
// cannot be at multiple places at the same time
// header.prepend(message);
header.append(message);

// header.prepend(message.cloneNode(true)); // copy a DOM element
// header.before(message.cloneNode(true)); // copy a DOM element
// header.after(message.cloneNode(true)); // copy a DOM element

message.addEventListener('click', () => message.remove());

// Styles
message.style.backgroundColor = '#37383d';
message.style.width = '120%';

console.log(message.style.color);
console.log(message.style.backgroundColor);
console.log(getComputedStyle(message)); // get computed style (CSS styling that are visible on the page)
console.log(getComputedStyle(message).color);
console.log(getComputedStyle(message).height);

message.style.height =
  Number.parseFloat(getComputedStyle(message).height, 10) + 30 + 'px';

document.documentElement.style.setProperty('--color-primary', 'salmon');

// Attributes
const logo = document.querySelector('.nav__logo');
console.log('logo.alt -->', logo.alt);
console.log('logo.className --> ', logo.className);

console.log('NON-standard --> ', logo.designer); // will be undefined
console.log('NON-standard --> ', logo.getAttribute('designer'));
logo.setAttribute('company', 'Bankist');

console.log('logo.src absolute --> ', logo.src);
console.log('logo.src relative --> ', logo.getAttribute('src'));

// Data attributes
console.log('data attributes DATASET--> ', logo.dataset);
console.log('data attributes example --> ', logo.dataset.versionNumber);

// Classes
logo.classList.add('ccc', 'class2');
logo.classList.remove('ccc', 'class2');
logo.classList.toggle('ccc', 'class2');
logo.classList.contains('ccc', 'class2');

test.className = 'ccc'; // THIS WILL OVERWRITE THE CLASS
