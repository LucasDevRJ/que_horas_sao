//Armazenando o elemento HTML para exibir o horário e data
var horario = document.getElementById("horario-resposta");
var data = document.getElementById("data-resposta");
var dia = document.getElementById("dia-resposta");
var body = document.querySelector("body");

function armazenaHorarioAtual() {
    //Armazenando o horário atual
    let horarioAtual = new Date();
    let horarioAtualLocal = horarioAtual.toLocaleTimeString();
    let horas = horarioAtual.getHours();
    horario.textContent = horarioAtualLocal;
    alteraImagemDeFundo(horas);
}

function alteraImagemDeFundo(horas) {
    if (horas >= 6 && horas < 12) {
        body.classList.add("fundo-manha");
    } else if (horas > 12 && horas < 18) {
        body.classList.add("fundo-tarde");
    } else {
        body.classList.add("fundo-noite");
    }
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
