/**
 * @file pag26-ex7-c.js
 * @discipline React
 * @professor Jailson Costa
 * @student Marcos Vinicius
 * @date 11/04/2025
 * @description Lê temperatura em graus Fahrenheit e converte para Celsius usando a
 * fórmula: C = (F - 32) * 5/9.
 */

let Fahrenheit = parseFloat(prompt("Digite a temperatura em Fahrenheit: "));
let Celsius = (Fahrenheit - 32) * 5 / 9;

alert("A temperatura em Celsius é: " + Celsius.toFixed(2) + "°C");