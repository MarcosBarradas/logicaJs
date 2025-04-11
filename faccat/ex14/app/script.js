/**
 * @file ex14.js
 * @discipline React
 * @professor Jailson Costa
 * @student Marcos Vinicius
 * @date 08/04/2025
 * @description  Verificar se um valor digitado pelo usuário
 * é maior que 10 e exibir mensagem adequada
 */

let valor = prompt("Digite um valor: ");

if(valor > 10){
    alert("O valor digitado é maior que 10.");
}else if(valor == 10){
    alert("O valor digitado é igual a 10.");
} else{
    alert("O valor digitado é menor que 10.");
}