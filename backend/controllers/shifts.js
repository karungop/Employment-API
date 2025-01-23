const db = require("../models/db"); // Import your database connection

// Get all shifts
const getAllShifts = (req, res) => {
  db.query("SELECT * FROM shifts", (err, results) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.json(results);
    }
  });
};

// Add new shifts
const addShifts = (req, res) => {
  const { employee_id, shift_start, shift_end } = req.body; // Expecting these in the request body
  if (!employee_id || !shift_start || !shift_end) {
    return res.status(400).send("All fields (employee_id, shift_start, shift_end) are required.");
  }

  db.query(
    "INSERT INTO shifts (employee_id, shift_start, shift_end) VALUES (?, ?, ?)",
    [employee_id, shift_start, shift_end],
    (err, results) => {
      if (err) {
        res.status(500).send(err);
      } else {
        res.status(201).send("Shift added successfully");
      }
    }
  );
};


const getShiftsForEmployee = (req, res) => {
  const { employee_id, shift_start, shift_end } = req.body;
  if (!employee_id || !shift_start || !shift_end) {
    return res.status(400).send("All fields (employee_id, shift_start, shift_end) are required.");
  }
  const query = `
  SELECT shifts.id, shifts.start_time, shifts.end_time, 
  FROM shifts
  WHERE shifts.employee_id = ?
`;

  db.query(query, [employeeId], (err, results) => {
    if (err) {
      res.status(500).send(err);
    } else if (results.length === 0) {
      res.status(404).send("No shifts found for this employee.");
    } else {
      res.json(results); // Return the shift data
    }
    }
  );

};

module.exports = { getAllShifts, addShifts, getShiftsForEmployee };
