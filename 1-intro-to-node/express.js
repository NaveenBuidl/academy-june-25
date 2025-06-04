const express = require("express");

const app = express();

// Define a root route
app.get("/", (req, res) => {
  res.send("Hello, Express!");
});

app.get("/about", (req, res) => {
  res.send("About route!");
});

app.get("/contact", (req, res) => {
  res.send("Contact Route!");
});

// ---------- DYNAMIC ROUTES ------------
const users = [
  { id: 1, name: "User 1" },
  { id: 2, name: "User 2" },
];

app.get("/users", (req, res) => {
  res.status(200).json({ message: "All users", users });
});

app.get("/users/:id", (req, res) => {
  const userId = req.params.id;
  const user = users.find(u => u.id == userId);

  if (!user) {
    return res.status(404).json({ message: "User not found" });
  } else {
    res.status(200).json({ message: "User found", user });
  }
});

// Start server
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});