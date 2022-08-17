const fs = require('fs').promises;
const path = require('path');

const recipesFilePath = path.join(__dirname, '../../db/recipes.json');

const getAll = async () => JSON.parse(await fs.readFile(recipesFilePath));

module.exports = {
  getAll,
};
