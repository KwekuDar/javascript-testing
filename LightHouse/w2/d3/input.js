let connection;
const setupInput = function (conn) {
    connection = conn;
    const stdin = process.stdin;
    stdin.setRawMode(true);
    stdin.setEncoding("utf8");
    stdin.resume();
    stdin.on("data", handleUserInput);
    return stdin;
  };
  const handleUserInput = function (key) {
    // your code here
    if (key === '\u0003') {
        process.exit();
      }
    if (key === 'w') {
        connection.write("Move: up");
      }
    if (key === 'a') {
        connection.write("Move: left");
      }
    if (key === 's') {
        connection.write("Move: down");
      }
    if (key === 'd') {
        connection.write("Move: right");
      }
    if (key === 'z') {
        connection.write("Say: testing testing one two three");
      }
    if (key === 'x') {
        connection.write("Say: God I'm so good at coding");
      }
    if (key === 'c') {
        connection.write("Say: Imma make bail tonight");
      }
    
  };

module.exports = {setupInput};