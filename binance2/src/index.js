const Spot = require("./spot");
const client = new Spot();
const utils = require("./helpers/utils");

// client
//   .getOrder("BTCBUSD", {
//     orderId: 4640543,
//   })
//   .then((response) => client.logger.log(response.data))
//   .catch((error) => client.logger.error(error));

// client
//   .myTrades("BNBBUSD")
//   .then((response) => client.logger.log(response.data))
//   .catch((error) => client.logger.error(error));

// client
//   .bookTicker("BTCUSDT")
//   .then((response) => client.logger.log(response.data));

// client
//   .ticker24hr("BTCUSDT")
//   .then((response) => client.logger.log(response.data));

// client
//   .tickerPrice("BTCUSDT")
//   .then((response) => client.logger.log(response.data));

// client
//   .depth("BNBBUSD")
//   .then((response) => client.logger.log(response.data))
//   .catch((error) => client.logger.error(error));

// client
//   .account()
//   .then((response) => client.logger.log(response.data))
//   .catch((error) => client.logger.error(error));

// client
//   .allOrders("BNBBUSD", {
//     orderId: 487251,
//   })
//   .then((response) => client.logger.log(response.data))
//   .catch((error) => client.logger.error(error));

// client
//   .openOrders({ symbol: "BNBBUSD" })
//   .then((response) => client.logger.log(response.data))
//   .catch((error) => client.logger.error(error));

// client
//   .exchangeInfo()
//   .then((response) => client.logger.log(response.data))
//   .catch((error) => client.logger.error(error));

// client
//   .exchangeInfo({ symbol: "BNBBUSD" })
//   .then((response) => client.logger.log(response.data));

// async function executa() {
//   try {
//     const price = (await client.bookTicker("BTCBUSD")).data.askPrice;
//     console.log(price);

//     const buyOrder = (
//       await client.newOrder("BTCBUSD", "buy", "market", {
//         //price,
//         quantity: 0.1,
//         //timeInForce: "GTC",
//       })
//     ).data;

//     console.log(buyOrder);
//   } catch (e) {
//     console.log(e);
//   }
// }

//https://api.binance.com/api/v3/exchangeInfo?symbol=BTCBUSD
async function executa() {
  try {
    const market = (await client.exchangeInfo()).data;
    const symbols = market.symbols;

    const [btcmarket] = symbols.filter((symbol) => symbol.symbol === "BTCBUSD");
    // console.log(btcmarket);

    const filters = btcmarket.filters;
    // console.log(filters);

    let minSize = 0;
    let maxSize = 0;
    let sizeIncrement = 0;
    const priceIncrement = btcmarket.quoteAssetPrecision;
    const priceSignificantDigits = 0;

    for (let filter of btcmarket.filters) {
      if (filter.filterType === "LOT_SIZE") {
        // console.log(filter);
        minSize = filter.minQty;
        maxSize = filter.maxQty;
        sizeIncrement = filter.stepSize;
      }
    }

    console.log(
      `minSize = ${minSize}, maxSize = ${maxSize}, sizeIncrement = ${sizeIncrement}, priceSignificantDigits = ${priceSignificantDigits}, priceIncrement = ${priceIncrement}`
    );
  } catch (e) {
    console.log(e);
  }
}

executa();

//const price = (await client.bookTicker("BNBBUSD")).data;

// client
//   .newOrder("BNBBUSD", "BUY", "LIMIT", {
//     quantity: 10,
//     timeInForce: "GTC",
//   })
//   .then((response) => client.logger.log(response.data))
//   .catch((error) => client.logger.error(error));

// setInterval(async () => {
//   // const result2 = (await client.exchangeInfo({ symbol: "BNBBUSD" })).data;
//   // console.log(result2);
//   // console.log(result2.symbols.filter((r) => r.symbol.endsWith("USDT")));
//   // return;

//   const result = (await client.depth("BNBBUSD", { limit: 10 })).data;
//   //console.log(result);

//   let highestBid = result.bids[0][0]; //maior oferta de compra - quero vender no maior preco
//   let lowestAsk = result.asks[0][0]; //menor oferta de venda - quero comprar no menor preco

//   if (result.bids && result.bids.length) {
//     for (const bid of result.bids) {
//       highestBid = highestBid > bid[0] ? highestBid : bid[0];
//     }
//     console.log(`Highest Bid: ${highestBid}`);
//   }

//   if (result.asks && result.asks.length) {
//     for (const ask of result.asks) {
//       lowestAsk = lowestAsk < ask[0] ? lowestAsk : ask[0];
//     }
//     console.log(`Lowest Ask: ${lowestAsk}`);
//   }

//   if (highestBid && lowestAsk) {
//     const account = (await client.account()).data;
//     // console.log(account);

//     const coins = account.balances.filter(
//       (b) => "BNBBUSD".indexOf(b.asset) !== -1
//     );
//     //console.log(`Posição da carteira:`, coins);

//     const walletUSD = parseFloat(coins.find((c) => c.asset === "BUSD").free);
//     console.log(`Saldo USD = ${walletUSD}`);

//     const walletBNB = parseFloat(coins.find((c) => c.asset === "BNB").free);
//     console.log(`Saldo BNB = ${walletBNB}`);

//     const options = {
//       price: lowestAsk,
//       quantity: 1,
//       timeInForce: "GTC",
//     };

//     if (walletUSD >= options.price * options.quantity) {
//       console.log("Posso comprar :D");

//       const buyOrder = (
//         await client.newOrder("BNBBUSD", "BUY", "LIMIT", options)
//       ).data;
//       console.log(buyOrder);

//       let avgPrice = 0.0;
//       let avgQty = 0.0;

//       if (buyOrder.status === "FILLED") {
//         for (let i of buyOrder.fills) {
//           if (i.price && i.qty) {
//             avgQty += i.qty;
//             avgPrice += i.price;
//           }
//         }

//         avgPrice = avgPrice / avgQty;
//         console.log(avgPrice);

//         console.log("Posicionando venda futura do asset comprado:");
//         const price = (avgPrice * process.env.PROFITABILITY).toFixed(8);

//         const sellOrder = (
//           await client.newOrder("BNBBUSD", "SELL", "LIMIT", {
//             price: price,
//             quantity: avgQty,
//             timeInForce: "GTC",
//           })
//         ).data;

//         console.log(sellOrder);
//       }
//     }
//   }
// }, process.env.CRAWLER_INTERVAL);
