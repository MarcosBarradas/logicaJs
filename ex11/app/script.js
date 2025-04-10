/**
 * @file ex11.js
 * @discipline React
 * @professor Jailson Costa
 * @student Marcos Vinicius
 * @date 08/04/2025
 * @description  Calcular o salário final de um vendedor de carros usados com base em:
 * - Salário fixo mensal
 * - Comissão fixa por carro vendido
 * - 5% de comissão sobre o valor total das vendas
 */

let carrosVendidos = parseInt(prompt("Informe o número de carros vendidos:"));
let valorTotalVendas = parseFloat(prompt("Informe o valor total das vendas:"));
let salarioFixo = parseFloat(prompt("Informe o salário fixo mensal:"));
let comissaoPorCarro = parseFloat(prompt("Informe a comissão fixa por carro vendido:"));

comissaoPorCarro = comissaoPorCarro * carrosVendidos; // multiplica pera ter comissão total
valorTotalVendas = valorTotalVendas * 0.05; // calcula 5% do valor total do quanto foi vendido
//para saber a comissão em porcentagem além da comissão fixa por carro vendido.
let salarioFinal = salarioFixo + comissaoPorCarro + valorTotalVendas; // soma tudo
alert("O salário final do vendedor é: " + salarioFinal.toFixed(2)); // mostra o resultado
