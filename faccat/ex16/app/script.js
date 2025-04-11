/**
 * @file ex16.js
 * @discipline React
 * @professor Jailson Costa
 * @student Marcos Vinicius
 * @date 09/04/2025
 * @description  As maçãs custam R$ 1,30 cada se forem compradas menos de uma
 * dúzia, e R$ 1,00 se forem compradas pelo menos 12.
 * Esse é um programa que lê o número de maçãs compradas, calcula e
 * escreve o custo total da compra.
 */
alert("As maçãs custam R$ 1,30 cada se forem compradas menos de uma dúzia, e R$ 1,00 se forem compradas pelo menos 12.");

let quantidade = parseInt(prompt("Digite a quantidade de maçãs compradas: "));
let precoUnitario; 

if (quantidade < 12) {
    precoUnitario = 1.30; //adiciona 1.30 por ser menor que 12 unit
} else {
    precoUnitario = 1.00;//desconto de 30 centavos por ser pelos meno 12
}

let custoTotal = quantidade * precoUnitario; //calcula custo total

alert("Preço unitário: " + precoUnitario + "\n  O custo total da compra é: R$ " + custoTotal.toFixed(2)); //exibe o custo total com 2 casas decimais
