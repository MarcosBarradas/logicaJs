/**
 * @file pag41-ex4-a.js
 * @discipline React
 * @professor Jailson Costa
 * @student Marcos Vinicius
 * @date 11/04/2025
 * @description Lê dois valores inteiros e apresenta a diferença do maior pelo menor valor.
*/

let valor1 = parseInt(prompt("Digite o primeiro valor inteiro: "));
let valor2 = parseInt(prompt("Digite o segundo valor inteiro: "));
let diferenca = 0;

switch (true) {
    case valor1 > valor2:
        diferenca = valor1 - valor2;
        break;
    case valor2 > valor1:
        diferenca = valor2 - valor1;
        break;
    default:
        alert("Os valores são iguais!");
        break;
}
alert("A diferença entre os valores é: " + diferenca);





