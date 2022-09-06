let x = parseFloat(prompt('Digite um número:'));
let idNumeroTitulo = document.getElementById('numero-titulo');
let idTexto = document.getElementById('texto');

idNumeroTitulo.innerHTML += x;
idTexto.innerHTML += `<p>A raiz quadrada de ${x} é ${x**0.5}</p>`;
idTexto.innerHTML += `<p>${x} é inteiro? ${Number.isInteger(x)}</p>`;
idTexto.innerHTML += `<p>${x} é NaN? ${Number.isNaN(x)}</p>`;
idTexto.innerHTML += `<p>${x} arredondado para cima é ${Math.ceil(x)}</p>`;
idTexto.innerHTML += `<p>${x} arredondado para baixo é ${Math.floor(x)}</p>`;
idTexto.innerHTML += `<p>${x} com duas casas decimais é ${x.toFixed(2)}</p>`;