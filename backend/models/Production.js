const mongoose = require("mongoose");

const productionSchema = new mongoose.Schema({
  productName: String,
  unitsProduced: Number,
  energyUsed: Number,
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Production", productionSchema);