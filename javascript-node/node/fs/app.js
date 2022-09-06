const path = require("path");
//const escreverArquivos = require("./modules/escreverArquivos");
const lerArquivos = require("./modules/lerArquivos");

// const txtPath = path.resolve(__dirname, "test.txt");
const jsonPath = path.resolve(__dirname, "test.json");

// const pessoas = [
//   { nome: "gabi", idade: 28 },
//   { nome: "raphaela", idade: 35 },
//   { nome: "bacon", idade: 2 },
// ];

// const json = JSON.stringify(pessoas, "", 2); //transforma js em json

// escreverArquivos(txtPath, "Test 1");
// escreverArquivos(jsonPath, json);

async function read(filePath) {
  const data = await lerArquivos(filePath);
  renderiza(data);
}

function renderiza(data) {
  console.log(data); //printa json

  data = JSON.parse(data); //transforma json em js
  console.log(data); //printa js

  for (obj of data) {
    console.log(obj.nome);
  }

  data.forEach((element) => console.log(element.idade));
}

read(jsonPath);
