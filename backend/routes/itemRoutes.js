const express = require('express');
const { getAllItems, getItemById, createItem, updateItem, deleteItem, getItemImages } = require('../controllers/itemController.js');
const validateObjectId = require("../middleware/validateObjectId.js");
const requireAuth = require('../middleware/requireAuth.js');
const multer = require('multer');
const upload = multer({ storage: multer.memoryStorage() });

const router = express.Router();

// GET ALL ITEMS (GET /api/items)
router.get('/', getAllItems);

// POST /api/items
router.post('/', requireAuth, upload.array('images', 5), createItem);

// GET /api/items/:itemId
router.get('/:itemId', validateObjectId('itemId'), getItemById);

// GET ITEM IMAGES (GET /api/items/:item/:id/image/:index)
router.get('/:itemId/image/:index', getItemImages);

// EDIT ITEM (PATCH /api/items/:itemId)
router.patch('/:itemId', requireAuth, validateObjectId('itemId'), upload.array('images', 5), updateItem);

// DELETE ITEM (DELETE /api/items/:itemId)
router.delete('/:itemId', requireAuth, validateObjectId('itemId'), deleteItem);


module.exports = router;