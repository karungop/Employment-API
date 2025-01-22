const express = require("express");
const router = express.Router();
const { getAllHours, addHours } = require("../controllers/employees");

// Routes
router.get("/", getAllHours); // Get all Hours
router.post("/", addHours);   // Add a new hours

module.exports = router;
