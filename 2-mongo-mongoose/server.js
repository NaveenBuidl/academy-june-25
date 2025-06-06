const express = require("express");
const productRouter = require("./routes/productRoutes");

// Conect to DB
require("./dbConfig");

const app = express();

// Middleware
app.use(express.json());

// Routes
app.use("/api/products", productRouter);

app.get("/", (req, res) => {
  res.send("Welcome to the Product APIs");
});

app.use((req, res) => {
  res.status(404).json({ message: "Route not found" });
});

// Start server
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});


// ----------------------------- OLD CODE --------------------------------------------
// Custom Middleware
const loggerMiddleware = (req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  next();
};

// app.use(loggerMiddleware);
app.get("/search", (req, res) => {
  // Access query parameters using req.query
  const queryParams = req.query;
  console.log("Query Parameters:", queryParams);

  // Respond to the client
  res.send(`Your parameters are ${JSON.stringify(queryParams)}`);
});

app.post("/data", (req, res) => {
  console.log(req.body);
  res.send("Received a POST request");
});

app.get("/special", loggerMiddleware, (req, res) => {
  res.send("This route is special");
});