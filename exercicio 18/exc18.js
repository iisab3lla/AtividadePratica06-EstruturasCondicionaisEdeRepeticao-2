// Uma loja de eletrodomésticos estabeleceu as seguintes
// modalidades de pagamento para a venda de suas mercadorias:

// A vista = 2,5% de desconto
// 2 a 5 vezes = sem desconto ou acrescimo
// 6 a 10 = juros de 6%
// 11 a 15 = juros de 13%

// Escreva um algoritmo que armazene o preço de tabela e o número
// de vezes em que o pagamento será feito. Calcule o valor de cada
// parcela e o preço total da compra e imprima no console.


let compras = parseFloat(prompt('Digite o valor da sua compra'));
let aVista = String(prompt('Você deseja pagar à vista? Sim ou Não?')).toLowerCase();

if(`sim` === aVista){
    let aVista = compras * 0.025;
    let totalAvista = compras - aVista;
    document.write(`O total da sua compra foi de: R$${compras}. O valor após a aplicação do desconto, ficou em: RS$${totalAvista}!`);

} else{
    parcelas = parseInt(prompt('Informe o número de parcelas que deseja fazer: (Máximo de 15 parcelas!)?'));

}  if(parcelas >= 2 && parcelas <= 5){
    let totalParcela = compras / parcelas;
    document.write(`A sua compra é de: R$${compras}. E as suas parcelas são: ${parcelas}x R$${totalParcela.toFixed(2)}`);

} else if(parcelas >= 6 && parcelas <= 10){
    let juros = compras * 0.06;
    let totalParcela = (compras / parcelas) + juros;
    document.write(`A sua compra é de: R$${compras}. E as suas parcelas são: ${parcelas}x R$${totalParcela.toFixed(2)}`);

} else if(parcelas >= 11 && parcelas <= 15){
    let juros = compras * 0.13;
    let totalParcela = (compras / parcelas) + juros;
    document.write(`A sua compra é de: R$${compras}. E as suas parcelas são: ${parcelas}x R$${totalParcela.toFixed(2)}`);
};