const nome = "gabriela";
const sobrenome = "nery";

const falaNome = () => nome + " " + sobrenome;

module.exports.nome = nome;
module.exports.sobrenome = sobrenome;
module.exports.falaNome = falaNome;
//console.log(module.exports, "\n");

//forma abreviada de module.exports:
// exports.nome = nome;
// exports.sobrenome = sobrenome;
// exports.falaNome = falaNome;
// this.novaChave = "jhdkjash";
//console.log(exports);
