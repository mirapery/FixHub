import express from "express";
import { getAllUsers, createUser, getUserById, updateUser, deleteUser } from "../controllers/userController.js";
import validateUserId from "../middleware/validateUserId.js";

const router = express.Router();

// GET /api/users
router.get('/', getAllUsers);

// POST /api/users
router.post('/', createUser);

// GET /api/users/:userId
router.get('/:userId', validateUserId, getUserById);

// PUT /api/users/:userId
router.put('/:userId', validateUserId, updateUser);

// DELETE /api/users/:userId
router.delete('/:userId', validateUserId, deleteUser);

export default router;
