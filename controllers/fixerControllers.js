const Fixer = require("../fixerLib");

// GET /fixers
const getAllFixers = (req, res) => {
    const fixers = Fixer.getAll();
    res.json(fixers);
};

// POST /fixers
const createFixer = (req, res) => {
    console.log("body", req.body)
    
    const newFixer = Fixer.addOne({ ...req.body });

    if (newFixer) {
        res.json(newFixer);
    } else {
        res.status(500).json({ message: "Failed to create fixer" });
    }
};

// GET /fixers/:fixerId
const getFixerById = (req, res) => {
    const fixerId = req.params.fixerId;
    const fixer = Fixer.findById(fixerId);

    if (fixer) {
        res.json(fixer);
    } else {
        res.status(404).json({ message: "Fixer not found" });
    }
};

// PUT /fixers/:fixerId
const updateFixer = (req, res) => {
    const fixerId = req.params.fixerId;
    const updatedFixer = Fixer.updateOneById(fixerId, { ...req.body });

    if (updatedFixer) {
        res.json(updatedFixer);
    } else {
        res.status(404).json({ message: "Fixer not found" });
    }
};

// DELETE /fixers/:fixerId
const deleteFixer = (req, res) => {
    const fixerId = req.params.fixerId;
    const isDeleted = Fixer.deleteOneById(fixerId);

    if (isDeleted) {
        res.json({ message: "Fixer deleted successfully" });
    } else {
        res.status(404).json({ message: "Fixer not found" });
    }
};

module.exports = {
  getAllFixers,
  getFixerById,
  createFixer,
  updateFixer,
  deleteFixer,
};