const express = require('express');
const auth = require('../middleware/auth');

const router = express.Router();

const {
  getAllRecipes,
  saveRecipe,
  getRecipe,
  updateRecipe,
  deleteRecipe,
} = require('../controllers/recipesControllers');

// Route `GET` and `POST` HTTP requests for `/`
router.route('/').get(getAllRecipes).post(auth.authenticate(), saveRecipe);
//router.route('/').get(getAllRecipes).post(auth.authenticate(), saveRecipe);

// Route `GET`, `PUT` and `DELETE` HTTP requests for `/api/v1/recipes/:id`
router.route('/:id').get(getRecipe).put(updateRecipe).delete(deleteRecipe);

module.exports = router;
