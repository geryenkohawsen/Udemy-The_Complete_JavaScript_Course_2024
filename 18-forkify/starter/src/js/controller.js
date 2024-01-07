import * as model from './model.js';
import recipeView from './views/recipeView';

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
    alert(error);
  }
};

const init = function () {
  recipeView.addHandlerRender(controlRecipes);
};
init();
