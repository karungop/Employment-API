const express = require("express");
const router = express.Router();
const { getAllShifts, addShifts } = require("../controllers/shifts");

// Routes
router.get("/", getAllShifts); // Get all Shifts
router.post("/", addShifts);   // Add a new shift

module.exports = router;
