const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const apiRoutes = require("./routes/apiRoutes"); // Add this line

const app = express();

// Middlewares
app.use(cors());
app.use(bodyParser.json());

// Use the API routes
app.use("/api", apiRoutes); // Use API routes under /api path

app.get("/", (req, res) => {
  res.send("API is running...");
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
