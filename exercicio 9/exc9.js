// Informe um valor a uma variável e imprima no console se o número
// é primo.

let numero = parseInt(prompt('Digite um número'));

if (numero <= 1) {
    numero = false;
}
for (let i = 2; i * i < numero; i++) {
    if (numero % i === 0) {
        alert(`O número ${numero} não é primo!`);
    break;
    } else{
        alert(`O número ${numero} é primo!`);
    }
}