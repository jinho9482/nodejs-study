// module wrapper function
// function (exports, require, module, __filename, __dirname) {

// console.log(exports);
// console.log(require);
// console.log(module);
// console.log(__filename); // C:\nodejs-study\logger.js
// console.log(__dirname); // C:\nodejs-study

var url = "http://mylogger.io/log";

function log(message) {
  console.log(message);
}

// exports.log = log;
// module.exports = log;
exports = log;
console.log(module);

// };
