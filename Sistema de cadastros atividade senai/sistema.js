// Usei o dia 21 como uma data de exemplo do evento
//Data do evento
const data = ["21"];
var participantes = ["80"]
var datadecadastro = ["03"];

const idade = ["18"];
var idadedoparticipante = ["18"];

if(idade > idadedoparticipante){
    console.log("Idade inválida")
}

if(data < datadecadastro){
    console.log("Data de cadastro inválida")
}

if(participantes > 100){
    console.log("Quantidade de participantes excedida")
    console.log(participantes)
}

if(idade <= idadedoparticipante, data > datadecadastro, participantes < 100){
    console.log("O cadastro pode ser realizado")
participantes++
console.log(participantes)
}