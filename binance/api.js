const axios = require("axios");
const querystring = require("querystring");
const crypto = require("crypto");
const { validateRequiredParameters } = require("./helpers/validation");

class APIBase {
  constructor() {
    this.apiKey = process.env.API_KEY;
    this.apiSecret = process.env.SECRET_KEY;
    this.baseURL = process.env.API_URL;
  }

  async publicRequest(method = "GET", path, params = {}) {
    try {
      const queryString = params ? `?${querystring.stringify(params)}` : "";
      const url = `${this.baseURL}${path}${queryString}`;

      const result = await axios({
        method,
        url,
      });

      return result.data;
    } catch (e) {
      console.log(e);
    }
  }

  async signRequest(method = "GET", path, params = {}) {
    try {
      const timestamp = Date.now();
      const signature = crypto
        .createHmac("sha256", this.apiSecret)
        .update(`${querystring.stringify({ ...params, timestamp })}`)
        .digest("hex");

      const data = { ...params, timestamp, signature };

      const qs = `?${querystring.stringify(data)}`;

      const result = await axios({
        method,
        url: `${this.baseURL}${path}${qs}`,
        headers: {
          "X-MBX-APIKEY": this.apiKey,
        },
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

  async accountInfo() {
    return await this.signRequest("GET", "/v3/account");
  }

  async newOrder(symbol, side, type, options = {}) {
    validateRequiredParameters({ symbol, side, type });

    return await this.signRequest(
      "POST",
      "/v3/order",
      Object.assign(options, {
        symbol: symbol.toUpperCase(),
        side: side.toUpperCase(),
        type: type.toUpperCase(),
      })
    );
  }

  async myTrades(symbol, options = {}) {
    validateRequiredParameters({ symbol });

    return this.signRequest(
      "GET",
      "/v3/myTrades",
      Object.assign(options, {
        symbol: symbol.toUpperCase(),
      })
    );
  }

  async openOrders(options = {}) {
    return await this.signRequest("GET", "/v3/openOrders", options);
  }

  async getOrder(symbol, options = {}) {
    validateRequiredParameters({ symbol });
    return this.signRequest(
      "GET",
      "/v3/order",
      Object.assign(options, {
        symbol: symbol.toUpperCase(),
      })
    );
  }
}

module.exports = new APIBase();
