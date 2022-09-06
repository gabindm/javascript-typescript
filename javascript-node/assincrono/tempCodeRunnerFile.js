async function executa() {
  const fase1 = await esperaAPI("Fase 1", aleatorio(0, 3000));
  console.log(fase1);
  const fase2 = await esperaAPI("Fase 2", aleatorio(0, 3000));
  console.log(fase2);
  const fase3 = await esperaAPI("Fase 3", aleatorio(0, 3000));
  console.log(fase3);
  console.log("Terminamos a execução em ordem!");
}