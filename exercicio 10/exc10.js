// Tendo como entrada a altura e o sexo (codificado da seguinte
//     forma: 1 para sexo feminino e 2 para sexo masculino) de uma
//     pessoa, construa um programa que calcule e mostre seu peso ideal,
//     utilizando as seguintes fórmulas:
//     - para homens: (72.7 * Altura) – 58
//     - para mulheres: (62.1 * Altura) – 44.7

let genero = (prompt("Digite seu gênero!(1 para feminino e 2 para masculino)"));
let altura = parseFloat(prompt("Digite a sua altura! (Ex: 1.60)"));

switch(genero){
    case `1`:
        document.write(`Seu peso ideal é: ${(62.1 * altura) - 44.7}`)
    break;
    case `2`:
        document.write(`Seu peso ideal é: ${(72.7 * altura) - 58}`)
    break;
    default:
        document.write(`Insira um valor válido!`)
};

