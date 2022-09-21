const mongoose = require("mongoose");
const validator = require("validator");

const ContatoSchema = new mongoose.Schema({
  nome: {
    type: String,
    required: true,
  },
  sobrenome: {
    type: String,
    required: false,
    default: "",
  },
  email: {
    type: String,
    required: false,
    default: "",
  },
  telefone: {
    type: String,
    required: false,
    default: "",
  },
  criadoEm: {
    type: Date,
    default: Date.now,
  },
});

const ContatoModel = mongoose.model("Contato", ContatoSchema);

class Contato {
  constructor(body) {
    this.body = body;
    this.errors = [];
    this.contact = null;
  }

  async register() {
    this.valida();

    if (this.errors.length > 0) {
      return;
    }

    this.contato = await ContatoModel.create(this.body);
  }

  valida() {
    this.cleanUp();

    //validação
    if (this.body.email && !validator.isEmail(this.body.email)) {
      this.errors.push("Email inválido.");
    }
    if (!this.body.nome) {
      this.errors.push("Nome inválido.");
    }
    if (!this.body.email && !this.body.telefone) {
      this.errors.push("Por favor, preencha email ou telefone.");
    }
  }

  cleanUp() {
    for (const chave in this.body) {
      if (typeof this.body[chave] !== "string") {
        this.body[chave] = "";
      }
    }

    this.body = {
      nome: this.body.nome,
      sobrenome: this.body.sobrenome,
      email: this.body.email,
      telefone: this.body.telefone,
    };
  }

  static async buscaPorId(id) {
    if (typeof id !== "string") {
      return;
    }

    const foundContato = await ContatoModel.findById(id);
    return foundContato;
  }

  // async edit(id) {
  //   if (typeof id !== "string") {
  //     return;
  //   }

  //   this.valida();

  //   if (this.errors.length > 0) {
  //     return;
  //   }

  //   this.contato = await ContatoModel.findByIdAndUpdate(id, this.body, {
  //     new: true,
  //   });
  // }
}

module.exports = Contato;
