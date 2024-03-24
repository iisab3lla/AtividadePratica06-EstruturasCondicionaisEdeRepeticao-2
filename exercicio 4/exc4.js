// Reescreva o exercício 3, utilizando apenas o SWITCH.

let diasSemana = (prompt("Digite um número de 1 a 7 e te darei o dia da semana!"));
 
switch(diasSemana){
    case `1`:
        alert(`O número inserido corresponde a Domingo!`)
    break;
    case `2`:
        alert(`O número inserido corresponde a Segunda-Feira!`)
    break;
    case `3`:
        alert(`O número inserido corresponde a Terça-Feira!`)
    break;
    case `4`:
        alert(`O número inserido corresponde a Quarta-Feira!`)
    break;
    case `5`:
        alert(`O número inserido corresponde a Quinta-Feira!`)
    break;
    case `6`:
        alert(`O número inserido corresponde a Sexta-Feira!`)
    break;
    case `7`:
        alert(`O número inserido corresponde a Sábado!`)
    break;
    default:
        alert(`Insira um valor válido`)
};