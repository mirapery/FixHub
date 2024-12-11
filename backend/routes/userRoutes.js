const express = require("express");
const { 
  getAllUsers, 
  createUser, 
  getUserByUserName, 
  getUserById, 
  updateUser, 
  deleteUser, 
  loginUser, 
  signupUser, 
  getUserImage 
} = require("../controllers/userController.js");
const validateObjectId = require("../middleware/validateObjectId.js");
const requireAuth = require("../middleware/requireAuth.js");
const multer = require("multer");

const upload = multer({ storage: multer.memoryStorage() });
const router = express.Router();

/**
 * @swagger
 * /api/users:
 *   get:
 *     summary: Retrieve a list of users
 *     responses:
 *       200:
 *         description: A list of users
 */
router.get('/', getAllUsers);

/**
 * @swagger
 * /api/users/{userId}:
 *   get:
 *     summary: Get a user by ID
 *     parameters:
 *       - name: userId
 *         in: path
 *         required: true
 *         description: The ID of the user to retrieve
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: A user object
 *       404:
 *         description: User not found
 */
router.get('/userId/:userId', getUserById);

/**
 * @swagger
 * /api/users/{userName}:
 *   get:
 *     summary: Get a user by username
 *     parameters:
 *       - name: userName
 *         in: path
 *         required: true
 *         description: The username of the user to retrieve
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: A user object
 *       404:
 *         description: User not found
 */
router.get('/:userName', getUserByUserName);

/**
 * @swagger
 * /api/users/{userId}:
 *   patch:
 *     summary: Edit a user
 *     parameters:
 *       - name: userId
 *         in: path
 *         required: true
 *         description: The ID of the user to edit
 *         schema:
 *           type: string
 *       - name: image
 *         in: formData
 *         required: false
 *         description: The user's profile image
 *         type: file
 *     responses:
 *       200:
 *         description: User updated successfully
 *       404:
 *         description: User not found
 */
router.patch('/:userId', requireAuth, validateObjectId('userId'), upload.single('image'), updateUser);

/**
 * @swagger
 * /api/users/{userId}:
 *   delete:
 *     summary: Delete a user
 *     parameters:
 *       - name: userId
 *         in: path
 *         required: true
 *         description: The ID of the user to delete
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: User deleted successfully
 *       404:
 *         description: User not found
 */
router.delete('/:userId', requireAuth, validateObjectId('userId'), deleteUser);

/**
 * @swagger
 * /api/users/signup:
 *   post:
 *     summary: Sign up a new user
 *     parameters:
 *       - name: image
 *         in: formData
 *         required: false
 *         description: The user's profile image
 *         type: file
 *     responses:
 *       201:
 *         description: User created successfully
 *       400:
 *         description: Bad request
 */
router.post('/signup', upload.single('images'), signupUser);

/**
 * @swagger
 * /api/users/login:
 *   post:
 *     summary: Log in a user
 *     responses:
 *       200:
 *         description: User logged in successfully
 *       401:
 *         description: Invalid credentials
 */
router.post('/login', loginUser);

/**
 * @swagger
 * /api/users/{userId}/image:
 *   get:
 *     summary: Get the image of a user
 *     parameters:
 *       - name: userId
 *         in: path
 *         required: true
 *         description: The ID of the user to retrieve the image of
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: User image
 *       404:
 *         description: User not found
 */
router.get('/:userId/image', getUserImage);

module.exports = router;
