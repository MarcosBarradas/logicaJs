/**
 * @file pag26-ex7-f.js
 * @discipline React
 * @professor Jailson Costa
 * @student Marcos Vinicius
 * @date 11/04/2025
 * @description Algoritmo que emonstra como trocar valores entre duas variáveis
 * (A e B) de qualquer tipo (inteiro, real ou caractere)
 * utilizando uma variável temporária durante troca.
 */

let a = prompt("Informe o valor de A: ");
let b = prompt("Informe o valor de B: ");
let temporaria = a; 

a = b;
b = temporaria;

alert(`O valor de A é: ${a} e o valor de B é: ${b}`);
