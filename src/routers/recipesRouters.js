const express = require('express');

const router = express.Router();

// add route handlers here
const { getAll, save } = require('../controllers/recipesControllers');

router.get('/', getAll);
router.post('/', save);

module.exports = router;
