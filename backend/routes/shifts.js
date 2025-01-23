const express = require("express");
const router = express.Router();
const { getAllShifts, addShifts, getShiftsForEmployee } = require("../controllers/shifts");

// Routes
router.get("/", getAllShifts); // Get all Shifts
router.post("/", addShifts);   // Add a new shift
router.get("/:employee_id", getShiftsForEmployee);

module.exports = router;
