const express = require("express");
const http = require("http");
const path = require("path");
const { Server } = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = new Server(server);

io.on("connection", (socket) => {
  console.log("A user connected", socket.id);

  // Send a message to the client every 2 seconds
  // setInterval(() => {
  //   socket.emit("server_msg", `Message from Server(${socket.id}): ${new Date()}`);
  // }, 2000);

  socket.on("client_msg", (data) => {
    socket.broadcast.emit("server_msg", `User ${socket.id}: ${data}`);
  });

  // Listen for disconnection
  socket.on("disconnect", () => {
    console.log("User disconnected", socket.id);
  });
});

// app.get("/", (req, res) => {
//   res.send("Hello, World!");
// });

server.listen(3000, () => console.log("App running at http://localhost:3000"));

const publicPath = path.join(__dirname, "public");
app.use(express.static(publicPath));
app.get("*", (req, res) => {
  res.sendFile(path.join(publicPath, "index.html"));
});
