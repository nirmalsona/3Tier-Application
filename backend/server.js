const express = require("express");
const mongoose = require("mongoose");

const app = express();
const PORT = 3000;
const DB_URL = "mongodb://database:27017/mydatabase"; // Connect to MongoDB container

// Connect to MongoDB
mongoose.connect(DB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.once("open", () => console.log("Connected to MongoDB"));

// API to check backend status
app.get("/", (req, res) => {
  res.send("Hello from Backend!");
});

// API to check database connection
app.get("/db-status", async (req, res) => {
  const isConnected = db.readyState === 1 ? "Connected" : "Not Connected";
  res.json({ database: isConnected });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Backend running on http://localhost:${PORT}`);
});

