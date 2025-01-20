const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();

// Middlewares
app.use(cors()); // Allow cross-origin requests
app.use(bodyParser.json()); // Parse incoming request bodies

// Basic route
app.get("/", (req, res) => {
  res.send("API is running...");
});

// Start the server
const PORT = 5001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
