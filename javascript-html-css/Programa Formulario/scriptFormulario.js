function escopo () {
    const formulario = document.querySelector('.formulario'); //se fosse id seria #formulario
    const resultado = document.querySelector('.resultado');
    const pessoas = [];
    
    function recebeEventoFormulario(evento) {   //quando clicar o botao, vai fazer:
        evento.preventDefault();                //previne a pagina de atualizar pós apertar botao, que é um comportamento default
        const nome = formulario.querySelector('.nome');
        const sobrenome = formulario.querySelector('.sobrenome');
        const peso = formulario.querySelector('.peso');
        const altura = formulario.querySelector('.altura');
        //alert('Formulario enviado.');
        //console.log(nome.value, sobrenome.value, peso.value, altura.value);
        pessoas.push({
            nome: nome.value, 
            sobrenome: sobrenome.value, 
            peso: peso.value, 
            altura: altura.value
        });
        console.log(pessoas);

        resultado.innerHTML += `<p>${nome.value}`+ ' ' + `${sobrenome.value}` + `</br>${peso.value}</br>${altura.value}</p>`
    }
    formulario.addEventListener('submit', recebeEventoFormulario);
}
escopo();