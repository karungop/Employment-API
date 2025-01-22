const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const apiRoutes = require("./routes/APIRoutes"); // Add this line

const employeesRoutes = require("./routes/employees");
const hoursRoutes = require("./routes/hours");
const shiftsRoutes = require("./routes/shifts");

const app = express();

// Middlewares
app.use(cors());
app.use(bodyParser.json());

// Use the API routes
app.use("/api", apiRoutes); // Use API routes under /api path
app.use("/api/employees", employeesRoutes);
app.use("/api/hours", hoursRoutes);
app.use("/api/shifts", shiftsRoutes);

app.get("/", (req, res) => {
  res.send("API is running...");
});

const PORT = 5001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


const db = require('./models/db'); // Import your database connection
/*
// Test route to verify DB connection
app.get('/test-db', (req, res) => {
  const query = 'SELECT 1 + 1 AS result'; // Simple query to test the connection
  db.query(query, (err, results) => {
    if (err) {
      console.error('Database query failed:', err);
      return res.status(500).send('Database connection failed');
    }
    console.log('Database query successful:', results);
    res.send('Database connected successfully! Result: ' + results[0].result);
  });
});
*/