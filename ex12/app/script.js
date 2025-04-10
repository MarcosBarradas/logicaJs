/**
 * @file ex12.js
 * @discipline React
 * @professor Jailson Costa
 * @student Marcos Vinicius
 * @date 08/04/2025
 * @description  Converter uma temperatura de Fahrenheit para Celsius usando a fórmula:
 * C = (F - 32) * 5 / 9
 */

let Fahrenheit = parseFloat(prompt("Informe a temperatura em Fahrenheit:")); // solicita a temperatura em Fahrenheit
let Celsius = (Fahrenheit - 32) * 5 / 9; // converte para Celsius
alert("A temperatura em Celsius é: " + Celsius.toFixed(2)); // mostra a temperatura em Celsius