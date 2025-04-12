/**
 * @file pag41-ex4-i.js
 * @discipline React
 * @professor Jailson Costa
 * @student Marcos Vinicius
 * @date 11/04/2025
 * @description Lê  um número inteiro e apresentar uma mensagem
 * informando se o número é par ou ímpar.
*/

let numero = parseInt(prompt("Digite um número inteiro: "));
let mensagem = `O número ${numero} é `;
mensagem += numero % 2 == 0 ? "par." : "ímpar.";
alert(mensagem);





