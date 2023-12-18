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

const getJSON = function (url, errorMsg = 'Something went wrong') {
  return fetch(url).then(res => {
    console.log('res → ', res);
    if (!res.ok) throw new Error(`${errorMsg} (${res.status})`);
    return res.json();
  });
};

// const getCountryData = function (country) {
//   // Country 1
//   fetch(`https://restcountries.com/v2/name/${country}`)
//     .then(res => {
//       console.log('res → ', res);
//       if (!res.ok) throw new Error(`Country not found (${res.status})`);
//       res.json();
//     }) // arrow function will implicitly return the promise object
//     .then(data => {
//       renderCountry(data[0]);
//       const neighbor = data[0].borders?.[0];

//       if (!neighbor) return;

//       // Country 2
//       return fetch(`https://restcountries.com/v2/alpha/${neighbor}`);
//     })
//     .then(res => {
//       console.log('res → ', res);
//       if (!res.ok) throw new Error(`Country not found (${res.status})`);
//       res.json();
//     })
//     .then(data => renderCountry(data, 'neighbour'))
//     .catch(err => {
//       console.error(`${err} 💥💥💥`);
//       renderError(`Something went wrong 💥💥💥 ${err.message}. Try again!`);
//     })
//     .finally(() => {
//       // common usecase is to hide the loading spinner
//       countriesContainer.style.opacity = 1;
//     }); // arrow function will implicitly return the promise object
// };

/*
const getCountryData = function (country) {
  // Country 1

  getJSON(`https://restcountries.com/v2/name/${country}`, 'Country not found')
    .then(data => {
      renderCountry(data[0]);
      const neighbor = data[0].borders?.[0];

      if (!neighbor) throw new Error('No neighbor found!');

      // Country 2
      return getJSON(
        `https://restcountries.com/v2/alpha/${neighbor}`,
        'Country not found'
      );
    })
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
  getCountryData('australia');
});
*/

///////////////////////////////////////
// Coding Challenge #1

/* 
In this challenge you will build a function 'whereAmI' which renders a country ONLY based on GPS coordinates. For that, you will use a second API to geocode coordinates.

Here are your tasks:

PART 1
1. Create a function 'whereAmI' which takes as inputs a latitude value (lat) and a longitude value (lng) (these are GPS coordinates, examples are below).
2. Do 'reverse geocoding' of the provided coordinates. Reverse geocoding means to convert coordinates to a meaningful location, like a city and country name. Use this API to do reverse geocoding: https://geocode.xyz/api.
The AJAX call will be done to a URL with this format: https://geocode.xyz/52.508,13.381?geoit=json. Use the fetch API and promises to get the data. Do NOT use the getJSON function we created, that is cheating 😉
3. Once you have the data, take a look at it in the console to see all the attributes that you recieved about the provided location. Then, using this data, log a messsage like this to the console: 'You are in Berlin, Germany'
4. Chain a .catch method to the end of the promise chain and log errors to the console
5. This API allows you to make only 3 requests per second. If you reload fast, you will get this error with code 403. This is an error with the request. Remember, fetch() does NOT reject the promise in this case. So create an error to reject the promise yourself, with a meaningful error message.

PART 2
6. Now it's time to use the received data to render a country. So take the relevant attribute from the geocoding API result, and plug it into the countries API that we have been using.
7. Render the country and catch any errors, just like we have done in the last lecture (you can even copy this code, no need to type the same code)

TEST COORDINATES 1: 52.508, 13.381 (Latitude, Longitude)
TEST COORDINATES 2: 19.037, 72.873
TEST COORDINATES 2: -33.933, 18.474

GOOD LUCK 😀
*/
/*
const freeAPI = '640766658316374271839x31894';

const whereAmI = function (lat, lng) {
  fetch(`https://geocode.xyz/${lat},${lng}?json=1&auth=${freeAPI}`)
    .then(response => {
      console.log('response → ', response);
      if (!response.ok)
        throw new Error(`Problem with geocoding ${response.status}`);
      return response.json();
    })
    .then(data => {
      console.log('data → ', data);
      console.log(`You are in ${data.city}, ${data.country}`);
      return fetch(`https://restcountries.com/v2/name/${data.country}`);
    })
    .then(response => {
      if (!response.ok)
        throw new Error(`Country not found (${response.status})`);
      return response.json();
    })
    .then(data => renderCountry(data[0]))
    .catch(err => {
      console.error(`${err} 💥💥💥`);
    });
};

whereAmI(52.508, 13.381);
whereAmI(19.037, 72.873);
whereAmI(-33.933, 18.474);
*/

