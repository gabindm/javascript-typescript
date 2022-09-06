const WebSocket = require("ws");

const server = new WebSocket.Server({ port: 8000 });
console.log(new Date(), "| Server is running.");

//Com isso, temos o bastante para subir um servidor web que recebe requisições em uma rota localhost:8000.

clients = new Set();

function onError(ws, err) {
  console.error(`onError: ${err.message}`);
}

function onMessage(ws, data) {
  console.log(`onMessage: ${data}`);
  //const payload = JSON.parse(data);
  //console.log(payload);

  ws.send(`recebido!`);
}

function onConnection(ws, req) {
  console.log(new Date(), "| New connection.", clients.size);
  ws.on("message", (data) => onMessage(ws, data));
  ws.on("error", (error) => onError(ws, error));
}

function broadcast(jsonObject) {
  if (!this.clients) return;
  this.clients.forEach((client) => {
    if (client.readyState === WebSocket.OPEN) {
      client.send(JSON.stringify(jsonObject));
    }
  });
}

server.on("connection", onConnection);
server.broadcast = broadcast;
console.log(`App Web Socket Server is running!`);

// setInterval(() => {
//   server.broadcast({ n: Math.random() });
// }, 1000);
