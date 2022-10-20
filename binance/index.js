const APIBase = require("./api");

setInterval(async () => {
  // /*
  //  * Testando os metodos
  //  */
  // // console.log(await APIBase.time());
  // // console.log(await APIBase.ping());
  // // console.log(await APIBase.depth("BNBBTC", 10));
  // // console.log(await APIBase.exchangeInfo({ symbol: "BNBBTC" }));
  // // console.log(await APIBase.exchangeInfo({ permissions: "SPOT" }));
  // //
  console.log(await APIBase.spotPairs());
  // // console.log(await APIBase.accountInfo());
  // /*
  //  * Testando o metodo depth
  //  */
  // const symbol = "BNBBUSD";
  // const result = await APIBase.depth(symbol);
  // console.log(result);
  // let highestBid = result.bids[0][0]; //maior oferta de compra - quero vender no maior preco
  // let lowestAsk = result.asks[0][0]; //menor oferta de venda - quero comprar no menor preco
  // for (const bid of result.bids) {
  //   highestBid = highestBid > bid[0] ? highestBid : bid[0];
  // }
  // console.log(`Highest Bid: ${highestBid}`);
  // for (const ask of result.asks) {
  //   lowestAsk = lowestAsk < ask[0] ? lowestAsk : ask[0];
  // }
  // console.log(`Lowest Ask: ${lowestAsk}`);
  // /*
  //  * Testando o metodo accountInfo
  //  */
  // const account = await APIBase.accountInfo();
  // const coins = account.balances.filter((b) => symbol.indexOf(b.asset) !== -1);
  // console.log(`Posição da carteira:`, coins);
  // /*
  //  * Testando o metodo new Order - buy
  //  */
  // const options = {
  //   price: lowestAsk,
  //   quantity: 1,
  //   timeInForce: "GTC",
  // };
  // if (
  //   lowestAsk * options.quantity <=
  //   parseFloat(coins.find((c) => c.asset.endsWith === process.env.COIN).free)
  // ) {
  //   console.log(await APIBase.newOrder("BNBUSDT", "BUY", "LIMIT", options));
  // } else {
  //   console.log("saldo insuficiente!");
  // }
  /*
   * Testando Open Orders
   */
  // console.log(await APIBase.openOrders({ symbol: "BNBUSDT" }));
  /*
   * Testando My Trades
   */
  // console.log(await APIBase.myTrades("BNBUSDT"));
  /*
   * Testando Get Order
   */
  // console.log(
  //   await APIBase.getOrder("BNBUSDT", {
  //     orderId: 846538,
  //   })
  // );
  /*
   * Testando posicionar uma venda futura
   */
  // const trades = await APIBase.myTrades("BNBUSDT");
  // for (const trade of trades) {
  //   if (trade.isBuyer) {
  //     const profitability = parseFloat(process.env.PROFITABILITY);
  //     const options = {
  //       price: parseFloat(trade.price * profitability),
  //       quantity: trade.qty,
  //       timeInForce: "GTC",
  //     };
  //     const sellOrder = await APIBase.newOrder(
  //       "BNBUSDT",
  //       "SELL",
  //       "LIMIT",
  //       options
  //     );
  //     console.log(sellOrder);
  //   }
  // }
}, process.env.CRAWLER_INTERVAL);
