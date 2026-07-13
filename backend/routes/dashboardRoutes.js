
const express = require("express");
const router = express.Router();

const Production = require("../models/Production");
const Inventory = require("../models/Inventory");
const Employee = require("../models/Employee");
const Order = require("../models/Order");

router.get("/", async (req, res) => {
  try {
    const production = await Production.countDocuments();
    const inventory = await Inventory.countDocuments();
    const employees = await Employee.countDocuments();
    const orders = await Order.countDocuments();

    res.status(200).json({
      
  success: true,
  data: {
    activeOrders: orders,
    inventoryItems: inventory,
    employees: employees,
    revenue: 1250000,

    productionChart: [45, 52, 48, 61, 67, 58, 72],
    energyChart: [30, 28, 35, 32, 40, 38, 42],

    aiPrediction: "Production expected to increase by 12% next week."
  }

  });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
});

module.exports = router;
