/**
 * @file extra-ex1-b.js
 * @discipline React
 * @professor Jailson Costa
 * @student Marcos Vinicius
 * @date 11/04/2025
 * @description Lê salário mensal (variável SM) de um trabalhador e também o
 *  valor do percentual de reajuste (variável PR)
 * a ser atribuído e apresenta o valor do novo salário (variável NS).
 */

let salarioMensal = parseFloat(prompt("Digite o salário mensal do trabalhador: "));
let percentualReajuste = parseFloat(prompt("Digite o percentual de reajuste: "));
let novoSalario = salarioMensal + (salarioMensal * percentualReajuste / 100);
