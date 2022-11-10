export abstract class Personagem {
  protected abstract emoji: string;

  constructor(protected nome: string, protected ataque: number, protected vida: number) {}

  atacar(personagem: Personagem): void {
    console.log(this.emoji + ` ${this.nome} está atacando o ${personagem.nome}...`);
    this.gritoDeAtaque();
    personagem.perderVida(this.ataque);
  }

  perderVida(ataque: number): void {
    this.vida -= ataque;
    console.log(this.emoji + ` ${this.nome} agora tem ${this.vida} vidas...`);
  }

  abstract gritoDeAtaque(): void;
}

class Guerreiro extends Personagem {
  protected emoji = '\u{1F9DD}';

  gritoDeAtaque(): void {
    console.log(this.emoji + ' It’s a-me, Mario!');
  }
}
class Monstro extends Personagem {
  protected emoji = '\u{1F9DF}';

  gritoDeAtaque(): void {
    console.log(this.emoji + ' It’s a-me, King Koopa!');
  }
}

// const exemplo = new Personagem('exemplo', 0, 0); //classe abstrada não pode ser instanciada
const mario = new Guerreiro('Mario', 10, 100);
const rei = new Monstro('Rei Bowser Koopa', 10, 100);

mario.atacar(rei);
rei.atacar(mario);
