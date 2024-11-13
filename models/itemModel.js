// The data model for item is as follows
// {
//     "title": "tuoli",
//     "description": "on rikki",
//     "image": "/assets/main.jpeg"
// }

let itemArray = [];
let nextId = 1;

function getAll() {
  return itemArray;
}

function addOne(itemData) {
  const { title, description, image } = itemData;
  if (!title || !description || !image) {
    return false;
  }

  const newItem = {
    id: nextId++,
    ...itemData,
  };

  itemArray.push(newItem);
  return newItem;
}

function findById(id) {
  const numericId = Number(id);
  const item = itemArray.find((item) => item.id === numericId);
  return item || false;
}

function updateOneById(id, updatedData) {
  const item = findById(id);
  if (item) {
    Object.assign(item, updatedData);
    return item;
  }
  return false;
}

function deleteOneById(id) {
  const item = findById(id);
  if (item) {
    const initialLength = itemArray.length;
    itemArray = itemArray.filter((item) => item.id !== Number(id));
    return itemArray.length < initialLength;
  }
  return false;
}

if (require.main === module) {

  // Add item
  let result = addOne({
    "title": "tuoli",
    "description": "on rikki",
    "image": "/assets/main.jpeg"
  });
  console.log("result", result);
  console.assert(typeof result === 'object', 'Result should be an object');

  // Get all items
  const allItems = getAll();
  console.log("getAll called:", allItems);
  console.assert(Array.isArray(allItems), 'getAll should return an array');
  console.assert(allItems.length === 2, 'getAll should return an array of length 1');

  // Find item by ID
  const item = findById(1);
  console.log("findById called:", item);
  console.assert(typeof item === 'object', 'findById should return an object');

  // Update item by ID
  const updatedItem = updateOneById(1, { title: "table" });
  console.log("updateOneById called:", updatedItem);
  console.assert(typeof updatedItem === 'object', 'updateOneById should return an object');

  // Verify update
  const updatedItemCheck = findById(1);
  console.log("findById called after item updated:", updatedItemCheck);
  console.assert(updatedItemCheck.title === 'table', 'Item should be updated');

  // Delete item by ID
  const deletedItem = deleteOneById(1);
  console.log("deleteOneById called:", deletedItem);
  console.assert(deletedItem === true, 'deleteOneById should return true');

  // Verify deletion
  const deletedItemCheck = findById(1);
  console.log("findById called after item deleted:", deletedItemCheck);
  console.assert(deletedItemCheck === false, 'Item should be deleted');
}

const Item = {
  getAll,
  addOne,
  findById,
  updateOneById,
  deleteOneById,
};

module.exports = Item;
