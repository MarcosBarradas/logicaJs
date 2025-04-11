/**
 * @file ex37.js
 * @discipline React
 * @professor Jailson Costa
 * @student Marcos Vinicius
 * @date 10/04/2025
 * @description  numa fruteira vende morango por R$2.5 mas vende por R$2.2
 * acima de 5kg; maçã R$1.8, mas faz por R$1.5 o kg acima de 5kg
 * Se o cliente comprar mais de 8 Kg em frutas ou o valor total
 * da compra ultrapassar R$ 25,00, receberá ainda um desconto de 10% sobre
 * este total. Esse algoritmo lê a quantidade (em Kg) de morangos
 * e a quantidade (em Kg) de maças adquiridas e escreve o valor a ser pago
 * pelo cliente de acordo com essas condições.
*/

let precoMorangoPromocional = 2.2;
let precoMorangoNormal = 2.5;
let precoMacaPromocional = 1.5;
let precoMacaNormal = 1.8;

let kgMorango = parseFloat(prompt(`Quantos quilos de morango?`));
let kgMaca = parseFloat(prompt(`Quantos quilos de maçã?`));

if (kgMorango <= 5) {
    totalMorango = kgMorango * precoMorangoNormal;
} else {
    totalMorango = kgMorango * precoMorangoPromocional;
}
if (kgMaca <= 5) {
    totalMaca = kgMaca * precoMacaNormal;
} else {
    totalMaca = kgMaca * precoMacaPromocional;
}

let kgTotal = kgMorango + kgMaca;
let totalAPagar = totalMorango + totalMaca;

if (kgTotal > 8 || totalAPagar > 25) {
    totalAPagar = totalAPagar * 0.9; // ou totalAPagar - (totalAPagar * 0.1);
}

alert(`total de maçãs: ${kgMaca}kg
    total de morangos: ${kgMorango}kg
    total de frutas: ${kgTotal}kg
    preço do morango: R$ ${totalMorango.toFixed(2)}
    preço da maçã: R$ ${totalMaca.toFixed(2)}
    ${totalAPagar > 25 || kgTotal >8 ? `Desconto de 10% aplicado` : `Sem desconto`}
    \n
    O total a pagar é de R$ ${totalAPagar.toFixed(2)}`);