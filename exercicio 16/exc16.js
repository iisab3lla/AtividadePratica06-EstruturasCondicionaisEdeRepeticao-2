// Escreva um algoritmo que armazene o ano atual e o ano de
// nascimento de uma pessoa. Escrever uma mensagem no console
// que diga se ela poderá ou não votar este ano (não é necessário
// considerar o mês em que a pessoa nasceu).


let nascimento = Number (prompt("Digite o ano que nasceu: "));
let ano = 2024;

let calculo = ano - nascimento;

if (calculo >= 18){
    document.write(`Você pode votar!`);
}else{
    document.write(`Você não pode votar!`);
}