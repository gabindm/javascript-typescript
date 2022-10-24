const market = (await client.exchangeInfo({ symbol: "BTCBUSD" })).data;
    console.log(JSON.stringify(market);