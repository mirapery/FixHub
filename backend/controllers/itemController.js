const Item = require("../models/itemModel.js");
const handleError = require("../middleware/handleError.js");

// GET /items
const getAllItems = async (req, res) => {
    try {
        const items = await Item.find({}).sort({ createdAt: -1 });
        res.status(200).json(items);
    } catch (error) {
        handleError(res, error, "An error occurred while fetching items.");
    }
};

// POST /items
const createItem = async (req, res) => {
    try {
        const newItem = await Item.create(req.body);
        res.status(201).json(newItem);
    } catch (error) {
        console.error(error);
        handleError(res, error, "Failed to create item.", 400);
    }
};

// GET /items/:itemId
const getItemById = async (req, res) => {
    const { itemId } = req.params;
    try {
        const item = await Item.findById(itemId);
        if (item) {
            res.status(200).json(item);
        } else {
            res.status(404).json({ message: "Item not found." });
        }
    } catch (error) {
        handleError(res, error, "An error occurred while retrieving item.");
    }
};

// PUT /items/:itemId
const updateItem = async (req, res) => {
    const { itemId } = req.params;
    try {
        const updatedItem = await Item.findOneAndUpdate(
            { _id: itemId },
            { ...req.body },
            { new: true }
        );
        if (updatedItem) {
            res.status(200).json(updatedItem);
        } else {
            res.status(404).json({ message: "Item not found." });
        }
    } catch (error) {
        handleError(res, error, "An error occured while updating item.");
    }
};

// DELETE /items/:itemId
const deleteItem = async (req, res) => {
    const { itemId } = req.params;
    try {
        const deletedItem = await Item.findOneAndDelete({ _id: itemId });
        if (deletedItem) {
            res.status(200).send({ message: "Item deleted successfully" });
        } else {
            res.status(404).json({ message: "Item not found." });
        }
    } catch (error) {
        handleError(res, error, "An error occurred while deleting item.");
    }
};

module.exports = { getAllItems, getItemById, createItem, updateItem, deleteItem };