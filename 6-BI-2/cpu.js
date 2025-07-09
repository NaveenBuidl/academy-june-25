const express = require("express");
const cors = require("cors");
const app = express();
const path = require("path");
const { fork } = require("child_process");

app.use(express.static("public"));
app.use(cors());

app.get("/fib", (req, res) => {
  const { number, requestNumber } = req.query;
  console.log("handler fn ran for req", requestNumber);
  if (!number || isNaN(number) || number <= 0) {
    return res
      .status(400)
      .json({ error: "Please provide a valid positive number." });
  }

  // creating a child process
  const fiboRes = fork(path.join(__dirname, "fiboWorker.js"));

  // sending data to the child process
  fiboRes.send({ number: parseInt(number, 10) });

  // receiving data from the child process
  fiboRes.on("message", (answer) => {
    console.log("sending response for req", requestNumber);
    res.status(200).json({
      status: "success",
      message: answer,
      requestNumber,
    });
    // kill the child process
    fiboRes.kill();
  });
});


app.listen(3000, () => {
  console.log("server is running on port 3000");
});
