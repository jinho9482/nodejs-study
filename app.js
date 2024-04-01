// Node 를 통해 os, file system, network 의 정보도 얻을 수 있다.
// 기존의 js는 browser에서 움직였기 때문에 window(document)의 정보만 얻을 수 있었다.

const os = require("os");

let totalMemory = os.totalmem();
let freeMemory = os.freemem();

console.log(`Total Memory: ${totalMemory}`);
console.log(`Free Memory: ${freeMemory}`);
