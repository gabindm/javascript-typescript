function semRetorno(...args: string[]): void {
  console.log(args.join(' '));
}

semRetorno('Gabriela', 'Nery', 'Dantas', 'de', 'Medeiros');

const usuario = {
  nome: 'Gabriela',
  sobrenome: 'Nery Dantas de Medeiros',
  idade: 28,
  exibirNomeCompleto(): void {
    console.log(this.nome + ' ' + this.sobrenome);
  },
};

console.log(usuario.exibirNomeCompleto());
