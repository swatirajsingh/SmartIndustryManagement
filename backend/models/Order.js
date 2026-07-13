const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  customerName: String,
  product: String,
  quantity: Number,
  status: String
});

module.exports = mongoose.model("Order", orderSchema);