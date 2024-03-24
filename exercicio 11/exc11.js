// Utilizando Switch, faça um programa que pergunte em que turno
// você estuda. Peça para digitar “M” para matutino ou “V” para
// vespertino ou “N” para noturno. Mostre um alerta com a mensagem
// “Bom dia!” ou “Boa tarde” ou “Boa Noite” ou “Valor inválido”,
// conforme o caso.

let turnos = (prompt("Informe o turno que você estuda! (M para matutino, V para vespertino e N para noturno)")).toUpperCase()

switch(turnos){
    case `M`:
        alert(`Bom dia!`)
    break;
    case `V`:
        alert(`Boa tarde!`)
    break;
    case `N`:
        alert(`Boa noite!`)
    break;
    default:
        alert(`Valor inválido`)
};