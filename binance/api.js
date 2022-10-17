const axios = require("axios");
const querystring = require("querystring");

class APIBase {
  constructor() {
    this.apiKey = process.env.API_KEY;
    this.apiSecret = process.env.SECRET_KEY;
    this.baseURL = process.env.API_URL;
  }

  async publicRequest(method = "GET", path, params = {}) {
    try {
      const queryString = params ? `?${querystring.stringify(params)}` : "";

      const result = await axios({
        method,
        url: `${this.baseURL}${path}${queryString}`,
      });

      return result.data;
    } catch (e) {
      console.log(e);
    }
  }

  async time() {
    return this.publicRequest("GET", "/v3/time"); //retorna o horário em timestamp no servidor da binance
  }

  async depth(symbol = "BTCBRL", limit = 5) {
    return this.publicRequest("GET", "/v3/depth", {
      symbol: symbol.toUpperCase(),
      limit,
    });
  }

  async ping() {
    return this.publicRequest("GET", "/v3/ping");
  }

  async exchangeInfo(params = {}) {
    if (Object.prototype.hasOwnProperty.call(params, "symbol")) {
      params.symbol = params.symbol.toUpperCase();
    }
    if (Object.prototype.hasOwnProperty.call(params, "symbols")) {
      params.symbols = params.symbols.map((symbol) => symbol.toUpperCase());
    }
    if (Object.prototype.hasOwnProperty.call(params, "permissions")) {
      params.permissions = params.permissions.toUpperCase();
    }
    return this.publicRequest("GET", "/v3/exchangeInfo", params);
  }

  async spotPairs() {
    const result = [];
    const exchange_info = await this.publicRequest("GET", "/v3/exchangeInfo", {
      permissions: "SPOT",
    });

    for (const pair of exchange_info.symbols) {
      result.push(pair.symbol);
    }

    return result;
  }
}

module.exports = new APIBase();
