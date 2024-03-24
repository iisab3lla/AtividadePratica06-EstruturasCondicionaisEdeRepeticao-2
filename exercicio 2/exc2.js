// Para o mesmo exercício acima insira mais uma variável a
// condicional, além de saber se o motorista tem 18 anos ou mais,
// temos que saber também se ele é habilitado para dirigir. Caso ele
// tenha idade maior ou igual a 18 anos e possua habilitação, insira no
// html “Pode dirigir” caso contrário imprima “Não pode dirigir”.

let idade = parseInt (prompt("Insira a sua idade!"));
let habilitacao = (prompt(`Você possui habilitação? (Sim ou Não)`));

if(idade >= 18 && habilitacao == `sim`){
    alert(`Você pode dirigir e tem habilitação`)
} else {
    alert(`Você não pode dirigir e não tem habilitação`)
};