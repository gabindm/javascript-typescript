function contadorSegundos(segundos) {
  const data = new Date(segundos * 1000); //tem q ser em miliseconds
  return data.toLocaleTimeString("pt-BR", {
    hour12: false,
    timeZone: 'GMT'
  });
}
console.log(contadorSegundos(10));