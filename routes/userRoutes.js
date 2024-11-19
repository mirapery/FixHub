import express from "express";
import { getAllUsers, createUser, getUserById, updateUser, deleteUser } from "../controllers/userController";
import validateUserId from "../middleware/validateUserId";

const app = express();

const router = express.Router();

// GET /api/users
router.get('/users', getAllUsers);

// POST /api/users
router.post('/users', createUser);

// GET /api/users/:userId
router.get('/users/:userId', validateUserId, getUserById);

// PUT /api/users/:userId
router.put('/users/:userId', validateUserId, updateUser);

// DELETE /api/users/:userId
router.delete('/users/:userId', validateUserId, deleteUser);

export default router;
