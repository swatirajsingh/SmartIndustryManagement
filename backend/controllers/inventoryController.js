
const Inventory = require("../models/Inventory");

// Get all inventory items
const getInventory = async (req, res) => {
  try {
    const items = await Inventory.find().sort({ _id: -1 });
    res.json(items);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get single inventory item
const getInventoryById = async (req, res) => {
  try {
    const item = await Inventory.findById(req.params.id);

    if (!item) {
      return res.status(404).json({
        message: "Item not found",
      });
    }

    res.json(item);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Add inventory item
const addInventory = async (req, res) => {
  try {
    const item = new Inventory(req.body);
    await item.save();

    res.status(201).json(item);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update inventory item
const updateInventory = async (req, res) => {
  try {
    const item = await Inventory.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    res.json(item);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete inventory item
const deleteInventory = async (req, res) => {
  try {
    await Inventory.findByIdAndDelete(req.params.id);

    res.json({
      success: true,
      message: "Inventory deleted successfully",
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getInventory,
  getInventoryById,
  addInventory,
  updateInventory,
  deleteInventory,
};
