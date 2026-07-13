const Production = require("../models/Production");

// Get all
exports.getAll = async (req, res) => {
  try {
    const data = await Production.find().sort({ createdAt: -1 });
    res.json(data);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Create
exports.create = async (req, res) => {
  try {
    const production = new Production(req.body);
    const saved = await production.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Update
exports.update = async (req, res) => {
  try {
    const updated = await Production.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(updated);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Delete
exports.remove = async (req, res) => {
  try {
    await Production.findByIdAndDelete(req.params.id);
    res.json({ message: "Deleted Successfully" });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};