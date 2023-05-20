const horario = document.getElementById("horario-resposta");
const data = document.getElementById("data-resposta");

function armazenaHorarioAtual() {
    //Armazenando o horário atual
    const horarioAtual = new Date();
    const horarioAtualLocal = horarioAtual.toLocaleTimeString();
    horario.textContent = horarioAtualLocal;
}

function armazenaDataAtual() {
    //Armazenando a data atual
    const dataAtual = new Date();
    const dataAtualLocal = dataAtual.toLocaleDateString();
    data.textContent = dataAtualLocal;
}

setInterval(armazenaHorarioAtual, 1000);
setInterval(armazenaDataAtual, 1000);