const mongoose = require("mongoose");

const inventorySchema = new mongoose.Schema({
  itemName: {
    type: String,
    required: true
  },
  quantity: {
    type: Number,
    required: true
  },
  category: String,
  status: String
});

module.exports = mongoose.model("Inventory", inventorySchema);