export class Empresa {
  public readonly nome: string; //já eh public por defaut, entao pode ser excluido
  private readonly colaboradores: Colaborador[] = [];
  protected readonly cnpj: string;

  constructor(nome: string, cnpj: string) {
    this.nome = nome;
    this.cnpj = cnpj;
  }

  adicionaColaborador(colaborador: Colaborador): void {
    this.colaboradores.push(colaborador);
  }

  mostrarColaboradores(): void {
    for (const colaborador of this.colaboradores) {
      console.log(colaborador);
    }
  }
}

export class Colaborador {
  constructor(public readonly nome: string, public readonly sobrenome: string, private readonly cpf: string) {}
}

const empresa1 = new Empresa('Gabriela Company', '732187');
const colaborador1 = new Colaborador('Gabi', 'Nery', '10204916470');
const colaborador2 = new Colaborador('Maria', 'Luiza', '32173613286');
const colaborador3 = new Colaborador('Fabio', 'Medeiros', '87219873182');
empresa1.adicionaColaborador(colaborador1);
empresa1.adicionaColaborador(colaborador2);
empresa1.adicionaColaborador(colaborador3);
console.log(empresa1.mostrarColaboradores());
