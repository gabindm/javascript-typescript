class ValidaCPF {
  constructor(cpf) {
    this.cpf = cpf;
    this.cpfLimpo = this.cpf.replace(/\D+/g, "");
  }

  valida() {
    if (typeof this.cpfLimpo !== "string") return false;
    if (!this.cpfLimpo) return false;
    if (this.cpfLimpo.length !== 11) return false;
    if (this.ehSequencia()) return false;

    const cpfParcial = this.cpfLimpo.slice(0, -2);
    const digito1 = ValidaCPF.criaDigito(cpfParcial);
    //console.log(digito1);
    const digito2 = ValidaCPF.criaDigito(cpfParcial + digito1);
    //console.log(digito2);
    const cpfCorreto = cpfParcial + digito1 + digito2;
    return cpfCorreto === this.cpfLimpo;
  }

  static criaDigito(cpfParcial) {
    const cpfArray = cpfParcial.split(""); //string passa a ser array
    let regressivo = cpfArray.length + 1;
    let total = 0;

    for (let i of cpfArray) {
      total += regressivo * Number(i);
      regressivo--;
    }

    if (total % 11 <= 1) return "0";
    else return String(11 - (total % 11));
  }

  ehSequencia(cpf) {
    const sequencia = this.cpfLimpo[0].repeat(this.cpfLimpo.length);
    return this.cpfLimpo === sequencia;
  }
}

// let cpf = new ValidaCPF("102.049.164-70");
// if (cpf.valida()) console.log("CPF válido");
// else console.log("CPF inválido");
