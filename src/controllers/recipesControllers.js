const service = require('../services/recipesServices');

// Get all recipes controller
const getAll = async (req, res, next) => {
  try {
    res.json({ data: await service.getAll() });
  } catch (error) {
    next(error);
  }
};

// Save recipe controller
const save = async (req, res, next) => {
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
const get = async (req, res, next) => {
  try {
    const recipe = await service.get(req.params.id);

    if (recipe === undefined) {
      const err = new Error('Recipe not found');
      err.statusCode = 404;
      throw err;
    }

    res.json({ data: recipe });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAll,
  save,
};
