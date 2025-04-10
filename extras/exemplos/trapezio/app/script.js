/**
 * @file trapezio.js
 * @discipline React
 * @professor Jailson Costa
 * @student Marcos Vinicius
 * @date 08/04/2025
 * @description calcula a area de um trapezio
 */

let baseDeBaixo = parseFloat(prompt("Informe a base de baixo do trapézio:"));
let baseDeCima = parseFloat(prompt("Informe a base de cima do trapézio:"));
let altura = parseFloat(prompt("Informe a altura do trapézio:"));
let area = ((baseDeBaixo + baseDeCima) * altura) / 2; // calcula a area do trapezio
alert("A área do trapézio é: " + area.toFixed(2)); // mostra a area