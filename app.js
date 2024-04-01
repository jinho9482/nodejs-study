const EventEmitter = require("events");
const emitter = new EventEmitter();

// Register a listener
emitter.on("messageLogged", () => console.log("Listner called")); // event보다 먼저 있어야 한다.

// Raise an event
emitter.emit("messageLogged");
