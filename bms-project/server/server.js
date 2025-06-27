const express = require("express");
const cors = require("cors");
const userRouter = require("./routes/userRoutes");
const movieRouter = require("./routes/movieRoutes");
const theatreRouter = require("./routes/theatreRoutes");
const showRouter = require("./routes/showRoutes");
const bookingRouter = require("./routes/bookingRoutes");

require("dotenv").config();

// Conect to DB
require("./config/db.js");

const app = express();

app.use(express.json());
app.use(cors());

app.use("/api/users", userRouter); // Route for all user operations
app.use("/api/movies", movieRouter); // Route for all movie operations
app.use("/api/theatre", theatreRouter); // Route for all theatre operations
app.use("/api/show", showRouter); // Route for all show operation
app.use("/api/booking", bookingRouter); // Route for all booking operation

app.use((req, res) => {
  res.status(404).send("Page not found!!!");
});

app.listen(8082, () => {
  console.log("Server is running");
});