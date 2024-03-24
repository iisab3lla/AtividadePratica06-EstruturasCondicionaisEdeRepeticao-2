// Crie uma variável para armazenar o salário do usuário e atribua um
// valor a essa variável. Crie a validação necessária:
// - Caso o salário seja MENOR que R$ 1.903,98, insira no html
// "ISENTO DE IR";
// - caso contrário insira "TRIBUTADO NO IR".

let salario = parseFloat (prompt("Insira o seu salário!"))

if (salario <= `1.903.93`){
    document.write(`ISENTO DE IR. Seu salário é de: ${salario}`)
} else{
    document.write(`TRIBUTADO NO IR. Seu salário é de: ${salario}`)
}

