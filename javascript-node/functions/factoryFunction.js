function criaPessoa(nome, sobrenome, altura, peso) {
  return {
    nome,
    sobrenome,
    fala: function (dialogo) {
      return `${this.nome} está falando: \n  - ${dialogo}`;
    },
    altura,
    peso,
    imc: function () {
      return (this.peso / this.altura ** 2).toFixed(2);
    },
  };
}

const p1 = criaPessoa("Gabriela", "Nery", 1.62, 53);
console.log(p1.fala("oieee!"));
console.log("O IMC é:", p1.imc());
