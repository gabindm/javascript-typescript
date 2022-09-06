axios("pessoas.json").then((resposta) =>
  carregaElementosNaPagina(resposta.data)
);

function carregaElementosNaPagina(json) {
  const table = document.createElement("table");

  for (let pessoa of json) {
    //console.log(pessoa);
    const tr = document.createElement("tr"); //linha

    let td1 = document.createElement("td");
    td1.innerHTML = pessoa.nome;
    tr.appendChild(td1); //add coluna td1 na linha tr

    let td2 = document.createElement("td");
    td2.innerHTML = pessoa.email;
    tr.appendChild(td2); //add coluna td2 na linha tr

    let td3 = document.createElement("td");
    td3.innerHTML = pessoa.estado;
    tr.appendChild(td3); //add coluna td3 na linha tr

    table.appendChild(tr); //add linha tr na tabela
  }

  const resultado = document.querySelector(".resultado");
  resultado.appendChild(table);
}

// fetch('pessoas.json')
//   .then(resposta => resposta.json())
//   .then(json => carregaElementosNaPagina(json));

// // axios('pessoas.json')
// //   .then(resposta => carregaElementosNaPagina(resposta.data));

// function carregaElementosNaPagina(json) {
//   const table = document.createElement('table');

//   for(let pessoa of json) {
//     const tr = document.createElement('tr');

//     let td1 = document.createElement('td');
//     td1.innerHTML = pessoa.nome;
//     tr.appendChild(td1);

//     let td2 = document.createElement('td');
//     td2.innerHTML = pessoa.idade;
//     tr.appendChild(td2);

//     table.appendChild(tr);
//   }

//   const resultado = document.querySelector('.resultado');
//   resultado.appendChild(table);
// }
