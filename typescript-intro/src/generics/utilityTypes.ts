/**
 * Record
 */

const objeto1: Record<string, string | number> = {
  nome: 'Gabriela',
  sobrenome: 'Nery',
  idade: 29,
};
console.log(objeto1);

/**
 * Required
 */

type PessoaProtocol = {
  nome: string;
  sobrenome: string;
  idade?: number;
};

type PessoaRequired = Required<PessoaProtocol>;

const objeto2: PessoaRequired = {
  nome: 'Gabriela',
  sobrenome: 'Nery',
  idade: 29,
};
console.log(objeto2);

/**
 * Partial
 */

type PessoaPartial = Partial<PessoaProtocol>;

const objeto3: PessoaPartial = {
  nome: 'Gabriela',
};
console.log(objeto3);

/**
 * Readonly
 */

type PessoaReadonly = Readonly<PessoaProtocol>;

const objeto4: PessoaReadonly = {
  nome: 'Gabriela',
  sobrenome: 'Nery',
};
// objeto4.nome = 'Maria'; //daria erro pois é readonly
console.log(objeto4);

/**
 * Pick
 */

type PessoaPick = Pick<PessoaProtocol, 'nome'>;

const objeto5: PessoaPick = {
  nome: 'Gabriela',
};
console.log(objeto5);

/**
 * Extract
 */

type ABC = 'A' | 'B' | 'C';
type CDE = 'C' | 'D' | 'E';

type TypeExtract = Extract<ABC, CDE>;

const exemplo: TypeExtract = 'C';
console.log(exemplo);

/**
 * Exclude
 */

type TypeExclude = Exclude<ABC, CDE>;
const exemplo1: TypeExclude = 'A';
console.log(exemplo1);

/**
 * Exemplo utilizando os utility types
 */

type AccountMongo = {
  _id: string;
  nome: string;
  idade: number;
};

// type AccountAPI = {
//   id: string;
//   nome: string;
//   idade: number;
// };

type AccountAPI = Pick<AccountMongo, Exclude<keyof AccountMongo, '_id'>> & {
  id: string;
};

const accountMongo: AccountMongo = {
  _id: 'gsgfiusfiusduhfjs',
  nome: 'Gabriela',
  idade: 29,
};

function mapAccount(accountMongo: AccountMongo): AccountAPI {
  const { _id, ...data } = accountMongo;
  return { id: _id, ...data };
}

const accountAPI: AccountAPI = mapAccount(accountMongo);
console.log(accountAPI);
