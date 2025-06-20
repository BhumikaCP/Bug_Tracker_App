const express = require('express');
const router = express.Router();
const bugController = require('../controllers/bugController');

// POST /bugs - Create a bug
router.post('/', bugController.createBug);

// GET /bugs - Get all bugs
router.get('/', bugController.getAllBugs);

// GET /bugs/:id - Get a specific bug
router.get('/:id', bugController.getBugById);

// PUT /bugs/:id - Update a bug
router.put('/:id', bugController.updateBug);

// DELETE /bugs/:id - Delete a bug
router.delete('/:id', bugController.deleteBug);

module.exports = router;
