import validator from "validator";
import isEmail from "validator/lib/isEmail";

export default class Contato {
  constructor(formClass) {
    this.form = document.querySelector(formClass);
  }

  init() {
    this.events();
  }

  events() {
    if (!this.form) {
      return;
    }

    this.form.addEventListener("submit", (e) => {
      e.preventDefault();
      this.validate(e);
    });
  }

  validate(e) {
    const el = e.target;
    const nomeInput = el.querySelector('input[name="nome"]');
    const sobrenomeInput = el.querySelector('input[name="sobrenome"]');
    const emailInput = el.querySelector('input[name="email"]');
    const telefoneInput = el.querySelector('input[name="telefone"]');
    let error = false;

    if (emailInput.value.length > 0 && !validator.isEmail(emailInput.value)) {
      alert("Email inválido");
      error = true;
    }

    if (!nomeInput.value.length) {
      alert("Nome inválido.");
      error = true;
    }

    if (emailInput.value.length <= 0 && telefoneInput.value.length <= 0) {
      alert("Preencha email ou telefone.");
      error = true;
    }

    if (!error) {
      el.submit();
    }
  }
}
