export function add(a: unknown, b: unknown) {
  return typeof a === 'number' && typeof b === 'number' ? a + b : `${a}${b}`;
}

console.log(add(1, 5));
console.log(add('1', 5));

export type Pessoa = { tipo: 'pessoa'; nome: string };
export type Animal = { tipo: 'animal'; raca: string };
export type PessoaOuAnimal = Pessoa | Animal;

export class Aluno implements Pessoa {
  tipo: 'pessoa' = 'pessoa';
  constructor(public nome: string) {}
}

function showNome(obj: PessoaOuAnimal): void {
  // 'nome' in obj ? console.log(obj.nome) : console.log('Não tem nome');
  // obj instanceof Aluno ? console.log(obj.nome) : console.log('Não tem nome');
  switch (obj.tipo) {
    case 'pessoa':
      console.log(obj.nome);
      return;
    case 'animal':
      console.log('Não tem nome');
      return;
  }
}

showNome(new Aluno('Gabriela'));

const animal: Animal = {
  tipo: 'animal',
  raca: 'cachorro',
};

showNome(animal);
