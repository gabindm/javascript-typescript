import geraSenha from "./geradores";

const senhaGerada = document.querySelector(".senha-gerada");
const qtdCaractetes = document.querySelector(".qtd-caracteres");
const maiusculas = document.querySelector(".cb-maiusculas");
const minusculas = document.querySelector(".cb-minusculas");
const numeros = document.querySelector(".cb-numeros");
const simbolos = document.querySelector(".cb-simbolos");
const gerarSenha = document.querySelector(".gerar-senha");

export default () => {
  gerarSenha.addEventListener("click", () => {
    senhaGerada.innerHTML = gera();
  });
};

function gera() {
  const senha = geraSenha(
    qtdCaractetes.value,
    maiusculas.checked,
    minusculas.checked,
    numeros.checked,
    simbolos.checked
  );

  return senha || "Nada selecionado.";
}
