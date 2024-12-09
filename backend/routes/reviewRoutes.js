const express = require('express');
const { getAllReviews, getReviewById, createReview, updateReview, deleteReview} = require('../controllers/reviewController.js');
const validateObjectId = require("../middleware/validateObjectId.js");
const requireAuth = require('../middleware/requireAuth.js');

const router = express.Router();

// GET ALL REVIEWS (GET /api/reviews)
router.get('/', getAllReviews);

// GET ONE REVIEW (GET /api/reviews/:reviewId)
router.get('/:reviewId', validateObjectId('reviewId'), getReviewById);

// CREATE REVIEW (POST /api/reviews)
router.post('/', requireAuth, createReview);

// EDIT REVIEW (PATCH /api/reviews/:reviewId)
router.patch('/:reviewId', requireAuth, validateObjectId('reviewId'), updateReview);

// DELTE REVIEW (DELETE /api/reviews/:reviewId)
router.delete('/:reviewId', requireAuth, validateObjectId('reviewId'), deleteReview);

module.exports =  router;