/*
console.log('Test start'); // 1st
setTimeout(() => console.log('0 sec timer'), 0); // 5th (callback queue)
Promise.resolve('Resolved promise 1').then(res => console.log(res)); // 3rd (microtask queue)

Promise.resolve('Resolved promise 2').then(res => {
  for (let i = 0; i < 1000000000; i++) {}
  console.log(res); // 4rd (microtask queue)
});

console.log('Test end'); // 2nd
*/

/*
const lotteryPromise = new Promise(function (resolve, reject) {
  console.log('Lottery draw is happening 🔮');
  setTimeout(function () {
    if (Math.random() >= 0.5) {
      resolve('You WIN!');
    } else {
      reject('You lost your money!');
    }
  }, 2000);
});

lotteryPromise.then(res => console.log(res)).catch(err => console.error(err));

// Promisifying setTimeout
const wait = function (seconds) {
  // timeout will never fail, so no need to reject
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds * 1000);
  });
};

wait(2)
  .then(() => {
    console.log('I waited for 2 seconds');
    return wait(1);
  })
  .then(() => console.log('I waited for 1 another second'));

// You can also create a promise without the constructor. It will be resolved or rejected immediately
Promise.resolve('abc').then(x => console.log(x));
Promise.reject(new Error('Problem!')).catch(x => console.error(x));
*/

const getPosition = function () {
  return new Promise(function (resolve, reject) {
    // navigator.geolocation.getCurrentPosition(
    //   position => resolve(position),
    //   err => reject(err)
    // );
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};

getPosition().then(pos => console.log(pos));

const freeAPI = '640766658316374271839x31894';

const whereAmI = function () {
  getPosition()
    .then(pos => {
      const { latitude: lat, longitude: lng } = pos.coords;
      return fetch(`https://geocode.xyz/${lat},${lng}?json=1&auth=${freeAPI}`);
    })
    .then(response => {
      console.log('response → ', response);
      if (!response.ok)
        throw new Error(`Problem with geocoding ${response.status}`);
      return response.json();
    })
    .then(data => {
      console.log('data → ', data);
      console.log(`You are in ${data.city}, ${data.country}`);
      return fetch(`https://restcountries.com/v2/name/${data.country}`);
    })
    .then(response => {
      if (!response.ok)
        throw new Error(`Country not found (${response.status})`);
      return response.json();
    })
    .then(data => renderCountry(data[0]))
    .catch(err => {
      console.error(`${err} 💥💥💥`);
    });
};

btn.addEventListener('click', whereAmI);

///////////////////////////////////////
// Coding Challenge #2

/* 
Build the image loading functionality that I just showed you on the screen.

Tasks are not super-descriptive this time, so that you can figure out some stuff on your own. Pretend you're working on your own 😉

PART 1
1. Create a function 'createImage' which receives imgPath as an input. 
This function returns a promise which creates a new image (use document.createElement('img')) and sets the .src attribute to the provided image path. 
When the image is done loading, append it to the DOM element with the 'images' class, and resolve the promise. The fulfilled value should be the image element itself. 
In case there is an error loading the image ('error' event), reject the promise.

If this part is too tricky for you, just watch the first part of the solution.

PART 2
2. Consume the promise using .then and also add an error handler;
3. After the image has loaded, pause execution for 2 seconds using the wait function we created earlier;
4. After the 2 seconds have passed, hide the current image (set display to 'none'), and load a second image 
(HINT: Use the image element returned by the createImage promise to hide the current image. You will need a global variable for that 😉);
5. After the second image has loaded, pause execution for 2 seconds again;
6. After the 2 seconds have passed, hide the current image.

TEST DATA: Images in the img folder. Test the error handler by passing a wrong image path. 
Set the network speed to 'Fast 3G' in the dev tools Network tab, otherwise images load too fast.

GOOD LUCK 😀
*/

const imgContainer = document.querySelector('.images');

const createImage = function (imgPath) {
  return new Promise(function (resolve, reject) {
    const img = document.createElement('img');
    img.src = imgPath;

    img.addEventListener('load', function () {
      imgContainer.append(img);
      resolve(img);
    });

    img.addEventListener('error', function () {
      reject(new Error('Image not found'));
    });
  });
};

const wait = function (seconds) {
  // timeout will never fail, so no need to reject
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds * 1000);
  });
};

let currentImg;

createImage('img/img-1.jpg')
  .then(img => {
    currentImg = img;
    console.log('Image 1 loaded');
    return wait(2);
  })
  .then(() => {
    console.log('currentImg → ', currentImg);
    currentImg.style.display = 'none';
    console.log('Image 1 hidden');
    return createImage('img/img-2.jpg');
  })
  .then(img => {
    currentImg = img;
    console.log('Image 2 loaded');
    return wait(2);
  })
  .then(() => {
    console.log('currentImg → ', currentImg);
    currentImg.style.display = 'none';
    console.log('FINISH!!!');
  })
  .catch(err => console.error(err));
