const readlineSync = require("readline-sync");
let stream = readlineSync.question(
  "Qual o par de moedas que deve ser monitorado?\n"
);
console.log(stream);
stream = stream.split("@");

const WebSocket = require("ws");
const ws = new WebSocket(`wss://stream.binance.com:9443/ws`);

ws.addEventListener("open", () => {
  ws.send(
    JSON.stringify({
      method: "SUBSCRIBE",
      params: [`${stream[0]}@${stream[1]}`],
      id: 1,
    })
  );
});

ws.addEventListener("message", (event) => {
  //é um event handler. Passamos pra ele uma função de callback pra ser executada toda vez que o client receber uma msg do server
  //console.log(event.data);
  const obj = JSON.parse(event.data); //desestruturar o event.data
  console.log(obj);
  //process.stdout.write("\033c"); //pra não acumular os logs na tela
  console.log(`Best bid price: ${obj.b}\n`);
  console.log(`Best ask price: ${obj.a}\n`);
});

ws.addEventListener("ping", () => {
  console.log("Received ping event. Sending pong back.");
  ws.pong();
});
