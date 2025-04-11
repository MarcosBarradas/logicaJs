/**
 * @file ex19.js
 * @discipline React
 * @professor Jailson Costa
 * @student Marcos Vinicius
 * @date 09/04/2025
 * @description Ler dois valores e escrever o 
 * maior deles
 */

alert(`Olá, aqui você vai descobrir qual o maior número!`);
let valor1 = parseInt(prompt("Digite o primeiro valor: "));
let valor2 = parseInt(prompt("Digite o segundo valor: "));
let maiorValor = valor1 > valor2 ? valor1 : valor2;
alert(`O maior valor é ${maiorValor}.`);
