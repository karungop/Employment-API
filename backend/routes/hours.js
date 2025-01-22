const express = require("express");
const router = express.Router();
const { getAllHours, addHours } = require("../controllers/hours");

// Routes
router.get("/", getAllHours); // Get all Hours
router.post("/", addHours);   // Add a new hours

module.exports = router;
