/**
 * @file ex13.js
 * @discipline React
 * @professor Jailson Costa
 * @student Marcos Vinicius
 * @date 08/04/2025
 * @description  Calcular a média ponderada de um aluno com 3 notas,
 * onde os pesos são respectivamente 2, 3 e 5.
 */

let nota1 = parseFloat(prompt("Informe a primeira nota:"));
let nota2 = parseFloat(prompt("Informe a segunda nota:"));
let nota3 = parseFloat(prompt("Informe a terceira nota:"));
let media = (nota1 *2 + nota2 *3 + nota3 *5) / 10; // calcula a media ponderada
alert("A média ponderada é: " + media.toFixed(2)); // mostra a media