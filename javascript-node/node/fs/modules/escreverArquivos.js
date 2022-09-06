const fs = require("fs").promises;

const escreverArquivos = (path, data) => {
  fs.writeFile(path, data, { flag: "w", encoding: "utf8" });
  console.log("Arquivo criado no path:", path);
};

module.exports = escreverArquivos;
