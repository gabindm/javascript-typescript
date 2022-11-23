type VotationOption = {
  numberOfVotes: number;
  option: string;
};

export class Votation {
  private _votationOptions: VotationOption[] = [];

  constructor(public question: string) {}

  addVotationOption(votationOption: VotationOption): void {
    this._votationOptions.push(votationOption);
  }

  vote(votationIndex: number): void {
    if (!this._votationOptions[votationIndex]) return;
    this._votationOptions[votationIndex].numberOfVotes += 1;
  }

  get votationOptions(): VotationOption[] {
    return this._votationOptions;
  }
}

export class VotationApp {
  private votations: Votation[] = [];

  addVotation(votation: Votation): void {
    this.votations.push(votation);
  }

  showVotations(): void {
    for (const votation of this.votations) {
      console.log(votation.question);
      for (const votationOption of votation.votationOptions) {
        console.log(votationOption.option, votationOption.numberOfVotes);
      }
      console.log('###\n');
    }
  }
}
const votationApp = new VotationApp();

const votation1 = new Votation('Qual a sua linguaguem de programação favorita?');
votation1.addVotationOption({ numberOfVotes: 0, option: '0 - Javascript' });
votation1.addVotationOption({ numberOfVotes: 0, option: '1 - C' });
votation1.addVotationOption({ numberOfVotes: 0, option: '2 - Java' });
votation1.addVotationOption({ numberOfVotes: 0, option: '3 - Python' });

votationApp.addVotation(votation1);

votation1.vote(0);
votation1.vote(3);
votation1.vote(2);

const votation2 = new Votation('Qual a sua cor favorita?');
votation2.addVotationOption({ numberOfVotes: 0, option: '0 - Branco' });
votation2.addVotationOption({ numberOfVotes: 0, option: '1 - Preto' });
votation2.addVotationOption({ numberOfVotes: 0, option: '2 - Rosa' });
votation2.addVotationOption({ numberOfVotes: 0, option: '3 - Azul' });

votationApp.addVotation(votation2);

votation2.vote(0);
votation2.vote(1);
votation2.vote(2);

votationApp.showVotations();
