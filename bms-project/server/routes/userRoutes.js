const express = require("express");
const User = require("../models/userModel");

const userRouter = express.Router();

// Register a user
userRouter.post("/register", async (req, res) => {
  try {
    const userExists = await User.findOne({ email: req.body.email });

    if (userExists) {
      return res.send({
        success: false,
        message: "User Already Exists"
      });
    }

    const newUser = new User(req.body);
    await newUser.save();

    res.send({
      success: true,
      message: "Registration successful, Please login."
    });
  } catch (err) {
    console.log(err);
    res.send({
      success: false,
      message: "Something went wrong on server side.",
    });
  }
});

userRouter.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });

    if (!user) {
      return res.send({
        success: false,
        message: "User does not exist. Please register.",
      });
    }

    if (req.body.password !== user.password) {
      return res.send({
        success: false,
        message: "Sorry, invalid password entered!",
      });
    }

    res.send({
      success: true,
      message: "You've successfully logged in!",
    });
  } catch (error) {
    console.error(error);
    res.status(500).send({
      success: false,
      message: "An error occurred. Please try again later.",
    });
  }
});


module.exports = userRouter;
