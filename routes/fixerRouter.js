const express = require('express');
const router = express.Router();
const {
  getAllFixers,
  getFixerById,
  createFixer,
  updateFixer,
  deleteFixer,
} = require('../controllers/fixerControllers');

// GET /fixers
router.get('/', getAllFixers);

// POST /fixers
router.post('/', createFixer);

// GET /fixers/:fixerId
router.get('/:fixerId', getFixerById);

// PUT /fixers/:fixerId
router.put('/:fixerId', updateFixer);

// DELETE /fixers/:fixerId
router.delete('/:fixerId', deleteFixer);

module.exports = router;
