const express = require('express');
const { getAllItems, getItemById, createItem, updateItem, deleteItem } = require('../controllers/itemController.js');

const router = express.Router();

// GET /api/items
router.get('/', getAllItems);

// POST /api/items
router.post('/', createItem);

// GET /api/items/:itemId
router.get('/:itemId', getItemById);

// PUT /api/items/:itemId
router.put('/:itemId', updateItem);

// DELETE /api/items/:itemId
router.delete('/:itemId', deleteItem);

module.exports = router;