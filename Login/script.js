let email = document.getElementById('email');
let senha = document.getElementById('senha');
let mensagemErrorEmail = document.querySelector('.mensagem_error_email');
let mensagemErrorSenha = document.querySelector('.mensagem_error_senha');
let btnEnvio = document.getElementById('envio-btn');

// Verificação

email.addEventListener('blur', () => {
    if(email.value == ""){
        email.classList.add('incorreto');
        mensagemErrorEmail.style.display = 'block';
    } else {
        email.classList.remove('incorreto');
        mensagemErrorEmail.style.display = 'none'
    }
});

senha.addEventListener('blur', () => {
    if(senha.value == '' ){
        senha.classList.add('incorreto');
        mensagemErrorSenha.style.display = 'block';
    } else {
        senha.classList.remove('incorreto');
        mensagemErrorSenha.style.display = 'none';
    }
});

// Botões

btnEnvio.addEventListener('click', () =>{
    btnEnvio.style.background = 'green'
});