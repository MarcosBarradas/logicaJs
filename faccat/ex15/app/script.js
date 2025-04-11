/**
 * @file ex15.js
 * @discipline React
 * @professor Jailson Costa
 * @student Marcos Vinicius
 * @date 09/04/2025
 * @description  Verificar se um valor digitado é positivo
 * incluindo zero) ou negativo
 */

let valor = prompt("Digite um valor: ");

if (valor < 0) {
    alert("O valor digitado é negativo.");
}
else if (valor == 0) {  
    alert("O valor digitado é zero.");
}
else {
    alert("O valor digitado é positivo.");
}