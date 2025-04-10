/**
 * @file triangulo.js
 * @discipline React
 * @professor Jailson Costa
 * @student Marcos Vinicius
 * @date 08/04/2025
 * @description calcula a area de um triangulo
 */

let base = parseFloat(prompt("Informe a base do triângulo:"));
let altura = parseFloat(prompt("Informe a altura do triângulo:"));
let area = (base * altura) / 2; // calcula a area do triangulo
alert("A área do triângulo é: " + area.toFixed(2)); // mostra a area