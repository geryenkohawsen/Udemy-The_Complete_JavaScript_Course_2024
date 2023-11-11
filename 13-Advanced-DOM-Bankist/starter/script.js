'use strict';

///////////////////////////////////////
// Modal window
const header = document.querySelector('.header');
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const nav = document.querySelector('.nav');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');
const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content');

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

// Creating and inserting elements
const message = document.createElement('div'); // created but not inserted to the DOM yet
message.classList.add('cookie-message');
// message.textContent = 'We use cookies!'; // this is just a text
message.innerHTML =
  'We use cookies for improved functionality and analytics! <button class="btn btn--close-cookie">Got it!</button>'; // can be use to insert string and html elements

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

// console.log(message.style.color);
// console.log(message.style.backgroundColor);
// console.log(getComputedStyle(message)); // get computed style (CSS styling that are visible on the page)
// console.log(getComputedStyle(message).color);
// console.log(getComputedStyle(message).height);

message.style.height =
  Number.parseFloat(getComputedStyle(message).height, 10) + 30 + 'px';

btnScrollTo.addEventListener('click', e => {
  const s1coords = section1.getBoundingClientRect();
  // console.log('s1coords --> ', s1coords);
  // console.log('e.target --> ', e.target.getBoundingClientRect());
  // console.log('Current scroll (x/y) --> ', window.scrollX, window.scrollY);
  // console.log(
  //   'height/width viewport --> ',
  //   document.documentElement.clientHeight,
  //   document.documentElement.clientWidth
  // );

  // Scrolling OLD SCHOOL
  // window.scrollTo({
  //   left: s1coords.left + window.scrollX,
  //   top: s1coords.top + window.scrollY,
  //   behavior: 'smooth',
  // });

  // Scrolling MODERN WAY
  section1.scrollIntoView({ behavior: 'smooth' });
});

////////////////////////////////
// Page navigation
// document.querySelectorAll('.nav__link').forEach(function (el) {
//   el.addEventListener('click', function (e) { // event listener is attached to every element (not good for performance)
//     e.preventDefault();
//     const id = this.getAttribute('href');
//     document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
//   });
// });

////////////////////////////////
// Event delegation

// 1. Add event listener to common parent element
// 2. Determine what element originated the event

document.querySelector('.nav__links').addEventListener('click', function (e) {
  e.preventDefault();

  // Matching strategy (hardest part of making event delegation)
  if (e.target.classList.contains('nav__link')) {
    const id = e.target.getAttribute('href');
    console.log(id);
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  }
});

////////////////////////////////
// Tabbed component
tabsContainer.addEventListener('click', function (e) {
  const clicked = e.target.closest('.operations__tab');
  console.log(clicked);

  // Guard clause
  if (!clicked) return;

  // Add active tab animation to clicked tab
  tabs.forEach(t => t.classList.remove('operations__tab--active'));
  clicked.classList.add('operations__tab--active');

  // Activate content area
  tabsContent.forEach(tc => tc.classList.remove('operations__content--active'));
  document
    .querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add('operations__content--active');
});

////////////////////////////////
// Menu fade animation
function handleHover(e) {
  if (e.target.classList.contains('nav__link')) {
    const link = e.target;
    const siblings = link.closest('.nav').querySelectorAll('.nav__link');
    const logo = link.closest('.nav').querySelector('img');

    siblings.forEach(el => {
      if (el !== link) el.style.opacity = this;
    });
    logo.style.opacity = this;
  }
}

// Passing "arguments" into handler
nav.addEventListener('mouseover', handleHover.bind(0.5));
nav.addEventListener('mouseout', handleHover.bind(1));

////////////////////////////////
// Sticky navigation

// const initialCoords = section1.getBoundingClientRect();
// window.addEventListener('scroll', function () {
//   console.log('initialCoords.top --> ', initialCoords.top);
//   console.log('window.scrollY --> ', window.scrollY);

//   if (window.scrollY > initialCoords.top) {
//     nav.classList.add('sticky');
//   } else {
//     nav.classList.remove('sticky');
//   }
// });

// function obsCallback(entries, observer) {
//   entries.forEach(entry => {
//     console.log(entry);
//   });
// }

// const obsOptions = {
//   root: null,
//   threshold: 0.1,
// };

// const observer = new IntersectionObserver(obsCallback, obsOptions);
// observer.observe(section1);

const navHeight = nav.getBoundingClientRect().height;

const stickyNav = function (entries) {
  const [entry] = entries;
  // console.log(entry);

  if (!entry.isIntersecting) nav.classList.add('sticky');
  else nav.classList.remove('sticky');
};

const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0, // percentage of the target's visibility the observer's callback should be executed
  rootMargin: `-${navHeight}px`, // length of header
});

headerObserver.observe(header);

////////////////////////////////
// Reveal sections
const allSections = document.querySelectorAll('.section');

function revealSection(entries, observer) {
  const [entry] = entries;
  // console.log(entry);

  if (!entry.isIntersecting) return;
  entry.target.classList.remove('section--hidden');
  observer.unobserve(entry.target);
}

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15, // percentage of the target's visibility the observer's callback should be executed
});

allSections.forEach(function (section) {
  sectionObserver.observe(section);
  section.classList.add('section--hidden');
});

////////////////////////////////
// Lazy loading images
const imgTargets = document.querySelectorAll('img[data-src]');

