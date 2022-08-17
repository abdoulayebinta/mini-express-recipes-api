const fs = require('fs').promises;
const path = require('path');

const recipesFilePath = path.join(__dirname, '../../db/recipes.json');

// Get all recipes data
const getAll = async () => JSON.parse(await fs.readFile(recipesFilePath));

// Save a new recipes to the database
const save = async (recipe) => {
  const recipes = await getAll();
  recipe.id = recipes.length + 1;
  recipes.push(recipe);

  await fs.writeFile(recipesFilePath, JSON.stringify(recipes));

  return recipe;
};

// Get a single recipe
const get = async (id) => {
  const recipes = await getAll();
  return recipes.find((recipe) => recipe.id === parseInt(id));
};

// Update a recipe
const update = async (id, updated) => {
  const recipes = await getAll();

  updated.id = parseInt(id);

  const updatedRecipe = recipes.map((recipe) => {
    return recipe.id === parseInt(id) ? updated : recipe;
  });

  await fs.readFile(recipesFilePath, JSON.stringify(updatedRecipe));

  return updated;
};

module.exports = {
  getAll,
  save,
};
