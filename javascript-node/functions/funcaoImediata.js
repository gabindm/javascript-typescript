//IIFE = Immediately Invoked Function Expression

(function (idade, peso, altura) {
  const nome = "Gabriela";
  const nomeCompleto = (sobrenome) => nome + " " + sobrenome;
  const falaNome = () => console.log(nomeCompleto("Nery"));
  falaNome();
})(28, 52, 1.62);

const nome = "outra coisa";
console.log(nome);
