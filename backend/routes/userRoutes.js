const express = require("express");
const { getAllUsers, createUser, getUserByUserName, getUserById, updateUser, deleteUser, loginUser, signupUser, getUserImage } = require("../controllers/userController.js");
const validateObjectId = require("../middleware/validateObjectId.js");
const requireAuth = require("../middleware/requireAuth.js");
const multer = require("multer");
const upload = multer({ storage: multer.memoryStorage() });

const router = express.Router();

// GET ALL USERS (GET /api/users)
router.get('/', getAllUsers);

// GET ONE USER BY ID (GET /api/users/userId/:userId)
router.get('/userId/:userId', getUserById);

// GET ONE USER BY USERNAME (GET /api/users/:userName)
router.get('/:userName', getUserByUserName);

// CREATE USER (POST /api/users)
router.post('/', upload.single('image'), createUser);

// EDIT USER (PATCH /api/users/:userId)
router.patch('/:userId', requireAuth, validateObjectId('userId'), upload.single('image'), updateUser);

// DELETE USER (DELETE /api/users/:userId)
router.delete('/:userId', requireAuth, validateObjectId('userId'), deleteUser);

// SIGNUP (POST /api/users/signup)
router.post('/signup', signupUser);

// LOGIN (POST /api/users/login)
router.post('/login', loginUser);

router.get('/:userId/image', getUserImage);

module.exports = router;
