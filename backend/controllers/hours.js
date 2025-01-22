const db = require("../models/db"); // Import your database connection

// Get all logged hours
const getAllHours = (req, res) => {
  db.query("SELECT * FROM hours_logged", (err, results) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.json(results);
    }
  });
};

// Add new logged hours
const addHours = (req, res) => {
  const { employee_id, date, hours_worked } = req.body; // Expecting these in the request body
  if (!employee_id || !date || !hours_worked) {
    return res.status(400).send("All fields (employee_id, date, hours_worked) are required.");
  }

  db.query(
    "INSERT INTO hours_logged (employee_id, date, hours_worked) VALUES (?, ?, ?)",
    [employee_id, date, hours_worked],
    (err, results) => {
      if (err) {
        res.status(500).send(err);
      } else {
        res.status(201).send("Hours added successfully");
      }
    }
  );
};

module.exports = { getAllHours, addHours };
