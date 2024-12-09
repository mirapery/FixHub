const express = require('express');
const { getAllReviews, getReviewById, createReview, updateReview, deleteReview} = require('../controllers/reviewController.js');
const validateObjectId = require("../middleware/validateObjectId.js");

const router = express.Router();

// GET /api/reviews
router.get('/', getAllReviews);

// POST /api/reviews
router.post('/', createReview);

// GET /api/reviews/:reviewId
router.get('/:reviewId', validateObjectId('reviewId'), getReviewById);

// PATCH /api/reviews/:reviewId
router.patch('/:reviewId', validateObjectId('reviewId'), updateReview);

// DELETE /api/reviews/:reviewId
router.delete('/:reviewId', validateObjectId('reviewId'), deleteReview);

module.exports =  router;