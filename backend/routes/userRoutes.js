const express = require("express");
const { getAllUsers, createUser, getUserByUserName, getUserById, updateUser, deleteUser, loginUser, signupUser } = require("../controllers/userController.js");
const validateObjectId = require ("../middleware/validateObjectId.js");

const router = express.Router();

// GET /api/users
router.get('/', getAllUsers);

// POST /api/users
router.post('/', createUser);

// GET /api/users/:userId
router.get('/userId/:userId', getUserById);

// GET /api/users/:userName
router.get('/:userName', getUserByUserName);

// PATCH /api/users/:userId
router.patch('/:userId', validateObjectId('userId'), updateUser);

// DELETE /api/users/:userId
router.delete('/:userId', validateObjectId('userId'), deleteUser);

// POST /api/users/signup
router.post('/signup', signupUser);

// POST /api/users/login
router.post('/login', loginUser);

module.exports = router;