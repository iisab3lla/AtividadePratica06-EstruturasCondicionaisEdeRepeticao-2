// Crie um algoritmo que armazene três valores, para cada um dos
// lados de um triângulo: A, B e C. Verifique se os lados fornecidos
// formam realmente um triângulo. Se formar, deve mostrar no console
// o tipo de triângulo: isósceles, escaleno ou equilátero.
// a. Para verificar se os lados fornecidos formam um triângulo: A <
// B + C e B < A + C e C < A + B.
// b. Triângulo isósceles: possui dois lados iguais (A=B ou A=C ou
// B=C);
// c. Triângulo escaleno: possui todos os lados diferentes (A<>B e
// B<>C e A<>C);
// d. Triângulo equilátero: possui todos os lados iguais (A=B e
// B=C);

let ladoA = parseFloat(prompt("Digite o valor do lado A: "));
let ladoB = parseFloat(prompt("Digite o valor do lado B: "));
let ladoC = parseFloat(prompt("Digite o valor do lado C: "));

if (ladoA < (ladoB + ladoC)){
    if(ladoB < (ladoA + ladoC)){
        if (ladoC < (ladoA + ladoB)){
            if(ladoA == ladoB && ladoB == ladoC){
                document.write("Triângulo equilátero:")
            }
            else if (ladoA == ladoB && ladoA == ladoC && ladoB == ladoC){
                document.write(`Triângulo isósceles:`)
            }else{
                document.write(`Triângulo escaleno:`)
            }
        }
    }
}