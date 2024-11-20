import User from "../models/userModel.js";
import handleError from "../middleware/handleError.js";

// GET /users
const getAllUsers = async (req, res) => {
    try {
        const users = await User.find({}).sort({ createdAt: -1 });
        res.status(200).json(users);
    } catch (error) {
        handleError(res, error, "An error occurred while fetching users.");
    }
};

// POST /users
const createUser = async (req, res) => {
    try {
        const newUser = await User.create(req.body);
        res.status(201).json(newUser);
    } catch (error) {
        console.error(error);
        handleError(res, error, "Failed to create user.", 400);
    }
};

// GET /users/:userId
const getUserById = async (req, res) => {
    const { userId } = req.params;
    try {
        const user = await User.findById(userId);
        if (user) {
            res.status(200).json(user);
        } else {
            res.status(404).json({ message: "User not found." });
        }
    } catch (error) {
        handleError(res, error, "An error occurred while retrieving user.");
    }
};

// PUT /users/:userId
const updateUser = async (req, res) => {
    const { userId } = req.params;
    try {
        const updatedUser = await User.findOneAndUpdate(
            { _id: userId },
            { ...req.body },
            { new: true }
        );
        if (updatedUser) {
            res.status(200).json(updatedUser);
        } else {
            res.status(404).json({ message: "User not found." });
        }
    } catch (error) {
        handleError(res, error, "An error occured while updating user.");
    }
};

// DELETE /users/:userId
const deleteUser = async (req, res) => {
    const { userId } = req.params;
    try {
        const deletedUser = await User.findOneAndDelete({ _id: userId });
        if (deletedUser) {
            res.status(204).send({message: "User deleted successfully."});
        } else {
            res.status(404).json({ message: "User not found." });
        }
    } catch (error) {
        handleError(res, error, "An error occurred while deleting user.");
    }
};

export { getAllUsers, getUserById, createUser, updateUser, deleteUser };
