/**
 * @file pag26-ex7-e.js
 * @discipline React
 * @professor Jailson Costa
 * @student Marcos Vinicius
 * @date 11/04/2025
 * @description Efetua o cálculo e a apresentação do valor de uma prestação
 * em atraso, utilizando a fórmula
 * PRESTACAO  VALOR + (VALOR * TAXA/100) * TEMPO)
 */

let valor = parseFloat(prompt("Informe o valor da prestação: "));
let taxa = parseFloat(prompt("Informe a taxa de juros: "));
let tempo = parseFloat(prompt("Informe o tempo em meses: "));

let prestacao = valor + (valor * taxa / 100) * tempo;

alert(`O valor da prestação em atraso é: R$ ${prestacao.toFixed(2)}`);