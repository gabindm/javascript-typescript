const fs = require("fs").promises;
const path = require("path");

const txtPath = path.resolve(__dirname, "..", "teste.txt");
fs.writeFile(txtPath, "Frase 9", { flag: "w", encoding: "utf8" });
console.log("Arquivo criado no path:", txtPath);

const jsonPath = path.resolve(__dirname, "..", "teste.json");

const pessoas = [
  { nome: "gabi", idade: 28 },
  { nome: "raphaela", idade: 35 },
  { nome: "bacon", idade: 2 },
];

//const json = JSON.stringify(pessoas); //converte pra json sem identacao
const json = JSON.stringify(pessoas, "", 2);

fs.writeFile(jsonPath, json, { flag: "w", encoding: "utf8" });
console.log("Arquivo criado no path:", jsonPath);
