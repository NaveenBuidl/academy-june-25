const Booking = require("../models/bookingModel");
const stripe = require("stripe")(
  "sk_test_51R6BX1KpJJuQX1KFWbBqfOSb39ez5ZVReHvLSpjPA2KYppPR7v5905uT9BqMI2hw5ST0x4euAMgqLr3QwEPeC4Ch00IFlXyGPb"
);
const Show = require("../models/showModel");

const makePayment = async (req, res) => {
  try {
    const { token, amount } = req.body;
    console.log(token.email, token.id);

    const paymentIntent = await stripe.charges.create({
      amount: amount, // Amount always needs to be in cents
      currency: "usd",
      receipt_email: token.email,
      source: "tok_visa",
      description: "Booking Movie",
    });

    const transactionId = paymentIntent.id;

    res.send({
      success: true,
      message:
        "Payment Processing. You will receive a confirmation once the payment is complete.",
      data: transactionId,
    });
  } catch (err) {
    res.status(500).send({
      success: false,
      message: err.message,
    });
  }
};

const bookShow = async (req, res) => {
  try {
    const newBooking = new Booking(req.body);
    await newBooking.save();

    const show = await Show.findById(req.body.show).populate("movie");
    const updatedBookedSeats = [...show.bookedSeats, ...req.body.seats];
    await Show.findByIdAndUpdate(req.body.show, {
      bookedSeats: updatedBookedSeats,
    });

    res.send({
      success: true,
      message: "New Booking done",
      data: newBooking,
    });
  } catch (err) {
    res.status(500).send({ success: false, message: err.message });
  }
};

const getAllBookings = async (req, res) => {
  try {
    const bookings = await Booking.find({ user: req.body.userId })
      .populate("user")
      .populate("show")
      .populate({
        path: "show",
        populate: {
          path: "movie",
          model: "movies",
        },
      })
      .populate({
        path: "show",
        populate: {
          path: "theatre",
          model: "theatres",
        },
      });

    res.send({
      success: true,
      message: "Bookings fetched",
      data: bookings
    });
  } catch (err) {
    res.status(500).send({ success: false, message: err.message });
  }
};

module.exports = { makePayment, bookShow, getAllBookings };
