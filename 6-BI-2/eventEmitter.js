const eventEmitter = require("events");
const myEmitter = new eventEmitter();

// listener
myEmitter.on("myEvent", (...args) => {
  console.log("There is a new event", args);
});

myEmitter.on("message", (...args) => {
  console.log("Another listener for the new event", args);
  console.log("---------------");
});

// emit an event
myEmitter.emit("message");
// myEmitter.emit("myEvent", 1, 2);
myEmitter.emit("myEvent", [1, 2, 3]);