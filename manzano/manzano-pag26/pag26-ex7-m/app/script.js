/**
 * @file pag26-ex7-m.js
 * @discipline React
 * @professor Jailson Costa
 * @student Marcos Vinicius
 * @date 11/04/2025
 * @description lê três valores (A, B e C) e apresente como resultado final
 * soma dos quadrados dos três valores lidos.
 */

let a = parseFloat(prompt("Digite o valor de A: "));
let b = parseFloat(prompt("Digite o valor de B: "));
let c = parseFloat(prompt("Digite o valor de C: "));
let resultado = a * a + b * b + c * c;
alert("A soma dos quadrados dos três valores é: " + resultado);
