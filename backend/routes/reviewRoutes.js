const express = require('express');
const { 
  getAllReviews, 
  getReviewById, 
  createReview, 
  updateReview, 
  deleteReview 
} = require('../controllers/reviewController.js');
const validateObjectId = require("../middleware/validateObjectId.js");
const requireAuth = require('../middleware/requireAuth.js');

const router = express.Router();

/**
 * @swagger
 * /api/reviews:
 *   get:
 *     summary: Retrieve a list of reviews
 *     responses:
 *       200:
 *         description: A list of reviews
 */
router.get('/', getAllReviews);

/**
 * @swagger
 * /api/reviews/{reviewId}:
 *   get:
 *     summary: Get a review by ID
 *     parameters:
 *       - name: reviewId
 *         in: path
 *         required: true
 *         description: The ID of the review to retrieve
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: A review object
 *       404:
 *         description: Review not found
 */
router.get('/:reviewId', validateObjectId('reviewId'), getReviewById);

/**
 * @swagger
 * /api/reviews:
 *   post:
 *     summary: Create a new review
 *     responses:
 *       201:
 *         description: Review created successfully
 */
router.post('/', requireAuth, createReview);

/**
 * @swagger
 * /api/reviews/{reviewId}:
 *   patch:
 *     summary: Edit a review
 *     parameters:
 *       - name: reviewId
 *         in: path
 *         required: true
 *         description: The ID of the review to edit
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Review updated successfully
 *       404:
 *         description: Review not found
 */
router.patch('/:reviewId', requireAuth, validateObjectId('reviewId'), updateReview);

/**
 * @swagger
 * /api/reviews/{reviewId}:
 *   delete:
 *     summary: Delete a review
 *     parameters:
 *       - name: reviewId
 *         in: path
 *         required: true
 *         description: The ID of the review to delete
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Review deleted successfully
 *       404:
 *         description: Review not found
 */
router.delete('/:reviewId', requireAuth, validateObjectId('reviewId'), deleteReview);

module.exports = router;
