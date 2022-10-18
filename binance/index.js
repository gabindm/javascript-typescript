const APIBase = require("./api");

setInterval(async () => {
  /*
   * Testando os metodos
   */
  // console.log(await APIBase.time());
  // console.log(await APIBase.ping());
  // console.log(await APIBase.depth("BNBBTC", 10));
  // console.log(await APIBase.exchangeInfo({ symbol: "BNBBTC" }));
  // console.log(await APIBase.exchangeInfo({ permissions: "SPOT" }));
  // console.log(await APIBase.spotPairs());
  // console.log(await APIBase.accountInfo());

  /*
   * Testando o metodo depth
   */
  const symbol = "BTCBUSD";
  const result = await APIBase.depth(symbol);
  console.log(result);

  let highestBid = result.bids[0][0];
  let highestAsk = result.asks[0][0];

  for (const bid of result.bids) {
    highestBid = highestBid < bid[0] ? highestBid : bid[0];
  }

  console.log(`Lowest Bid: ${highestBid}`);

  for (const ask of result.asks) {
    highestAsk = highestAsk > ask[0] ? highestAsk : ask[0];
  }

  console.log(`Highest Ask: ${highestAsk}`);

  /*
   * Testando o metodo accountInfo
   */
  const account = await APIBase.accountInfo();
  const coins = account.balances.filter((b) => symbol.indexOf(b.asset) !== -1);
  console.log(`Posição da carteira:`, coins);
}, process.env.CRAWLER_INTERVAL);
