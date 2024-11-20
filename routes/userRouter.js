const express = require('express');
const router = express.Router();
const {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
} = require('../controllers/userControllers.js');

// GET /users
router.get('/users', getAllUsers);

// POST /users
router.post('/users', createUser);

// GET /users/:userId
router.get('/users/:userId', getUserById);

// PUT /users/:userId
router.put('/users/:userId', updateUser);

// DELETE /users/:userId
router.delete('/users/:userId', deleteUser);

module.exports = router;
