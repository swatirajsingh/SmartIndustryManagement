const express = require("express");
const cors = require("cors");
require("dotenv").config();

const connectDB = require("./config/db");

const inventoryRoutes = require("./routes/inventoryRoutes");
const employeeRoutes = require("./routes/employeeRoutes");
const orderRoutes = require("./routes/orderRoutes");
const productionRoutes = require("./routes/productionRoutes");
const dashboardRoutes = require("./routes/dashboardRoutes");
const aiRoutes = require("./routes/ai");

const app = express();

// Connect Database
connectDB();

// Middleware
app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://smartindustrymanagement-frontend.onrender.com"
    ],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);
app.use(express.json());

// Test Route
app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Smart Industry Management System Backend Running 🚀",
  });
});

// API Routes
app.use("/api/dashboard", dashboardRoutes);
app.use("/api/inventory", inventoryRoutes);
app.use("/api/employees", employeeRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/production", productionRoutes);
app.use("/api/ai", aiRoutes);

// Start Server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});