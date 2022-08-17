const express = require('express');

const router = express.Router();

const {
  getAll,
  save,
  get,
  update,
  remove,
} = require('../controllers/recipesControllers');

// route handlers
router.get('/', getAll);
router.post('/', save);
router.get('/:id', get);
router.put('/:id', update);
router.delete('/:id', remove);

module.exports = router;
