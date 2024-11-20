const Item = require("../itemLib.js");

// GET /items
const getAllItems = (req, res) => {
    const items = Item.getAll();
    res.json(items);
};

// POST /items
const createItem = (req, res) => {
    console.log("body", req.body)
    
    const newItem = Item.addOne({ ...req.body });

    if (newItem) {
        res.json(newItem);
    } else {
        res.status(500).json({ message: "Failed to create item" });
    }
};

// GET /items/:itemId
const getItemById = (req, res) => {
    const itemId = req.params.itemId;
    const item = Item.findById(itemId);

    if (item) {
        res.json(item);
    } else {
        res.status(404).json({ message: "Item not found" });
    }
};

// PUT /items/:itemId
const updateItem = (req, res) => {
    const itemId = req.params.itemId;
    const updatedItem = Item.updateOneById(itemId, { ...req.body });

    if (updatedItem) {
        res.json(updatedItem);
    } else {
        res.status(404).json({ message: "Item not found" });
    }
};

// DELETE /items/:itemId
const deleteItem = (req, res) => {
    const itemId = req.params.itemId;
    const isDeleted = Item.deleteOneById(itemId);

    if (isDeleted) {
        res.json({ message: "Item deleted successfully" });
    } else {
        res.status(404).json({ message: "Item not found" });
    }
};

module.exports = {
  getAllItems,
  getItemById,
  createItem,
  updateItem,
  deleteItem,
};