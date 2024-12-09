const express = require('express');
const { getAllItems, getItemById, createItem, updateItem, deleteItem } = require('../controllers/itemController.js');
const validateObjectId = require("../middleware/validateObjectId.js");

const router = express.Router();

// GET /api/items
router.get('/', getAllItems);

// POST /api/items
router.post('/', createItem);

// GET /api/items/:itemId
router.get('/:itemId', validateObjectId('itemId'), getItemById);

// PATCH /api/items/:itemId
router.patch('/:itemId', validateObjectId('itemId'), updateItem);

// DELETE /api/items/:itemId
router.delete('/:itemId', validateObjectId('itemId'), deleteItem);

module.exports = router;