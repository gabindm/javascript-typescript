function meuRelogio() {
  const segundosEmHorario = (segundos) => {
    const data = new Date(segundos * 1000); //tem q ser em miliseconds
    return data.toLocaleTimeString("pt-BR", {
      hour12: false,
      timeZone: "GMT",
    });
  };

  const relogio = document.querySelector(".relogio"); //se fosse id seria #relogio
  let segundos = 0;
  let timer;

  const iniciarRelogio = () => {
    timer = setInterval(() => {
      segundos++;
      relogio.innerHTML = segundosEmHorario(segundos);
    }, 1000);
  };

  document.addEventListener("click", (event) => {
    const elementoClicado = event.target;
    if (elementoClicado.classList.contains("iniciar")) {
      relogio.classList.remove("pausado");
      clearInterval(timer);
      iniciarRelogio();
    }
    if (elementoClicado.classList.contains("pausar")) {
      relogio.classList.add("pausado");
      clearInterval(timer);
    }
    if (elementoClicado.classList.contains("reiniciar")) {
      clearInterval(timer);
      relogio.classList.remove("pausado");
      relogio.innerHTML = segundosEmHorario(0);
      segundos = 0;
    }
  });
}

meuRelogio();
