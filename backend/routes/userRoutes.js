const express = require("express");
const { getAllUsers, createUser, getUserById, updateUser, deleteUser } = require("../controllers/userController.js");
const validateObjectId = require ("../middleware/validateObjectId.js");

const router = express.Router();

// GET /api/users
router.get('/', getAllUsers);

// POST /api/users
router.post('/', createUser);

// GET /api/users/:userId
router.get('/:userId', validateObjectId('userId'), getUserById);

// PATCH /api/users/:userId
router.patch('/:userId', validateObjectId('userId'), updateUser);

// DELETE /api/users/:userId
router.delete('/:userId', validateObjectId('userId'), deleteUser);

module.exports = router;
