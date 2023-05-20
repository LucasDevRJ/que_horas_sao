//Armazenando o elemento HTML para exibir o horário e data
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

//chamar as funções a cada 1 segundo
setInterval(armazenaHorarioAtual, 1000);
setInterval(armazenaDataAtual, 1000);