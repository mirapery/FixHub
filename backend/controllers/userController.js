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
        const { userName, name, phone, email, password, location, isFixer } = req.body;

        let image = null;
        if (req.file) {
            const mimeType = req.file.mimetype; // Esim. "image/png"
            const base64 = req.file.buffer.toString("base64");
            image = `data:${mimeType};base64,${base64}`;
        }

        const user = await User.signup(userName, name, phone, email, password, image, location, isFixer);

        res.status(201).json(user);
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
        const updatedFields = { ...req.body };

        if (req.file) {
            const mimeType = req.file.mimetype;
            const base64 = req.file.buffer.toString("base64");
            updatedFields.image = `data:${mimeType};base64,${base64}`;
        }

        const updatedUser = await User.findOneAndUpdate(
            { _id: userId },
            updatedFields,
            { new: true }
        );

        if (updatedUser) {
            res.status(200).json(updatedUser);
        } else {
            res.status(404).json({ message: "User not found." });
        }
    } catch (error) {
        handleError(res, error, "An error occurred while updating user.");
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

const getUserImage = async (req, res) => {
    try {
        const user = await User.findById(req.params.userId);
        if (!user || !user.image) {
            return res.status(404).json({ error: "Image not found" });
        }

        const base64Image = user.image;
        const mimeTypeMatch = base64Image.match(/^data:(image\/\w+);base64,/);

        if (!mimeTypeMatch) {
            return res.status(400).json({ error: "Invalid image format" });
        }

        const mimeType = mimeTypeMatch[1];
        const imageBuffer = Buffer.from(
            base64Image.replace(/^data:image\/\w+;base64,/, ""),
            "base64"
        );

        res.writeHead(200, {
            "Content-Type": mimeType,
            "Content-Length": imageBuffer.length,
        });
        res.end(imageBuffer);
    } catch (error) {
        console.error("Error fetching image:", error);
        res.status(500).json({ error: "Failed to fetch image" });
    }
};



module.exports = { getAllUsers, getUserByUserName, getUserById, createUser, updateUser, deleteUser, loginUser, signupUser, getUserImage };
