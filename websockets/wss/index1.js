const WebSocket = require("ws");

const wss = new WebSocket.Server({ port: 9000 });
console.log(new Date(), "| Server is running.");

// wss.on("connection", function connection(ws) {
//   ws.on("message", function message(data) {
//     console.log("received: %s", data);
//   });
//   ws.send("pong");
// });

wss.on("connection", function connection(ws) {
  ws.on("message", function message(data, isBinary) {
    wss.clients.forEach(function each(client) {
      if (client.readyState === WebSocket.OPEN) {
        client.send(data, { binary: isBinary });
      }
    });
  });
});
