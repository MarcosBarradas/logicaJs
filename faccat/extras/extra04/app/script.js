/**
 * @file extra04.js
 * @discipline React
 * @professor Jailson Costa
 * @student Marcos Vinicius
 * @date 10/04/2025
 * @description  Escreva um programa que solicite ao usuário uma 
 * nota de 0 a 100 e exiba a classificação correspondente (A, B, C, D, F).
*/

let nota = parseFloat(prompt("Digite uma nota de 0 a 100:"));
let classificacao;

switch (true) {
    case (nota >= 80 && nota <= 100):
        classificacao = "A";
        break;
    case (nota >= 60 && nota < 80):
        classificacao = "B";
        break;
    case (nota >= 40 && nota < 60):
        classificacao = "C";
        break;
    case (nota >= 20 && nota < 40):
        classificacao = "D";
        break;
    case (nota >= 0 && nota < 20):
        classificacao = "F";
        break;
    default:
        alert("Nota inválida. Por favor, insira uma nota entre 0 e 100.");
        throw new Error("Nota inválida");
        break;
}
alert(`Classificação: ${classificacao}`);


