function criaUsuario (nome, sobrenome, idade) {
    return {
        nome: nome,
        sobrenome: sobrenome,
        idade: idade,
        usuarioCriado() {
            console.log(`Usuário criado: ${this.nome} ${this.sobrenome}, de idade ${this.idade}.`)
        },
        idadeAtual() {
            console.log(`Minha idade é ${this.idade}.`)
        },
        incrementarIdade() {
            this.idade++;
        }
    };
}
const usuario = criaUsuario('Gabriela', 'Nery', 28);
usuario.usuarioCriado();
usuario.idadeAtual();
usuario.incrementarIdade();
usuario.idadeAtual();
