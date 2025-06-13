const express = require("express");
const {
  registerUser,
  loginUser,
  getCurrentUser,
} = require("../controllers/userController");
const authMiddleware = require("../middlewares/authMiddleware");

const userRouter = express.Router();

// Register a user
userRouter.post("/register", registerUser);
userRouter.post("/login", loginUser);
userRouter.get("/current-user", authMiddleware, getCurrentUser);

module.exports = userRouter;
