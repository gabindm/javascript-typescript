//EXEMPLO:
// try {        //eh executada quando nao ha erros
//  console.log(naoExisto)
// }
// catch (e) {  //eh executada quando ha erros
//  console.log('naoExisto não existe')
//  console.log(e)
// }

//EXEMPLO:
// try {        //eh executada quando nao ha erros
//  abrir aquivo
//  manipular arquivo e gerar erro
// }
// catch (e) {  //eh executada quando ha erros
//  tratar o erro
// }
// finally {    //eh executada sempre
//  fechar o arquivo
// }

/*
//EXEMPLO:
function soma(x, y) {
  if (typeof x != "number" || typeof y != "number") {
    //throw('valores invalidos!') //interessante pra frontend
    //throw new Error('valores invalidos!') //interessante pra backend
    throw new ReferenceError("valores invalidos!"); //interessante pra backend
  }
  return x + y;
}

try {
  console.log(soma(1, "a"));
} catch (e) {
  //console.log(e)
  console.log("Mensagem de erro mais amigável pro frontend");
} finally {
  console.log("Eu sempre sou executado :)");
}
*/

//EXEMPLO:
const retornaHora = (data) => {
  if (data && !(data instanceof Date)) {
    throw new TypeError("Data enviada não é uma instancia de Date.");
  } else if (!data) {
    //throw new TypeError('Data não enviada.')
    data = new Date();
  }
  return data.toLocaleTimeString("pt-BR", {
    hour12: false, //remove am/pm
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });
};

try {
  const data = new Date("12-11-1993 00:00:00");
  const hora = retornaHora(data);
  //const hora = retornaHora();
  //const hora = retornaHora(1267831);
  console.log(hora);
} catch (e) {
  console.log(e);
} finally {
  console.log("Fim do programa!");
}
