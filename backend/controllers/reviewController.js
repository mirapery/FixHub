const Review = require("../models/reviewModel.js");
const handleError = require("../middleware/handleError.js");

// GET /reviews
const getAllReviews = async (req, res) => {
    try {
        const reviews = await Review.find({}).sort({ createdAt: -1 });
        res.status(200).json(reviews);
    } catch (error) {
        handleError(res, error, "An error occurred while fetching reviews.");
    }
};

// POST /reviews
const createReview = async (req, res) => {
    try {
        const newReview = await Review.create(req.body);
        res.status(201).json(newReview);
    } catch (error) {
        console.error(error);
        handleError(res, error, "Failed to create review.", 400);
    }
};

// GET /reviews/:reviewId
const getReviewById = async (req, res) => {
    const { reviewId } = req.params;
    try {
        const review = await Review.findById(reviewId);
        if (review) {
            res.status(200).json(review);
        } else {
            res.status(404).json({ message: "Review not found." });
        }
    } catch (error) {
        handleError(res, error, "An error occurred while retrieving review.");
    }
};

// PUT /reviews/:reviewId
const updateReview = async (req, res) => {
    const { reviewId } = req.params;
    try {
        const updatedReview = await Review.findOneAndUpdate(
            { _id: reviewId },
            { ...req.body },
            { new: true }
        );
        if (updatedReview) {
            res.status(200).json(updatedReview);
        } else {
            res.status(404).json({ message: "Review not found." });
        }
    } catch (error) {
        handleError(res, error, "An error occured while updating review.");
    }
};

// DELETE /reviews/:reviewId
const deleteReview = async (req, res) => {
    const { reviewId } = req.params;
    try {
        const deletedReview = await Review.findOneAndDelete({ _id: reviewId });
        if (deletedReview) {
            res.status(200).send({ message: "Review deleted successfully" });
        } else {
            res.status(404).json({ message: "Review not found." });
        }
    } catch (error) {
        handleError(res, error, "An error occurred while deleting review.");
    }
};

module.exports = {
  getAllReviews,
  getReviewById,
  createReview,
  updateReview,
  deleteReview,
};