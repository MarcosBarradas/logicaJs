/**
 * @file ex26.js
 * @discipline React
 * @professor Jailson Costa
 * @student Marcos Vinicius
 * @date 09/04/2025
 * @description  Recebe quantidade atual de um *estoque, quantidade máxima,
 * quantidade mínima. Calcula média da quantidade máxima e quantidade mínima,
 * depois compara media com quantidade em estoque.
 * se quantidade em estoque for maior ou igual a media...
 * não efetua a compra de reposição
 * compra se quantidade em estoque for menor que media, então efetua
 * compra de reposição
*/

let estoqueAtual = parseInt(prompt("Qual a quantidade atual de estoque?"));
let estoqueMaximo = parseInt(prompt("Qual a quantidade máxima de estoque?"));
let estoqueMinimo = parseInt(prompt("Qual a quantidade mínima de estoque?"));
let mediaEstoque = (estoqueMaximo + estoqueMinimo) / 2; //media de estoque

//ternário decide se precisa comprar com base na media de estoque
let mensagemPersonalisada = estoqueAtual >= mediaEstoque ? "Não precisa comprar mais" : "Compre mais"; 

alert(`A média de estoque é ${mediaEstoque} \n
    portanto: \n
    ${mensagemPersonalisada}`); //mensagem personalizada
