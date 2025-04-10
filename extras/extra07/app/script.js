/**
 * @file extra07.js
 * @discipline React
 * @professor Jailson Costa
 * @student Marcos Vinicius
 * @date 10/04/2025
 * @description solicite ao usuário os comprimentos dos três lados de um triângulo 
 * e classifique-o como equilátero, isósceles ou escaleno.
*/

let lado1 = parseFloat(prompt("Digite o comprimento do primeiro lado do triângulo:"));
let lado2 = parseFloat(prompt("Digite o comprimento do segundo lado do triângulo:"));
let lado3 = parseFloat(prompt("Digite o comprimento do terceiro lado do triângulo:"));

switch (true) {
    case (lado1 == lado2 && lado2 == lado3):
        alert("O triângulo é equilátero.");
        break;
    case (lado1 == lado2 || lado1 == lado3 || lado2 == lado3):
        alert("O triângulo é isósceles.");
        break;
    default:
        alert("O triângulo é escaleno.");
}




