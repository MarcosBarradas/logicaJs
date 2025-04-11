/**
 * @file extra-ex1-a.js
 * @discipline React
 * @professor Jailson Costa
 * @student Marcos Vinicius
 * @date 11/04/2025
 * @description Efetua a leitura de quatro valores inteiros (variáveis A, B, C
 *  e D). Apresenta o resultado do produto (variável P) do primeiro com o 
 * terceiro valor,  e o resultado da soma (variável S) do segundo
 * com o quarto valor.
 */

let valorA = parseInt(prompt("Digite o valor A: "));
let valorB = parseInt(prompt("Digite o valor B: "));
let valorC = parseInt(prompt("Digite o valor C: "));
let valorD = parseInt(prompt("Digite o valor D: "));

let produto = valorA * valorC;
let soma = valorB + valorD;

alert(`O produto de A e C é: ${produto} e\n
       a soma de B e D é: ${soma}`);