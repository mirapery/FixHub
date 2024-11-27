import mongoose from "mongoose";

const validateUserId = (req, res, next) => {
    const { userId } = req.params;
    if (!mongoose.Types.ObjectId.isValid(userId)) {
        return res.status(400).json({ message: "Invalid user ID." });
    }
    next();
};

export default validateUserId;