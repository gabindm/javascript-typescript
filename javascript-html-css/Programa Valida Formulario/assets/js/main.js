class ValidaFormulario {
  constructor() {
    this.formulario = document.querySelector(".formulario");
    this.eventos();
  }

  eventos() {
    this.formulario.addEventListener("submit", (e) => {
      this.handleSubmit(e);
    });
  }

  handleSubmit(e) {
    e.preventDefault(); //prevenir que form seja enviado com erro
    //console.log("Fomulario nao enviado.");
    const camposValidos = this.camposValidos();
    const senhasValidas = this.senhasValidas();

    if (camposValidos && senhasValidas) {
      alert("Formulário enviado.");
      this.formulario.submit();
    }
  }

  camposValidos() {
    let valid = true;

    for (let errorText of this.formulario.querySelectorAll(".error-text")) {
      errorText.remove(); //para nao ficar repetindo o erro na tela
    }

    for (let campo of this.formulario.querySelectorAll(".validar")) {
      //console.log(campo); //pega todos os campos do formulario que contem a classe validar
      const label = campo.previousElementSibling.innerText;

      //Nenhum campo pode estar vazio
      if (!campo.value) {
        //se campo estiver vazio
        this.criaErro(campo, `O campo ${label} nao pode estar vazio`);
        valid = false;
      }

      if (campo.classList.contains("cpf")) {
        if (!this.validaCPF(campo)) {
          valid = false;
        }
      }

      if (campo.classList.contains("usuario")) {
        if (!this.validaUsuario(campo)) {
          valid = false;
        }
      }
    }

    return valid;
  }

  criaErro(campo, msg) {
    //cria msg de erro no html, abaixo do campo
    const div = document.createElement("div");
    div.innerHTML = msg;
    div.classList.add("error-text");
    campo.insertAdjacentElement("afterend", div);
  }

  validaCPF(campo) {
    let valid = true;
    const cpf = new ValidaCPF(campo.value);

    if (!cpf.valida()) {
      this.criaErro(campo, "CPF Inválido.");
      valid = false;
    }

    return valid;
  }

  validaUsuario(campo) {
    let valid = true;
    //Usuário deverá ter entre 3 e 12 caracteres
    const usuarioLength = campo.value.length;

    if (usuarioLength < 3 || usuarioLength > 12) {
      this.criaErro(campo, "Usuario inválido.");
      valid = false;
    }

    //Usuário só poderá conter letras e/ou números
    const usuario = campo.value;

    if (!usuario.match(/^[a-zA-Z0-9]+$/g)) {
      this.criaErro(campo, "Usuario precisa conter letras e/ou números.");
      valid = false;
    }

    return valid;
  }

  senhasValidas() {
    let valid = true;

    const senha = this.formulario.querySelector(".senha");
    const repetirSenha = this.formulario.querySelector(".repetir-senha");

    //senha e repetir senha precisam ser iguais
    if (senha.value !== repetirSenha.value) {
      this.criaErro(senha, "Senhas estão diferente.");
      this.criaErro(repetirSenha, "Senhas estão diferente.");
      valid = false;
    }

    //Senha precisa ter entre 6 e 12 caracteres
    if (senha.value.length < 6 || senha.value.length > 12) {
      this.criaErro(senha, "Senha inválida.");
      valid = false;
    }

    return valid;
  }
}

const valida = new ValidaFormulario();
