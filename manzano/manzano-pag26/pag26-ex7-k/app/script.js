/**
 * @file pag26-ex7-k.js
 * @discipline React
 * @professor Jailson Costa
 * @student Marcos Vinicius
 * @date 11/04/2025
 * @description Apresenta o valor da conversão em dólar de um valor lido em
 * real, solicitando a cotação do dólar e quantos reais a pessoa tem,
 * para que seja apresentado o valor em moeda americana.
 */

let cotacao = parseFloat(prompt("Digite a cotação do dólar: "));
let quantidade = parseFloat(prompt("Digite a quantidade de reais: "));
let resultado = quantidade / cotacao;
alert(`O valor em dólar é: $ ${resultado.toFixed(2)}`);
