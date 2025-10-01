// server.js
const express = require("express");

//defiine server
const app = express();


// Middleware to parse JSON body
app.use(express.json());

// ROUTE 1: Basic GET request
app.get("/", (req, res) => {
  res.json({ message: "Welcome to my Express server 🚀" });
});

// ROUTE 2: GET with route parameter
app.get("/users/:id", (req, res) => {
  const userId = req.params.id;
  res.json({ message: "User details fetched successfully", userId: userId });
});

// ROUTE 3: GET with query parameter
app.get("/search", (req, res) => {
  const name = req.query.name;
  if (!name) {
    return res.status(400).json({ error: "Please provide a name query parameter" });
  }
  res.json({ message: `Search results for ${name}`, results: [`${name}1`, `${name}2`] });
});

// ROUTE 4: POST with JSON body
app.post("/users", (req, res) => {
  const { name, email } = req.body;
  if (!name || !email) {
    return res.status(400).json({ error: "Name and email are required" });
  }
  res.status(201).json({
    message: "User created successfully",
    user: { id: Date.now(), name, email },
  });
});

// ROUTE 5: PUT request
app.put("/users/:id", (req, res) => {
  const userId = req.params.id;
  const { name, email } = req.body;

  res.json({
    message: "User updated successfully",
    user: { id: userId, name, email },
  });
});

// ROUTE 6: DELETE request
app.delete("/users/:id", (req, res) => {
  const userId = req.params.id;
  res.json({ message: `User with ID ${userId} deleted successfully` });
});

// Error handling for invalid routes
app.use((req, res) => {
  res.status(404).json({ error: "Route not found" });
});

// Start server
app.listen(3001, "127.0.0.1", () =>
console.log(" Server is live on port 3001"))
