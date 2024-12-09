const express = require("express");
const { getAllUsers, createUser, getUserByUserName, getUserById, updateUser, deleteUser, loginUser, signupUser } = require("../controllers/userController.js");
const validateObjectId = require ("../middleware/validateObjectId.js");
const requireAuth = require('../middleware/requireAuth.js');

const router = express.Router();

// GET ALL USERS (GET /api/users)
router.get('/', getAllUsers);

// GET ONE USER (GET /api/users/:userId)
router.get('/userId/:userId', getUserById);

// GET ONE USER (GET /api/users/:userName)
router.get('/:userName', getUserByUserName);

// CREATE USER (POST /api/users)
router.post('/', createUser);

// EDIT USER (PATCH /api/users/:userId)
router.patch('/:userId', requireAuth, validateObjectId('userId'), updateUser);

// DELETE USER (DELETE /api/users/:userId)
router.delete('/:userId', requireAuth, validateObjectId('userId'), deleteUser);

// SIGNUP (POST /api/users/signup)
router.post('/signup', signupUser);

// LOGIN (POST /api/users/login)
router.post('/login', loginUser);

module.exports = router;