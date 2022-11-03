const { Spot } = require("@binance/connector");

const client = new Spot("", "", {
  wsURL: "wss://stream.binance.com:9443", // wss://stream.binance.com:9443 ou wss://testnet.binance.vision
});

const callbacks = {
  open: () => client.logger.log("open"),
  close: () => client.logger.log("closed"),
  message: (data) => client.logger.log(data),
  error: (error) => client.logger.error(error),
};

// support combined stream
const combinedStreams = client.combinedStreams(
  ["btcusdt@miniTicker", "ethusdt@ticker"],
  callbacks
);
