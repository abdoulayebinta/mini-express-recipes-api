const service = require('../services/recipesServices');

const getAll = (req, res, next) => {
  try {
    res.json({ data: service.getAll });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAll,
};
