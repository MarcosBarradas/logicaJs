/**
 * @file pag26-ex7-i.js
 * @discipline React
 * @professor Jailson Costa
 * @student Marcos Vinicius
 * @date 11/04/2025
 * @description Lê dois inteiros (variáveis A e B) e imprimir o resultado do
 * quadrado da diferença do primeiro valor pelo
 * segundo. (a - b) ** 2
 */

let a = parseInt(prompt("Digite o primeiro número: "));
let b = parseInt(prompt("Digite o segundo número: "));
let resultado = (a - b) ** 2;
alert(`O quadrado da diferença de ${a} e ${b} é: ${resultado}`);

