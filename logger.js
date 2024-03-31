var url = "http://mylogger.io/log";

function log(message) {
  // Send an HTTP request
  console.log(message);
}

// module.exports.log = log; // export log function as a property
module.exports = log; // Can export only function
// module.exports.endPoint = url; // Export url as a name of endPoint
