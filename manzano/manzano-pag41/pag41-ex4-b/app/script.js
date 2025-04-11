/**
 * @file pag41-ex4-b.js
 * @discipline React
 * @professor Jailson Costa
 * @student Marcos Vinicius
 * @date 11/04/2025
 * @description Lê um inteiro positivo ou negativo e
 * apresenta o número lido como sendo um valor positivo, ou seja, o 
 * programa apresenta o módulo de um número fornecido.
*/

let numero = parseInt(prompt("Digite um número inteiro: "));
numero = numero < 0 ? numero * - 1 : numero; // * -1 inverte o sinal do número se for negativo

alert(`O módulo do número é: ${numero}`); // template string