const loadImg = function (entries, observer) {
  const [entry] = entries;
  // console.log(entry);

  if (!entry.isIntersecting) return;

  // Replace src with data-src
  entry.target.src = entry.target.dataset.src;
  entry.target.addEventListener('load', function () {
    entry.target.classList.remove('lazy-img');
  }); // load event will be fired after the new image is loaded

  observer.unobserve(entry.target);
};

const imgObserver = new IntersectionObserver(loadImg, {
  root: null,
  threshold: 0,
  rootMargin: '200px', // make image load earlier
});

imgTargets.forEach(img => imgObserver.observe(img));

////////////////////////////////
// Slider
const slides = document.querySelectorAll('.slide');
const btnLeft = document.querySelector('.slider__btn--left');
const btnRight = document.querySelector('.slider__btn--right');
const slider = document.querySelector('.slider');
const dotContainer = document.querySelector('.dots');

let curSlide = 0;
const maxSlide = slides.length;

slides.forEach((s, i) => (s.style.transform = `translateX(${100 * i}%)`)); // 0%, 100%, 200%, 300%

const createDots = function () {
  slides.forEach(function (_, i) {
    dotContainer.insertAdjacentHTML(
      'beforeend',
      `<button class="dots__dot" data-slide="${i}"></ button>`
    );
  });
};

const activateDot = function (slide) {
  document
    .querySelectorAll('.dots__dot')
    .forEach(dot => dot.classList.remove('dots__dot--active'));

  document
    .querySelector(`.dots__dot[data-slide="${slide}"]`)
    .classList.add('dots__dot--active');
};

const goToSlide = function (slide) {
  slides.forEach(
    (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
  );
};

const nextSlide = function () {
  // Return to first slide if no next slide
  if (curSlide === maxSlide - 1) {
    curSlide = 0;
  } else {
    curSlide++;
  }

  goToSlide(curSlide);
  activateDot(curSlide);
};

const prevSlide = function () {
  if (curSlide === 0) {
    curSlide = maxSlide - 1;
  } else {
    curSlide--;
  }

  goToSlide(curSlide);
  activateDot(curSlide);
};

const init = function () {
  goToSlide(0);
  createDots();
  activateDot(0);
};
init();

// Event handlers for
btnRight.addEventListener('click', nextSlide);
btnLeft.addEventListener('click', prevSlide);

document.addEventListener('keydown', function (e) {
  console.log(e);
  if (e.key === 'ArrowLeft') prevSlide();
  e.key === 'ArrowRight' && nextSlide(); // short circuiting method
});

dotContainer.addEventListener('click', function (e) {
  if (e.target.classList.contains('dots__dot')) {
    const slide = e.target.dataset.slide;
    goToSlide(slide);
    activateDot(slide);
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

/*
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
*/

/*
// Events and events handlers
const h1 = document.querySelector('h1');

// OLD SCHOOL WAY
h1.onmouseenter = function (e) {
  console.log('onmouseenter');
};

// MODERN WAY
h1.addEventListener('mouseenter', e => console.log('addEventListener'));

const alertH1 = e => {
  alert('You hovered over H1!!');

  e.target.removeEventListener('mouseenter', alertH1); // remove event listener after getting executed once
};
h1.addEventListener('mouseenter', alertH1);
*/

/*
const randomInt = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min);

const randomColor = () =>
  `rgba(${randomInt(0, 225)},${randomInt(0, 225)},${randomInt(0, 225)})`;

document.querySelector('.nav__link').addEventListener('click', function (e) {
  this.style.backgroundColor = randomColor();
  console.log('LINK', e.target, e.currentTarget);
  console.log(this === e.currentTarget);

  // Stop propagation
  e.stopPropagation();
});

document.querySelector('.nav__links').addEventListener('click', function (e) {
  this.style.backgroundColor = randomColor();
  console.log('CONTAINER', e.target, e.currentTarget);
  console.log(this === e.currentTarget);
});

document.querySelector('.nav').addEventListener(
  'click',
  function (e) {
    this.style.backgroundColor = randomColor();
    console.log('NAV', e.target, e.currentTarget);
    console.log(this === e.currentTarget);
  },
  true
);
*/

/*
const h1 = document.querySelector('h1');

// Going downwards: child
console.log(h1.querySelectorAll('.highlight'));
console.log(h1.childNodes);
console.log(h1.children);
h1.firstElementChild.style.color = 'green';
h1.lastElementChild.style.color = 'orangered';

// Going upwards: parents
console.log('parent node -->', h1.parentNode);
console.log('parent element -->', h1.parentElement);

h1.closest('.header').style.background = 'var(--gradient-secondary)';
h1.closest('h1').style.background = 'var(--gradient-primary)';

// Going sideways: siblings
console.log('previous element sibling --> ', h1.previousElementSibling);
console.log('next element sibling --> ', h1.nextElementSibling);
console.log('previous sibling --> ', h1.previousSibling);
console.log('next sibling --> ', h1.nextSibling);

console.log('all siblings --> ', h1.parentElement.children);
[...h1.parentElement.children].forEach(el => {
  if (el !== h1) {
    el.style.transform = 'scale(0.5)';
  }
});
*/

/*
document.addEventListener('DOMContentLoaded', function (e) {
  console.log('HTML parsed and DOM loaded', e, e.timeStamp);
});

window.addEventListener('load', function (e) {
  console.log('Page fully loaded', e, e.timeStamp);
});

window.addEventListener('beforeunload', function (e) {
  e.preventDefault();
  console.log('Page is unload (user quit the browser tab)', e, e.timeStamp);
  e.returnValue = '';
});
*/
