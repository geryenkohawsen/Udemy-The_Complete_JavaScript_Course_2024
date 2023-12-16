'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////
// https://restcountries.com/v2

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
