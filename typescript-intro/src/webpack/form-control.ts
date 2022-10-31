import isEmail from 'validator/lib/isEmail';

const SHOW_ERROR_MESSAGE = 'show-error-message';

const form = document.querySelector('.form') as HTMLFormElement;
const username = document.querySelector('.username') as HTMLInputElement;
const email = document.querySelector('.email') as HTMLInputElement;
const password = document.querySelector('.password') as HTMLInputElement;
const password2 = document.querySelector('.password2') as HTMLInputElement;

form.addEventListener('submit', function (event: Event) {
  event.preventDefault(); //não atualizar página ao enviar
  console.log('Enviando...');
  hideErrorMessages(this);
  checkForEmptyFields(username, email, password, password2);
  checkEmail(email);
  checkPasswords(password, password2);
  if (sendForm(this)) {
    console.log('Formulário enviado com sucesso.');
  }
});

function hideErrorMessages(form: HTMLFormElement): void {
  form.querySelectorAll('.' + SHOW_ERROR_MESSAGE).forEach((item) => item.classList.remove(SHOW_ERROR_MESSAGE));
}

function showErrorMessage(input: HTMLInputElement, msg: string): void {
  const formFields = input.parentElement as HTMLDivElement;
  const errorMessage = formFields.querySelector('.error-message') as HTMLSpanElement;
  errorMessage.innerText = msg;
  formFields.classList.add(SHOW_ERROR_MESSAGE); //incluir a clase de mensagem de erro, mostrando o erro pro user
}

function checkForEmptyFields(...inputs: HTMLInputElement[]) {
  inputs.forEach((input) => {
    if (!input.value) {
      showErrorMessage(input, 'Campo não pode ser vazio.');
    }
  });
}

function checkEmail(input: HTMLInputElement): void {
  if (!isEmail(input.value)) {
    showErrorMessage(input, 'Email inválido.');
  }
}

function checkPasswords(password1: HTMLInputElement, password2: HTMLInputElement) {
  if (password1.value != password2.value) {
    showErrorMessage(password2, 'Senhas estão diferentes.');
  }
}
function sendForm(form: HTMLFormElement): boolean {
  let sendForm = true;

  form.querySelectorAll('.' + SHOW_ERROR_MESSAGE).forEach(() => (sendForm = false));

  return sendForm;
}

//showErrorMessage(username, 'BLABLABLA');
//hideErrorMessages(form);
