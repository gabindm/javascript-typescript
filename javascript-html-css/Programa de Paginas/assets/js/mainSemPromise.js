const request = (obj) => {
  const xhr = new XMLHttpRequest();
  xhr.open(obj.method, obj.url, true); //(Método GET, URL, true = assíncrono)
  xhr.send(); //se fosse POST, preencheriamos esse send()

  xhr.addEventListener("load", () => {
    //recebemos a resposta do servidor
    if (xhr.status >= 200 && xhr.status < 300) {
      //requisicoes de sucesso
      obj.success(xhr.responseText);
    } else {
      obj.error({ code: xhr.status, msg: xhr.statusText });
    }
  });
};

document.addEventListener("click", (e) => {
  const el = e.target;
  const tag = el.tagName.toLowerCase();

  if (tag === "a") {
    //tag de link é 'a'
    e.preventDefault();
    carregaPagina(el);
  }
});

function carregaPagina(el) {
  const href = el.getAttribute("href"); //pegamos o link clicado
  //console.log(href);

  const objConfig = {
    method: "GET",
    url: href,
    success(response) {
      carregaResultado(response);
    },
    error(errorText) {
      console.log(errorText);
    },
  };
  request(objConfig);
}

function carregaResultado(response) {
  const resultado = document.querySelector(".resultado"); //classe
  resultado.innerHTML = response;
}
