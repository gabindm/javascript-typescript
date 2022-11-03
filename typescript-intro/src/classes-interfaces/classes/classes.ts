class Empresa {
  public readonly nome: string; //já eh public por defaut, entao pode ser excluido
  protected readonly colaboradores: Colaborador[] = []; //readonly Colaborador[]=[] não permitiria incluir novos colaboradores.
  private readonly cnpj: string;

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

class Speck extends Empresa {
  constructor() {
    super('Speck Haus', '7321878263472');
  }

  popColaborador(): Colaborador | string {
    const colaborador = this.colaboradores.pop();
    if (colaborador) return colaborador;
    else return 'Não há colaborador a ser removido.';
  }
}

class Colaborador {
  constructor(public readonly nome: string, public readonly sobrenome: string, private readonly cpf: string) {}
}

const speckHaus = new Speck();
const colaborador1 = new Colaborador('Gabi', 'Nery', '10204916470');
const colaborador2 = new Colaborador('Maria', 'Luiza', '32173613286');
const colaborador3 = new Colaborador('Fabio', 'Medeiros', '87219873182');
speckHaus.adicionaColaborador(colaborador1);
speckHaus.adicionaColaborador(colaborador2);
speckHaus.adicionaColaborador(colaborador3);
console.log('Colaborador removido:', speckHaus.popColaborador());
console.log('Colaboradores:');
speckHaus.mostrarColaboradores();
