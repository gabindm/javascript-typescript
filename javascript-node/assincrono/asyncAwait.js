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

/*esperaAPI("Fase 1", aleatorio(0, 3000))
  .then((valor) => {
    console.log(valor);
    return esperaAPI("Fase 2", aleatorio(0, 3000));
  })
  .then((valor) => {
    console.log(valor);
    return esperaAPI("Fase 3", aleatorio(0, 3000));
  })
  .then((valor) => {
    console.log(valor);
  })
  .then(() => {
    console.log("Terminamos a execução em ordem!");
  })
  .catch((e) => {
    console.log(2);
  });*/

async function executa() {
  try {
    const fase1 = await esperaAPI("Fase 1", aleatorio(0, 3000));
    console.log(fase1);
    const fase2 = await esperaAPI("Fase 2", aleatorio(0, 3000));
    console.log(fase2);
    const fase3 = await esperaAPI("Fase 3", aleatorio(0, 3000));
    console.log(fase3);
    console.log("Terminamos a execução em ordem!");
    const fase4 = await esperaAPI(123, aleatorio(0, 3000));
    console.log(fase4);
  } catch (e) {
    console.log(e);
  }
}

executa();
