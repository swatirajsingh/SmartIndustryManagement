const mongoose = require("mongoose");

const employeeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  role: String,
  department: String,
  status: String
});

module.exports = mongoose.model("Employee", employeeSchema);