const express = require("express");
const cors = require("cors");
const userRouter = require("./routes/userRoutes");

require("dotenv").config();

// Conect to DB
require("./config/db.js");

const app = express();

app.use(express.json());
app.use(cors());
app.use("/api/users", userRouter); // Route for all user operations

app.listen(8082, () => {
  console.log("Server is running");
});