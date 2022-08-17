const express = require('express');

const router = express.Router();

// add route handlers here
const { getAll } = require('../controllers/recipesControllers');

router.get('/', getAll);

module.exports = router;
