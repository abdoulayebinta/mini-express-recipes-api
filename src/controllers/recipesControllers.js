const service = require('../services/recipesServices');

const recipeExist = async (req, res, next) => {
  const recipe = await service.get(req.params.id);

  if (recipe === undefined) {
    const err = new Error('Recipe not found');
    err.statusCode = 404;
    throw err;
  } else {
    res.locals.recipe = recipe;
    next();
  }
};

// Get all recipes controller
const getAllRecipes = async (req, res, next) => {
  try {
    res.json({ data: await service.getAll() });
  } catch (error) {
    next(error);
  }
};

// Save recipe controller
const saveRecipe = async (req, res, next) => {
  try {
    const {
      name,
      healthLabels,
      cookTimeMinutes,
      prepTimeMinutes,
      ingredients,
    } = req.body;

    const newRecipe = {
      name,
      healthLabels: [...healthLabels],
      cookTimeMinutes,
      prepTimeMinutes,
      ingredients: [...ingredients],
    };

    res.status(201).json({ data: await service.save(newRecipe) });
  } catch (error) {
    next(error);
  }
};

// Get a single recipe with a given id
const getRecipe = async (req, res, next) => {
  try {
    res.json({ data: res.locals.recipe });
  } catch (error) {
    next(error);
  }
};

// Update a recipe
const updateRecipe = async (req, res, next) => {
  try {
    const {
      name,
      healthLabels,
      cookTimeMinutes,
      prepTimeMinutes,
      ingredients,
    } = req.body;

    const updated = await service.update(req.params.id, {
      name,
      healthLabels: [...healthLabels],
      cookTimeMinutes,
      prepTimeMinutes,
      ingredients: [...ingredients],
    });

    res.json({ data: updated });
  } catch (error) {
    next(error);
  }
};

// Remove a recipe
const deleteRecipe = async (req, res, next) => {
  try {
    await service.remove(req.params.id);
    res.statusCode(204);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllRecipes,
  saveRecipe,
  getRecipe: [recipeExist, getRecipe],
  updateRecipe: [recipeExist, updateRecipe],
  deleteRecipe: [recipeExist, deleteRecipe],
};
