'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

const renderCountry = function (data, className = '') {
  const html = `
  <article class="country ${className}">
    <img class="country__img" src="${data.flag}" />
    <div class="country__data">
      <h3 class="country__name">${data.name}</h3>
      <h4 class="country__region">${data.region}</h4>
      <p class="country__row"><span>👫</span>${(
        +data.population / 1000000
      ).toFixed(1)} people</p>
      <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
      <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
    </div>
  </article>
  `;
  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;
};

/*
///////////////////////////////////////
// https://restcountries.com/v2

const getCountryAndNeighbor = function (country) {
  // AJAX call country 1
  const request = new XMLHttpRequest(); // Old way of doing HTTP requests
  request.open('GET', `https://restcountries.com/v2/name/${country}`); // Open the request (next step is to send it)
  request.send(); // Send the request

  request.addEventListener('load', function () {
    const [data] = JSON.parse(this.responseText);
    console.log(data);

    // Render country (1st request)
    renderCountry(data);

    // Get neighbor country (2nd request)
    const neighbor = data.borders?.[0];
    if (!neighbor) return;

    // AJAX call country 2
    console.log('neighbor → ', neighbor);
    const request2 = new XMLHttpRequest(); // Old way of doing HTTP requests
    request2.open('GET', `https://restcountries.com/v2/alpha/${neighbor}`); // Open the request (next step is to send it)
    request2.send(); // Send the request

    request2.addEventListener('load', function () {
      const data2 = JSON.parse(this.responseText);
      console.log(data2);

      // Render country (2st request)
      renderCountry(data2, 'neighbour');
    });
  });
};

// getCountryAndNeighbor('portugal');
getCountryAndNeighbor('usa');
*/

// const getCountryData = function (country) {
//   fetch(`https://restcountries.com/v2/name/${country}`)
//     .then(res => {
//       console.log('res → ', res);
//       return res.json();
//     })
//     .then(data => {
//       console.log('data → ', data);
//       renderCountry(data[0]);
//     });
// };

const renderError = function (msg) {
  countriesContainer.insertAdjacentText('beforeend', msg);
};

const getCountryData = function (country) {
  // Country 1
  fetch(`https://restcountries.com/v2/name/${country}`)
    .then(res => res.json()) // arrow function will implicitly return the promise object
    .then(data => {
      renderCountry(data[0]);
      const neighbor = data[0].borders?.[0];

      if (!neighbor) return;

      // Country 2
      return fetch(`https://restcountries.com/v2/alpha/${neighbor}`);
    })
    .then(res => res.json())
    .then(data => renderCountry(data, 'neighbour'))
    .catch(err => {
      console.error(`${err} 💥💥💥`);
      renderError(`Something went wrong 💥💥💥 ${err.message}. Try again!`);
    })
    .finally(() => {
      // common usecase is to hide the loading spinner
      countriesContainer.style.opacity = 1;
    }); // arrow function will implicitly return the promise object
};

btn.addEventListener('click', function () {
  getCountryData('indonesia');
  // getCountryData('asdasdasd');
});
