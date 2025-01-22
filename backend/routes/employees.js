const express = require("express");
const router = express.Router();
const { getAllEmployees, addEmployee } = require("../controllers/employees");

// Routes
router.get("/", getAllEmployees); // Get all employees
router.post("/", addEmployee);   // Add a new employee

module.exports = router;
