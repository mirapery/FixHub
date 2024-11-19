import express from 'express';
import { getAllFixers, getFixerById, createFixer, updateFixer, deleteFixer} from '../controllers/fixerControllers';

const router = express.Router();

// GET /api/fixers
router.get('/', getAllFixers);

// POST /api/fixers
router.post('/', createFixer);

// GET /api/fixers/:fixerId
router.get('/:fixerId', getFixerById);

// PUT /api/fixers/:fixerId
router.put('/:fixerId', updateFixer);

// DELETE /api/fixers/:fixerId
router.delete('/:fixerId', deleteFixer);

export default router;
