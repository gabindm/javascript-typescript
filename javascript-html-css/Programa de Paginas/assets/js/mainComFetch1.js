const request = (obj) => {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open(obj.method, obj.url, true); //(Método GET, URL, true = assíncrono)
    xhr.send(); //se fosse POST, preencheriamos esse send()

    xhr.addEventListener("load", () => {
      //recebemos a resposta do servidor
      if (xhr.status >= 200 && xhr.status < 300) {
        //requisicoes de sucesso
        resolve(xhr.responseText);
      } else {
        reject(xhr.statusText); //requisicoes de erro
      }
    });
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

async function carregaPagina(el) {
  try {
    const href = el.getAttribute("href"); //pegamos o link clicado
    //console.log(href);
    const response = await fetch(href);
    const html = await response.text();

    if (response.status !== 200) {
      throw new Error("EXEMPLO: ERRO 404");
    }
    carregaResultado(html);
  } catch (e) {
    console.log("Erro:", e);
  }
}

function carregaResultado(response) {
  const resultado = document.querySelector(".resultado"); //classe
  resultado.innerHTML = response;
}
