const connect = require('./client')
const net = require("net");

// establishes a connection with the game server
// const connect = function () {
//   const conn = net.createConnection({
//     host: '192.168.1.3',
//     port: 50541 ,
//   });

//   // interpret incoming data as text
//   conn.setEncoding("utf8");
//   conn.on("connect", () => {
//       console.log('you ded cuz you idled')
//   });

//   return conn;
// };

console.log("Connecting ...");
connect();