// Tabela ASCII:
// maiuscula: 65 a 90
// minuscula: 97 a 122
// numeros: 48 a 57

const rand = (min, max) => Math.floor(Math.random() * (max - min) + min);

const geraMaiuscula = () => String.fromCharCode(rand(65, 91));

const geraMinuscula = () => String.fromCharCode(rand(97, 123));

const geraNumero = () => String.fromCharCode(rand(48, 57));

const simbolos = ",.:~^[]{}()*!@#$%-_=+;<>";
const geraSimbolo = () => simbolos[rand(0, simbolos.length)];

export default function geraSenha(
  qtd,
  maiusculas,
  minusculas,
  numeros,
  simbolos
) {
  const senhaArray = [];
  qtd = Number(qtd);

  for (let i = 0; i < qtd; i++) {
    maiusculas && senhaArray.push(geraMaiuscula());
    minusculas && senhaArray.push(geraMinuscula());
    numeros && senhaArray.push(geraNumero());
    simbolos && senhaArray.push(geraSimbolo());
  }

  return senhaArray.join("").slice(0, qtd);
}

geraSenha(6, true, true, true, true);
