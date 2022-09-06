const retornaHora = () => {
  const data = new Date();
  return data.toLocaleTimeString("pt-BR", {
    hour12: false, //remove am/pm
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });
};

funcaoDoSetInterval = () => console.log(retornaHora());

const timer = setInterval(funcaoDoSetInterval, 1000); //vai executar funcao a cada 1 segundo (1000 milisegundos)

funcaoDoTimeOut = () => clearInterval(timer);

setTimeout(funcaoDoTimeOut, 5000); //vai parar de executar após 10 segundos.

setTimeout(() => console.log("Só apareço depois de 6'':)"), 6000);
