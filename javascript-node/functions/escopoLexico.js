const nome = "Gabriela";

function falaNome() {
  console.log(nome); //variável é global então pode ser acessada
}
falaNome();

function usaFalaNome() {
  const nome = "Bacon";
  falaNome();
}
usaFalaNome();
