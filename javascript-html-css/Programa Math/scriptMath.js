let x = parseFloat(prompt('Digite um número:'));

let idNumeroTitulo = document.getElementById('numero-titulo')
idNumeroTitulo.innerHTML = x;

let idRaiz = document.getElementById('raiz');
idRaiz.innerHTML = x**0.5;

let idEhInteiro = document.getElementById('ehInteiro');
idEhInteiro.innerHTML = Number.isInteger(x);

let idEhNan = document.getElementById('ehNaN');
idEhNan.innerHTML = Number.isNaN(x);

let idRoundCima = document.getElementById('roundCima');
idRoundCima.innerHTML = Math.ceil(x);

let idRoundBaixo = document.getElementById('roundBaixo');
idRoundBaixo.innerHTML = Math.floor(x);

let idDoisDec = document.getElementById('doisDec');
idDoisDec.innerHTML = x.toFixed(2);