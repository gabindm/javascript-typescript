function retornaFuncao() {
  const nome = "Gabriela";
  return () => nome;
}
const funcao = retornaFuncao();
console.log(funcao());
/* -------------------------- */

function retornaFuncao1(nome) {
  return () => nome;
}
const funcao1 = retornaFuncao1("Gabi");
console.log(funcao1());
