const User = require("../models/userModel.js");
const Item = require('../models/itemModel.js');
const jwt = require('jsonwebtoken');
const handleError = require("../middleware/handleError.js");


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
        console.log("serach for user with id: ", userId);
        const user = await User.findOne({_id: userId});
        if (user) {
            res.status(200).json(user);
        } else {
            res.status(404).json({ message: "User not found." });
        }
    } catch (error) {
        handleError(res, error, "An error occurred while retrieving user.");
    }
};

// GET /users/:userName
const getUserByUserName = async (req, res) => {
    const { userName } = req.params;
    try {
        const user = await User.findOne({userName});
        if (user) {
            res.status(200).json(user);
        } else {
            res.status(404).json({ message: "User not found." });
        }
    } catch (error) {
        handleError(res, error, "An error occurred while retrieving user.");
    }
};

// PATCH /users/:userId
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
        if (!deletedUser) {
            return res.status(404).json({ message: "User not found." });
        }
        await Item.deleteMany({ userId });
        res.status(200).send({message: "User and associated items deleted successfully."});
    } catch (error) {
        handleError(res, error, "An error occurred while deleting user ans associated items.");
    }
};

// CREATE TOKEN
const createToken = (_id, userName, isFixer) => {
    return jwt.sign({_id, userName, isFixer}, process.env.JWT_SECRET, { expiresIn: '1d' })
}

// POST /users/login
const loginUser = async (req, res) => {
    const {userName, password} = req.body;

    try {
        const user = await User.login(userName, password);
        const token = createToken(user._id);
        res.status(200).json({user, token});
    } catch (error) {
        res.status(400).json({error: error.message});
    }
};

// POST /users/signup
const signupUser = async (req, res) => {
    const {userName, name, phone, email, password, image, location, isFixer} = req.body;

    try {
        const user = await User.signup(userName, name, phone, email, password, image, location, isFixer);
        const token = createToken(user._id);
        res.status(200).json({user, token});
    } catch (error) {
        res.status(400).json({error: error.message});
    }
};

module.exports = { getAllUsers, getUserByUserName, getUserById, createUser, updateUser, deleteUser, loginUser, signupUser };
