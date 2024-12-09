const express = require('express');
const { getAllItems, getItemById, createItem, updateItem, deleteItem } = require('../controllers/itemController.js');
const validateObjectId = require("../middleware/validateObjectId.js");
const requireAuth = require('../middleware/requireAuth.js');

const router = express.Router();

// GET ALL ITEMS (GET /api/items)
router.get('/', getAllItems);

// GET ONE ITEM (GET /api/items/:itemId)
router.get('/:itemId', validateObjectId('itemId'), getItemById);

// CREATE ITEM (POST /api/items)
router.post('/', requireAuth, createItem);

// EDIT ITEM (PATCH /api/items/:itemId)
router.patch('/:itemId', requireAuth, validateObjectId('itemId'), updateItem);

// DELETE ITEM (DELETE /api/items/:itemId)
router.delete('/:itemId', requireAuth, validateObjectId('itemId'), deleteItem);

module.exports = router;