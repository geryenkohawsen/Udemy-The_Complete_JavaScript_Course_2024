import * as model from './model.js';
import recipeView from './views/recipeView';
import searchView from './views/searchView';

import 'core-js/stable'; //* polyfilling
import 'regenerator-runtime/runtime'; //* polyfilling async await

// https://forkify-api.herokuapp.com/v2

///////////////////////////////////////

const controlRecipes = async function () {
  try {
    const id = window.location.hash.slice(1);

    if (!id) return;
    recipeView.renderSpinner();

    //* 1. Loading recipe
    await model.loadRecipe(id);

    //* 2. Rendering recipe
    recipeView.render(model.state.recipe);
  } catch (error) {
    recipeView.renderError();
  }
};

const controlSearchResults = async function () {
  try {
    // 1) Get search query
    const query = searchView.getQuery();
    if (!query) return;

    // 2) Load search results
    await model.loadSearchResults(query);

    // 3) Render search results
    console.log('state.search.results --> ', model.state.search.results);
  } catch (error) {
    console.error(`${error}!!!`);
  }
};

const init = function () {
  recipeView.addHandlerRender(controlRecipes);
  searchView.addHandlerSearch(controlSearchResults);
};
init();
