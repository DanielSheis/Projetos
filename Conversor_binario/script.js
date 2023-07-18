let recebe = document.querySelector('#valor');
let resposta = document.querySelector('.resposta');
let traduzir = document.querySelector('.traduzir');


traduzir.addEventListener('click', function(){
    let resBinario = ''
    let bin = recebe.value
    for(let i = 0; bin == 0; i++){
        resBinario += bin % 2
        bin = bin / 2
    }
    resposta.innerText = resBinario
})
console.log(recebe.value)