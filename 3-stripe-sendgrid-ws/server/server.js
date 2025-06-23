const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

app.get("/health", (req, res) => {
  res.json({ message: "All good!" });
});

app.post("/api/make-payment", async (req, res) => {
  try {
    const { token, amount } = req.body;
    console.log(token.email, token.id);

    const paymentIntent = await stripe.charges.create({
      amount: amount, // Amount always needs to be in cents
      currency: "usd",
      receipt_email: token.email,
      source: "tok_visa",
      description: "Testing Stripe Integration",
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
});

app.get("/api/send-email", async (req, res) => {
  try {
    // Setup the transport details using SendGrid
    const transporter = nodemailer.createTransport({
      host: "smtp.sendgrid.net",
      port: 587,
      auth: {
        user: "apikey"
      },
    });

    // Define the email details
    const mailOptions = {
      from: "shashwatbagaria5@gmail.com",
      to: "shashwat.bagaria_1@scaler.com",
      subject: "Welcome to Scaler, buddy",
      html: "<h3>Welcome to Scaler</h3><p>Thank you for signing up. We hope you enjoy learning with us.</p>",
      text: "Testing text"
    };

    // Send the email
    let info = await transporter.sendMail(mailOptions);
    console.log("Email Sent", info.messageId);

    res.send({
      message: "Mail Sent",
      id: info.messageId
    });
  } catch (err) {
    console.error("Error Sending Email: ", err);
    res.status(500).json({
      message: "Email Not Sent",
      reason: err,
    });
  }
});

app.use((req, res) => {
  res.status(404).send("Page not found!!!");
});

app.listen(8082, () => {
  console.log("Server is running");
});
