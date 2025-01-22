const db = require("../models/db"); // Import your database connection

// Get all employees
const getAllEmployees = (req, res) => {
  db.query("SELECT * FROM employees", (err, results) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.json(results);
    }
  });
};

// Add a new employee
const addEmployee = (req, res) => {
  const { name, email, position, start_date } = req.body;
  db.query(
    "INSERT INTO employees (name, email, position, start_date) VALUES (?, ?, ?, ?)",
    [name, email, position, start_date],
    (err, results) => {
      if (err) {
        res.status(500).send(err);
      } else {
        res.status(201).send("Employee added successfully");
      }
    }
  );
};

module.exports = { getAllEmployees, addEmployee };
