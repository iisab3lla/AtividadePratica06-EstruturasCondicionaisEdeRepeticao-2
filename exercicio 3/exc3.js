//Utilizando o IF, ELSE, ELSE IF crie uma estrutura para receber um
//número de 1 a 7 e imprimir no console o dia da Semana. Para este
//exercício assumimos que o dia 1 é Domingo, dia 2 é segunda e assim
//por diante. Caso o número recebido não esteja neste intervalo
//imprimir “Dia não reconhecido”.

let diasSemana = parseInt (prompt("Digite um número de 1 a 7 e te darei o dia da semana!"));
 
if (diasSemana == 1){
    alert(`O número inserido é igual a Domingo!`)
} else if(diasSemana == 2){
    alert(`O número inserido é igual a Segunda-Feira!`)
}  else if(diasSemana == 3){
    alert(`O número inserido é igual a Terça-Feira!`)
} else if(diasSemana == 4){
    alert(`O número inserido é igual a Quarta-Feira!`)
} else if(diasSemana == 5){
    alert(`O número inserido é igual a Quinta-Feira!`)
} else if(diasSemana == 6){
    alert(`O número inserido é igual a Sexta-Feira!`)
} else if(diasSemana == 7){
    alert(`O número inserido é igual a Sábado!`)
} else {
    alert(`Insira um número válido`)
}












