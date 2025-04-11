/**
 * @file pag26-ex7-h.js
 * @discipline React
 * @professor Jailson Costa
 * @student Marcos Vinicius
 * @date 11/04/2025
 * @description calcula e apresenta o volume de uma caixa retangular,
 * por meio da fórmula VOLUME  <- COMPRIMENTO * LARGURA * ALTURA.
 */

let comprimento = parseFloat(prompt("Digite o comprimento da caixa: "));
let largura = parseFloat(prompt("Digite a largura da caixa: "));
let altura = parseFloat(prompt("Digite a altura da caixa: "));
let volume = comprimento * largura * altura;
alert(`O volume da caixa é: ${volume} m³`);
