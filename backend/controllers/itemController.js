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
      const { userId, fixerId, name, tags, description, category, location, priceRange, dateOfPublish, isFixed, interested } = req.body;
  
      // Muunna Base64:ksi ja lisää oikea MIME-tyyppi
      const imageBase64Array = req.files.map(file => {
        const mimeType = file.mimetype;
        const base64 = file.buffer.toString('base64');
        return `data:${mimeType};base64,${base64}`;
      });
      const locationObject = JSON.parse(location);
      const tagsObject = JSON.parse(tags);
      const priceRangeObject = JSON.parse(priceRange);

      const item = new Item({
        userId,
        fixerId,
        name,
        tags: tagsObject,
        description,
        category,
        location: locationObject,
        priceRange: priceRangeObject,
        dateOfPublish: dateOfPublish || new Date(),
        isFixed,
        interested,
        images: imageBase64Array,
      });
      
      await item.save();
      res.status(201).json({ message: 'Item saved successfully', item });
    } catch (error) {
      console.error('Error saving item:', error);
      res.status(500).json({ error: 'Failed to save item' });
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

// PATCH /items/:itemId
const updateItem = async (req, res) => {
    const { itemId } = req.params;
    try {
        const updatedFields = { ...req.body };

        // Hae olemassa oleva item tietokannasta
        const existingItem = await Item.findById(itemId);
        if (!existingItem) {
            return res.status(404).json({ message: "Item not found." });
        }

        // Jos kuvia ladattiin, käsitellään ne ja yhdistetään vanhoihin kuviin
        if (req.files && req.files.length > 0) {
            const imageBase64Array = req.files.map(file => {
                const mimeType = file.mimetype;
                const base64 = file.buffer.toString('base64');
                return `data:${mimeType};base64,${base64}`;
            });
            updatedFields.images = [...existingItem.images, ...imageBase64Array];
        } else {
            // Säilytä vanhat kuvat, jos uusia ei ladattu
            updatedFields.images = existingItem.images;
        }

        // Muunnetaan tarvittaessa JSON-tyyppiset kentät
        if (req.body.location) updatedFields.location = JSON.parse(req.body.location);
        if (req.body.tags) updatedFields.tags = JSON.parse(req.body.tags);
        if (req.body.priceRange) updatedFields.priceRange = JSON.parse(req.body.priceRange);

        // Päivitetään kohde tietokantaan
        const updatedItem = await Item.findOneAndUpdate(
            { _id: itemId },
            updatedFields,
            { new: true } // Palautetaan päivitetty kohde
        );

        if (updatedItem) {
            res.status(200).json({ message: 'Item updated successfully', updatedItem });
        } else {
            res.status(404).json({ message: "Item not found." });
        }
    } catch (error) {
        console.error('Error updating item:', error);
       
    }};
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

const getItemImages = async (req, res) => {
    try {
      // Hae item tietokannasta
      const item = await Item.findById(req.params.itemId);
      if (!item || !Array.isArray(item.images) || !item.images[req.params.index]) {
        return res.status(404).json({ error: 'Image not found' });
      }
  
      // Palauta Base64-kuva suoraan
      const base64Image = item.images[req.params.index];
      const mimeType = base64Image.match(/^data:(image\/\w+);base64,/)[1]; // Esim. "image/png"
  
      const imageBuffer = Buffer.from(
        base64Image.replace(/^data:image\/\w+;base64,/, ''),
        'base64'
      );
  
      res.writeHead(200, {
        'Content-Type': mimeType,
        'Content-Length': imageBuffer.length,
      });
      res.end(imageBuffer);
    } catch (error) {
      console.error('Error fetching image:', error);
      res.status(500).json({ error: 'Failed to fetch image' });
    }
  };
  
  

module.exports = { getAllItems, getItemById, createItem, updateItem, deleteItem, getItemImages };