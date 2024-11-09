const express = require('express');
const router = express.Router();
const {
  getAllItems,
  getItemById,
  createItem,
  updateItem,
  deleteItem,
} = require('../controllers/itemControllers');

// esimerkki
const {
  middleware1,
  middleware2,
} = require('../middleware/customMiddlewares');

// esimerkki, korvaa jollain oikealla
router.use(middleware1);

// GET /items
router.get('/', getAllItems);

// POST /items
router.post('/', createItem);

// GET /items/:itemId
router.get('/:itemId', middleware2, getItemById);

// PUT /items/:itemId
router.put('/:itemId', updateItem);

// DELETE /items/:itemId
router.delete('/:itemId', deleteItem);

module.exports = router;
