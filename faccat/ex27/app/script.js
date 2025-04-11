/**
 * @file ex27.js
 * @discipline React
 * @professor Jailson Costa
 * @student Marcos Vinicius
 * @date 09/04/2025
 * @description  recebe um valor e verifica se é positivo 
 * negativo ou zero
*/

let valor = parseInt(prompt("Digite o primeiro valor:"));

let resultado = valor < 0 ? "menor que zero" : valor > 0 ? "maior que zero" : "zero";

alert(`O valor é ${resultado}`); //exibe o resultado
