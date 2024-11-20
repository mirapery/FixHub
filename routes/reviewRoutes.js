import express from 'express';
import { getAllReviews, getReviewById, createReview, updateReview, deleteReview} from '../controllers/reviewController.js';

const router = express.Router();

// GET /api/reviews
router.get('/', getAllReviews);

// POST /api/reviews
router.post('/', createReview);

// GET /api/reviews/:reviewId
router.get('/:reviewId', getReviewById);

// PUT /api/reviews/:reviewId
router.put('/:reviewId', updateReview);

// DELETE /api/reviews/:reviewId
router.delete('/:reviewId', deleteReview);

export default router;
