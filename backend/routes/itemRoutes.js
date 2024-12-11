const express = require('express');
const { 
  getAllItems, 
  getItemById, 
  createItem, 
  updateItem, 
  deleteItem, 
  getItemImages 
} = require('../controllers/itemController.js');
const validateObjectId = require("../middleware/validateObjectId.js");
const requireAuth = require('../middleware/requireAuth.js');
const multer = require('multer');
const upload = multer({ storage: multer.memoryStorage() });

const router = express.Router();

/**
 * @swagger
 * /api/items:
 *   get:
 *     summary: Retrieve a list of items
 *     responses:
 *       200:
 *         description: A list of items
 */
router.get('/', getAllItems);

/**
 * @swagger
 * /api/items:
 *   post:
 *     summary: Create a new item
 *     parameters:
 *       - name: images
 *         in: formData
 *         type: array
 *         items:
 *           type: file
 *         description: The images of the item
 *         required: true
 *     responses:
 *       201:
 *         description: Item created successfully
 *       400:
 *         description: Bad request
 */
router.post('/', requireAuth, upload.array('images', 5), createItem);

/**
 * @swagger
 * /api/items/{itemId}:
 *   get:
 *     summary: Get an item by ID
 *     parameters:
 *       - name: itemId
 *         in: path
 *         required: true
 *         description: The ID of the item to retrieve
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: A single item
 *       404:
 *         description: Item not found
 */
router.get('/:itemId', validateObjectId('itemId'), getItemById);

/**
 * @swagger
 * /api/items/{itemId}/image/{index}:
 *   get:
 *     summary: Get an image of the item by index
 *     parameters:
 *       - name: itemId
 *         in: path
 *         required: true
 *         description: The ID of the item
 *         schema:
 *           type: string
 *       - name: index
 *         in: path
 *         required: true
 *         description: The index of the image in the images array
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: A base64 image of the item
 *       404:
 *         description: Image not found
 */
router.get('/:itemId/image/:index', getItemImages);

/**
 * @swagger
 * /api/items/{itemId}:
 *   patch:
 *     summary: Update an item
 *     parameters:
 *       - name: itemId
 *         in: path
 *         required: true
 *         description: The ID of the item to update
 *         schema:
 *           type: string
 *       - name: images
 *         in: formData
 *         type: array
 *         items:
 *           type: file
 *         description: The images of the item
 *     responses:
 *       200:
 *         description: Item updated successfully
 *       404:
 *         description: Item not found
 */
router.patch('/:itemId', requireAuth, validateObjectId('itemId'), upload.array('images', 5), updateItem);

/**
 * @swagger
 * /api/items/{itemId}:
 *   delete:
 *     summary: Delete an item
 *     parameters:
 *       - name: itemId
 *         in: path
 *         required: true
 *         description: The ID of the item to delete
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Item deleted successfully
 *       404:
 *         description: Item not found
 */
router.delete('/:itemId', requireAuth, validateObjectId('itemId'), deleteItem);

module.exports = router;
