const horario = document.getElementById("horario");

//Armazenando o horário atual
const horarioAtual = new Date();
const horarioAtualLocal = horarioAtual.toLocaleTimeString();

horario.textContent = horarioAtualLocal;

console.log(horarioAtualLocal);

//Armazenando a data atual
const dataAtual = new Date();
const dataAtualLocal = dataAtual.toLocaleDateString();

console.log(dataAtualLocal);