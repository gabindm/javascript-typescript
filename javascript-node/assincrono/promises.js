function aleatorio(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

function esperaAPI(msg, tempo) {
  return new Promise((resolve, reject) => {
    if (typeof msg !== "string") {
      reject("Mensagem inválida");
      return;
    }

    setTimeout(() => {
      resolve(msg.toUpperCase());
    }, tempo);
  });
}

//PROMISES EM CADEIA
/*esperaAPI("Promise 1", aleatorio(1000, 3000))
  .then((resposta) => {
    console.log(resposta);
    return esperaAPI("Promise 2", aleatorio(1000, 3000));
  })
  .then((resposta) => {
    console.log(resposta);
    return esperaAPI("Promise 3", aleatorio(1000, 3000));
  })
  .then((resposta) => {
    console.log(resposta);
  })
  .then(() => {
    console.log("Fim da execução em ordem!");
    return esperaAPI(123, aleatorio(1000, 3000)); //throw erro
  })
  .then((resposta) => {
    console.log(resposta);
  })
  .catch((e) => {
    console.log(e);
  });*/

//MÉTODO PROMISE.ALL()
/*const promises = [
  "Primeiro valor",
  esperaAPI("Promise 1", 3000),
  esperaAPI("Promise 2", 500),
  esperaAPI("Promise 3", 1000),
  "Fim da execução em ordem!",
  //esperaAPI(123, 1000), throw erro
];

Promise.all(promises)
  .then((valor) => {
    console.log(valor);
  })
  .catch((e) => console.log(e));*/

//MÉTODO PROMISE.RACE()
/*const promises = [
  esperaAPI("Promise 1", 3000),
  esperaAPI("Promise 2", 500),
  esperaAPI("Promise 3", 1000),
  esperaAPI(123, 4000), //throw erro
];

Promise.race(promises)
  .then((valor) => {
    console.log(valor);
  })
  .catch((e) => console.log(e));*/

//MÉTODO PROMISE.RESOLVE()
/*function baixaPagina() {
  const emCache = true;
  //const emCache = false;

  if (emCache) {
    return Promise.resolve("Pagina em Cache");
  } else {
    return esperaAPI("Baixei a página", 2000);
  }
}

baixaPagina()
  .then((dadosPagina) => {
    console.log(dadosPagina);
  })
  .catch((e) => console.log(e));*/

//MÉTODO PROMISE.REJECT()
function baixaPagina() {
  const emCache = true;
  //const emCache = false;

  if (emCache) {
    return Promise.reject("Pagina em Cache");
  } else {
    return esperaAPI("Baixei a página", 2000);
  }
}

baixaPagina()
  .then((dadosPagina) => {
    console.log(dadosPagina);
  })
  .catch((e) => console.log("ERRO:", e));
