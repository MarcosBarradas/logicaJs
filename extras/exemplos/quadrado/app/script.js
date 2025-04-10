/**
 * @file quadrado.js
 * @discipline React
 * @professor Jailson Costa
 * @student Marcos Vinicius
 * @date 08/04/2025
 * @description calcula a area de um quadrado
 */

let lado = parseFloat(prompt("Informe o lado do quadrado:")); // solicita o lado
let area = lado ** 2; // calcula a area do quadrado
alert("A área do quadrado é: " + area.toFixed(2)); // mostra a area