const readlineSync = require("readline-sync");
const symbol = readlineSync.question(
  "Qual o par de moedas que deve ser monitorado?\n"
);

const WebSocket = require("ws"); //tanto para criação de servidor quanto client websocket
//const ws = new WebSocket("wss://stream.binance.com:9443/ws/btcbrl@bookTicker");
//a stream btcbrl@bookTicker traz em tempo real as ofertas de compra e venda de btcbrl
const ws = new WebSocket("wss://stream.binance.com:9443/ws/bookTicker");

ws.onopen = () => {
  ws.send(
    JSON.stringify({
      method: "SUBSCRIBE",
      params: [`${symbol}@bookTicker`],
      id: 1,
    })
  );
};

ws.onmessage = (event) => {
  //é um event handler. Passamos pra ele uma função de callback pra ser executada toda vez que o client receber uma msg do server
  //console.log(event.data);
  const obj = JSON.parse(event.data); //desestruturar o event.data
  // //console.log(obj.a);
  process.stdout.write("\033c"); //pra não acumular os logs na tela
  console.log(`Best bid price: ${obj.b}\n`);
  console.log(`Best ask price: ${obj.a}\n`);
};
