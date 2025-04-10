/**
 * @file ex33.js
 * @discipline React
 * @professor Jailson Costa
 * @student Marcos Vinicius
 * @date 10/04/2025
 * @description Lê 2 valores e retorna se são iguais se o primeiro é maior ou
 * se o segundo é maior.
*/

let valor1 = parseFloat(prompt("Digite o primeiro valor: "));
let valor2 = parseFloat(prompt("Digite o segundo valor: "));
if(valor1 == valor2) {
    alert("Os valores são iguais.");
}
else if(valor1 > valor2) {
    alert("O primeiro valor é maior.");
}
else {
    alert("O segundo valor é maior.");
}
// Compare this snippet from ex34/app/script.js: