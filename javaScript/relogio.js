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
    //Armazenando a data atual e o dia
    let dataAtual = new Date();
    let dataAtualLocal = dataAtual.toLocaleDateString();
    let diaAtual = dataAtual.getDay();
    let diasDaSemana = ["Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado"];

    data.textContent = dataAtualLocal;
    dia.textContent = diasDaSemana[diaAtual]; //pega o dia pelo índice
}

//chamar as funções a cada 1 segundo
setInterval(armazenaHorarioAtual, 1);
setInterval(armazenaDataAtual, 1);