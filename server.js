// 1. Console is now Terminal .

// 2. global object instead of window object.
// console.log(global);

// 3. common JS modules instead of ES6 modules.

// 4. SOME COMMON USAGE OF OS
// const os = require("os");
// console.log(os.type());
// console.log(os.version());
// console.log(os.homedir());

// 5. ABOUT FILE PATH
// get folder path example: /home/l16h7n1ng/Node
// console.log(__dirname);
// get current file path example: /home/l16h7n1ng/Node/server.js
// console.log(__filename);

// 6. ABOUT PATH
// const path = require("path");
// get folder path example: /home/l16h7n1ng/Node
// console.log(path.dirname(__filename));
// get currenrt file only example: server.js
// console.log(path.basename(__filename));
// get extension name example: .js
// console.log(path.extname(__filename));
// get all info about path
// can destructure object, what you need
// console.log(path.parse(__filename));
// output
// {
//     root: '/',
//     dir: '/home/l16h7n1ng/Node. JS',
//     base: 'server.js',
//     ext: '.js',
//     name: 'server'
// }

// 7. IMPORT FUNCTIONS
// const { add, subtract, divide, multiply } = require("./function");
// console.log(add(2, 2));
// console.log(subtract(2, 2));
// console.log(divide(2, 2));
// console.log(multiply(2, 2));
