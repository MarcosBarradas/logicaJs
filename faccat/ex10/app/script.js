/**
 * @file ex10.js
 * @discipline React
 * @professor Jailson Costa
 * @student Marcos Vinicius
 * @date 08/04/2025
 * @description Calcular o preço final de um carro novo para o consumidor,
 * considerando Custo de fábrica, Percentual do distribuidor (28% sobre custo
 * de fábrica) e Impostos (45% sobre custo de fábrica)
 * O cálculo soma o custo de fábrica com as porcentagens do distribuidor e
 * impostos.
 */

let custoFabrica = parseFloat(prompt("Informe o custo de fábrica do carro:"));
let distribuidor = custoFabrica * 0.28; // 28% do custo de fabrica
let impostos = custoFabrica * 0.45; // 45% do custo de fabrica

custoFinal = custoFabrica + distribuidor + impostos; // soma os valores
// custoFinal = custoFabrica + distribuidor + impostos;
alert("O preço final do carro para o consumidor é: " + custoFinal.toFixed(2));


