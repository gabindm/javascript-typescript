function criaPessoa(nome, sobrenome, altura, peso) {
  return {
    nome,
    sobrenome,
    get nomeCompleto() {
      return `${this.nome} ${this.sobrenome}`;
    },
    set updateNome(valor) {
      valor = valor.split(" ");
      this.nome = valor.shift();
      this.sobrenome = valor.join(" ");
    },
  };
}

const p1 = criaPessoa("Gabriela", "Nery", 1.62, 53);
console.log(p1.nomeCompleto); //nao escreve mais nomeCompleto()
p1.updateNome = "Gabriela Nery Dantas de Medeiros";
console.log(p1.nomeCompleto);
