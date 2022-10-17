const APIBase = require("./api");

setInterval(async () => {
  // console.log(await APIBase.time());
  // console.log(await APIBase.ping());
  // console.log(await APIBase.depth("BNBBTC", 10));
  // console.log(await APIBase.exchangeInfo({ symbol: "BNBBTC" }));
  // console.log(await APIBase.exchangeInfo({ permissions: "SPOT" }));
  // console.log(await APIBase.spotPairs());
}, process.env.CRAWLER_INTERVAL);
