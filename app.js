const EventEmitter = require("events");

const Logger = require("./logger");
const logger = new Logger();
// Register a listener
logger.on("messageLogged", (e) => console.log("Listner called", e)); // event보다 먼저 있어야 한다.

logger.log("message");
