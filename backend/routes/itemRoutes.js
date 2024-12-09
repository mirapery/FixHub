const express = require('express');
const { getAllItems, getItemById, createItem, updateItem, deleteItem } = require('../controllers/itemController.js');
const validateObjectId = require("../middleware/validateObjectId.js");
const upload = require('../middleware/upload.js');

const router = express.Router();

// GET /api/items
router.get('/', getAllItems);

// POST /api/items
router.post('/', upload.array('images', 5), createItem);

// GET /api/items/:itemId
router.get('/:itemId', validateObjectId('itemId'), getItemById);

// PATCH /api/items/:itemId
router.patch('/:itemId', validateObjectId('itemId'), updateItem);

// DELETE /api/items/:itemId
router.delete('/:itemId', validateObjectId('itemId'), deleteItem);

router.get("/files/:filename", (req, res) => {
    const { filename } = req.params;

    gfs.files.findOne({ filename }, (err, file) => {
        if (!file || file.length === 0) {
            return res.status(404).json({ message: "File not found" });
        }

        if (file.contentType === "image/jpeg" || file.contentType === "image/png" || file.contentType === "image/jpg") {
            const readStream = gfs.createReadStream(file.filename);
            readStream.pipe(res);
        } else {
            res.status(404).json({ message: "Not a valid image file" });
        }
    });
});

module.exports = router;