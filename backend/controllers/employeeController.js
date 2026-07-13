const Employee = require("../models/Employee");

// Get all employees
const getEmployees = async (req, res) => {
  try {
    const employees = await Employee.find().sort({ _id: -1 });
    res.json(employees);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get one employee
const getEmployeeById = async (req, res) => {
  try {
    const employee = await Employee.findById(req.params.id);

    if (!employee) {
      return res.status(404).json({
        message: "Employee not found",
      });
    }

    res.json(employee);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Add employee
const addEmployee = async (req, res) => {
  try {
    const employee = new Employee(req.body);
    await employee.save();

    res.status(201).json(employee);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update employee
const updateEmployee = async (req, res) => {
  try {
    const employee = await Employee.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    if (!employee) {
      return res.status(404).json({
        message: "Employee not found",
      });
    }

    res.json(employee);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete employee
const deleteEmployee = async (req, res) => {
  try {
    const employee = await Employee.findByIdAndDelete(req.params.id);

    if (!employee) {
      return res.status(404).json({
        message: "Employee not found",
      });
    }

    res.json({
      success: true,
      message: "Employee deleted successfully",
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getEmployees,
  getEmployeeById,
  addEmployee,
  updateEmployee,
  deleteEmployee,
};