/**
 * @file pag26-ex7-a.js
 * @discipline React
 * @professor Jailson Costa
 * @student Marcos Vinicius
 * @date 11/04/2025
 * @description Lê temperatura em graus Celsius e converte para Fahrenheit usando a 
 * fórmula: F = C * 9/5 + 32.
 */

let Celsius = parseFloat(prompt("Digite a temperatura em Celsius: "));

let Fahrenheit = (Celsius * 9/5) + 32; 

alert("A temperatura em Fahrenheit é: " + Fahrenheit.toFixed(2) + "°F");