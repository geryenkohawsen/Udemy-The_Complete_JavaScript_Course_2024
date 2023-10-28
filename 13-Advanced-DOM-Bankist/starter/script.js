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

// Creating and inserting elements

const message = document.createElement('div'); // created but not inserted to the DOM yet
message.classList.add('cooking-message');
// message.textContent = 'We use cookies!'; // this is just a text
message.innerHTML =
  'We use cookies! <button class="btn btn--close-cookie">Got it!</button>'; // can be use to insert string and html elements

const header = document.querySelector('.header');
// message element is a LIVE element
// cannot be at multiple places at the same time
header.prepend(message);
header.append(message);

header.prepend(message.cloneNode(true)); // copy a DOM element
header.before(message.cloneNode(true)); // copy a DOM element
header.after(message.cloneNode(true)); // copy a DOM element

const cookieBtnClose = document.createElement('div');
cookieBtnClose.innerHTML =
  '<button class="btn btn--close-cookie">Close cookie</button>';
header.prepend(cookieBtnClose);
cookieBtnClose.addEventListener('click', () => cookieBtnClose.remove());
