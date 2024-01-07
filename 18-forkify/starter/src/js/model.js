import { async } from 'regenerator-runtime/runtime'; //* polyfilling async await

export const state = {
  recipe: {},
};

export const loadRecipe = async function (id) {
  try {
    const response = await fetch(
      `https://forkify-api.herokuapp.com/api/v2/recipes/${id}`
    );
    const data = await response.json();

    console.log('response --> ', response);
    console.log('data --> ', data);

    if (!response.ok) throw new Error(`${data.message} (${response.status})`);

    const { recipe } = data.data;
    state.recipe = {
      id: recipe.id,
      title: recipe.title,
      publisher: recipe.publisher,
      sourceUrl: recipe.source_url,
      image: recipe.image_url,
      servings: recipe.servings,
      cookingTime: recipe.cooking_time,
      ingredients: recipe.ingredients,
    };
    console.log('state.recipe --> ', state.recipe);
  } catch (error) {
    alert(error);
  }
};
