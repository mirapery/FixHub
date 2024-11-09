// The data model for user is as follows
// {
//     "name": "Matti Seppänen",
//     "username": "mattis",
//     "email": "matti.gmail.com"
//     "password": "M@45mtg$",
// }

let userArray = [];
let nextId = 1;

function getAll() {
  return userArray;
}

function addOne(userData) {
  // Check if any parameter is empty or undefined
  const { name, username, email, password } = userData;
  if (!name || !username || !email || !password) {
    return false;
  }

  const newUser = {
    id: nextId++,
    ...userData,
  };

  userArray.push(newUser);
  return newUser;
}

function findById(id) {
  const numericId = Number(id);
  const user = userArray.find((user) => user.id === numericId);
  return user || false;
}

function updateOneById(id, updatedData) {
  const user = findById(id);
  if (user) {
    Object.assign(user, updatedData); // Update properties using Object.assign
    return user;
  }
  return false;
}

function deleteOneById(id) {
  const user = findById(id);
  if (user) {
    const initialLength = userArray.length;
    userArray = userArray.filter((user) => user.id !== Number(id));
    return userArray.length < initialLength; // Indicate successful deletion if the length has decreased
  }
  return false; // Return false if the item was not found
}

if (require.main === module) {
  // Add user
  let result = addOne({
    name: "John Doe",
    username: "johndoe",
    email: "user@email.com",
    password: "password123",
  });
  console.log("result", result);
  console.assert(typeof result === 'object', 'Result should be an object');

  // Get all users
  const allUsers = getAll();
  console.log("getAll called:", allUsers);
  console.assert(Array.isArray(allUsers), 'getAll should return an array');
  console.assert(allUsers.length === 2, 'getAll should return an array of length 1');

  // Find user by ID
  const user = findById(1);
  console.log("findById called:", user);
  console.assert(typeof user === 'object', 'findById should return an object');

  // Update user by ID
  const updatedUser = updateOneById(1, { name: "Jane", username: "janedoe" });
  console.log("updateOneById called:", updatedUser);
  console.assert(typeof updatedUser === 'object', 'updateOneById should return an object');

  // Verify update
  const updatedUserCheck = findById(1);
  console.log("findById called after item updated:", updatedUserCheck);
  console.assert(updatedUserCheck.name === 'Jane' && updatedUserCheck.username === "janodoe", 'User should be updated');

  // Delete user by ID
  const deletedUser = deleteOneById(1);
  console.log("deleteOneById called:", deletedUser);
  console.assert(deletedUser === true, 'deleteOneById should return true');

  // Verify deletion
  const deletedUserCheck = findById(1);
  console.log("findById called after item deleted:", deletedUserCheck);
  console.assert(deletedUserCheck === false, 'User should be deleted');
}

const User = {
  getAll,
  addOne,
  findById,
  updateOneById,
  deleteOneById,
};

module.exports = User;
