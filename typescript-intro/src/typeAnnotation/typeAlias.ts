type Idade = number;

type Pessoa = {
  nome: string;
  idade: Idade;
  corPreferida?: string;
};

function imprimePessoa(pessoa: Pessoa): string {
  return `Nome: ${pessoa.nome},\nIdade: ${pessoa.idade}`;
}

console.log(imprimePessoa({ nome: 'Gabriela', idade: 28 }));
//console.log(imprimePessoa({ nome: 'Gabriela', sobrenome: 'Nery' })); //daria erro
//console.log(imprimePessoa({ nome: 'Gabriela', idade: '28' })); //daria erro

type Cores = 'Rosa' | 'Branco' | 'Preto';
type MaisCores = Cores | 'Vermelho' | 'Azul';

export function setColor(pessoa: Pessoa, cor: MaisCores) {
  pessoa.corPreferida = cor;
  return pessoa;
}

console.log(setColor({ nome: 'Gabriela', idade: 28 }, 'Rosa'));
// console.log(setColor({ nome: 'Gabriela', idade: 28 }, 'Verde')); //daria erro
