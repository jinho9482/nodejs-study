// path module

const path = require("path");

var pathObj = path.parse(__filename); // returns an object whose properties represent significant elements of the __filename

console.log(pathObj);

// returns:
// {
//     root: 'C:\\',
//     dir: 'C:\\nodejs-study',
//     base: 'app.js',
//     ext: '.js',
//     name: 'app'
//   }
