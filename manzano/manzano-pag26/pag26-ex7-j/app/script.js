/**
 * @file pag26-ex7-j.js
 * @discipline React
 * @professor Jailson Costa
 * @student Marcos Vinicius
 * @date 11/04/2025
 * @description efetua a apresentação do valor da conversão em real de um valor
 * lido em dólar. O programa solicita o valor da cotação do dólar e também a
 * quantidade de dólares disponível com o usuário, para que seja apresentado
 * o valor em real.
 */

let cotacao = parseFloat(prompt("Digite a cotação do dólar: "));
let quantidade = parseFloat(prompt("Digite a quantidade de dólares: "));
let resultado = cotacao * quantidade;
alert(`O valor em real é: R$ ${resultado.toFixed(2)}`);
