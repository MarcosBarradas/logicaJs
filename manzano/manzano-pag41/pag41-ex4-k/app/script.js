/**
 * @file pag41-ex4-k.js
 * @discipline React
 * @professor Jailson Costa
 * @student Marcos Vinicius
 * @date 11/04/2025
 * @description Lê um determinado valor inteiro, e efetua a sua
 * apresentação, caso o valor não seja maior que três.
*/

let numero = parseInt(prompt("Digite um número inteiro: "));
let mensagem = `O número ${numero} é `;

mensagem += numero > 3 ? "maior que três." : "menor ou igual a três.";




