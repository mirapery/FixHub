const express = require("express");
const { getAllUsers, createUser, getUserById, updateUser, deleteUser } = require("../controllers/userController.js");
const validateUserId = require ("../middleware/validateUserId.js");

const router = express.Router();

// GET /api/users
router.get('/', getAllUsers);

// POST /api/users
router.post('/', createUser);

// GET /api/users/:userId
router.get('/:userId', validateUserId, getUserById);

// PATCH /api/users/:userId
router.patch('/:userId', validateUserId, updateUser);

// DELETE /api/users/:userId
router.delete('/:userId', validateUserId, deleteUser);

module.exports = router;
