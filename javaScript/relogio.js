//Armazenando o elemento HTML para exibir o horário e data
let horario = document.getElementById("horario-resposta");
let data = document.getElementById("data-resposta");
let dia = document.getElementById("dia-resposta");

function armazenaHorarioAtual() {
    //Armazenando o horário atual
    let horarioAtual = new Date();
    let horarioAtualLocal = horarioAtual.toLocaleTimeString();
    horario.textContent = horarioAtualLocal;
}

function armazenaDataAtual() {
    //Armazenando a data atual
    let dataAtual = new Date();
    let dataAtualLocal = dataAtual.toLocaleDateString();
    let diaAtual = dataAtual.getDay();


    data.textContent = dataAtualLocal;
    dia.textContent = diaAtual;
}

//chamar as funções a cada 1 segundo
setInterval(armazenaHorarioAtual, 1);
setInterval(armazenaDataAtual, 1);