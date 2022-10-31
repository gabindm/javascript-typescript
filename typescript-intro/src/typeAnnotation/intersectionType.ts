type TemNome = { nome: string };
type TemSobrenome = { sobrenome: string };
type TemIdade = { idade: number };

type PessoaUnion = TemNome | TemSobrenome | TemIdade;
const pessoaUnion: PessoaUnion[] = [
  {
    nome: 'Gabriela',
    idade: 28,
  },
];
console.log(pessoaUnion);

type PessoaIntersection = TemNome & TemSobrenome & TemIdade;
const pessoaIntersection: PessoaIntersection = {
  nome: 'Gabriela',
  idade: 28,
  sobrenome: 'Nery',
}; //precisa ter as 3 chaves se n dá erro
console.log(pessoaIntersection);

type AB = 'A' | 'B';
type AC = 'A' | 'C';
type intersecao = AB & AC;

const result: intersecao = 'A'; //qualquer outro valor daria erro
