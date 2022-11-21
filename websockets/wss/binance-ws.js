const WebSocket = require("ws");

const clients = new Set();
const instrumentsPriceInterval = {
  BTCBUSD: [16000, 20000],
  ETHBUSD: [1000, 2000],
  LTCBUSD: [40, 70],
  BCHBUSD: [100, 200],
  XRPBUSD: [0.3, 0.5],
  BTCUSDT: [16000, 20000],
};

const server = new WebSocket.Server({ port: 8003 });
console.log(new Date(), "| Server is running.");

setInterval(sendPrices, 1000);

server.on("connection", (client) => {
  console.log(new Date(), "| New connection.", clients.size);

  client.on("close", () => {
    console.log(new Date(), "| Server closed.");
    if (clients.size) {
      clients.delete(client);
    }
  });

  client.on("error", (error) =>
    console.log(new Date(), "| Server error.", error)
  );

  client.on("message", function (message) {
    console.log(new Date(), "| New message.", JSON.parse(message));
    const payload = JSON.parse(message);

    if (payload.method === "SUBSCRIBE") {
      subscribeEvent(client, payload);
      return;
    }
    if (payload.method === "UNSUBSCRIBE") {
      if (!clients.size) {
        return;
      }
      client._instruments.delete(payload.instrument);
      return;
    }
  });
});

function subscribeEvent(client, payload) {
  console.log(new Date(), "| SubscribeEvent clients.", clients.size);

  if (!client._instruments) {
    client._instruments = new Set();
  }

  let isInstrument = 0;

  let coin = payload.params.split("@")[0].toUpperCase();

  for (inst of Object.keys(instrumentsPriceInterval)) {
    if (coin === inst) isInstrument++;
  }

  if (isInstrument > 0) {
    client._instruments.add(coin);

    client.send(
      JSON.stringify({
        result: null,
        id: 1,
      })
    );

    clients.add(client);
  }
}

function priceGenerator(min, max) {
  const offset = (max + min) / 2;
  const amplitude = max - min;
  return Math.sin((2 * Math.PI) / Math.random()) * amplitude + offset;
}

function sendPrices() {
  if (!clients.size) {
    return;
  }

  clients.forEach((client) => {
    if (
      client.readyState === WebSocket.OPEN &&
      client._instruments &&
      client._instruments.size
    ) {
      client._instruments.forEach((instrument) => {
        if (!instrumentsPriceInterval[instrument]) {
          console.warn("Instrument not found.", { instrument });
          return;
        }

        const priceBase = priceGenerator(
          ...instrumentsPriceInterval[instrument]
        );

        client.send(
          JSON.stringify({
            e: "24hrTicker",
            E: 1668954766331,
            s: instrument.toString(),
            p: "-105.37000000",
            P: "-0.633",
            w: "16623.49721637",
            x: "16637.03000000",
            c: "16531.19000000",
            Q: "0.05643000",
            b: (1.01 * priceBase).toFixed(4).toString(),
            B: "0.08884000",
            a: (0.99 * priceBase).toFixed(4).toString(),
            A: "0.00750000",
            o: "16636.56000000",
            h: "16806.10000000",
            l: "16439.69000000",
            v: "73747.87609000",
            q: "1225947612.89536240",
            O: 1668868366321,
            C: 1668954766321,
            F: 630866423,
            L: 632685479,
            n: 1819057,
          })
        );
      });
    }
  });
}
