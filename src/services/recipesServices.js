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

module.exports = {
  getAll,
  save,
};
