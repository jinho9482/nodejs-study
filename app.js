// 아래와 같은 global object는 browser에서는 전부 window object에 속했다.
// 하지만 node에서는 전부 global object에 속한다.

// console.log(); // global object

// setTimeout();
// clearTimeout();

// setInterval();
// clearInterval();

// (window.)console.log // js engine이 window.를 자동으로 넣는다.

var message = "Hi"; // global scope

console.log(window.message); // Hi in browser
console.log(global.message); // undefined in node
