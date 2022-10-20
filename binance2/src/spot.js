"use strict";

const APIBase = require("./APIBase");
const modules = require("./modules");
const { flowRight } = require("./helpers/utils");

class Spot extends flowRight(...Object.values(modules))(APIBase) {
  constructor(
    apiKey = process.env.API_KEY,
    apiSecret = process.env.SECRET_KEY,
    options = {}
  ) {
    options.baseURL = process.env.API_URL;
    super({
      apiKey,
      apiSecret,
      ...options,
    });
  }
}

module.exports = Spot;
