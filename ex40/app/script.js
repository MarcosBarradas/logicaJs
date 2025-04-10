/**
 * @file ex40.js
 * @discipline React
 * @professor Jailson Costa
 * @student Marcos Vinicius
 * @date 10/04/2025
 * @description  recebe nome, quantidade, preço unitário
 * calcula total e se comprar até 5 unidades damos 2% de desconto
 * entre 6 e 10 da 3% de desconto
 * mais que 10 da 5% de desconto
*/

let nomeProduto = prompt("Digite o nome do produto:");
let quantidadeProduto = parseInt(prompt("Digite a quantidade do produto:"));
let precoUnitario = parseFloat(prompt("Digite o preço unitário do produto:"));

let totalBruto = quantidadeProduto * precoUnitario;
let totalDescontado = 0;

if (quantidadeProduto <= 5) {
    totalDescontado = totalBruto * 0.98; // 2% de desconto
} else if (quantidadeProduto > 5 && quantidadeProduto <= 10) {
    totalDescontado = totalBruto * 0.97; // 3% de desconto
} else {
    totalDescontado = totalBruto * 0.95; // 5% de desconto 
}

alert(`produto: ${nomeProduto}\n
      quantidade: ${quantidadeProduto}\n
      preço unitário: ${precoUnitario}\n
      total bruto: ${totalBruto}\n
      total a pagar com descont: ${totalDescontado}`);

