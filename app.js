// const logger = require("./logger"); // returns object exported from logger, actually, it returns exports: {} object in json object, when we execute console.log(module)

// console.log(logger);
// logger.log("Hi");

const logger = require("./logger"); // return module.exports of logger.js, not of app.js
logger.log("hi");
console.log(module.exports);
console.log(logger);
// log("hi");
