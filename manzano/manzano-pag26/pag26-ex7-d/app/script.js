/**
 * @file pag26-ex7-d.js
 * @discipline React
 * @professor Jailson Costa
 * @student Marcos Vinicius
 * @date 11/04/2025
 * @description calcula a quantidade de litros de combustível gasta em uma viagem
 */

let tempoGasto = parseFloat(prompt("Informe o tempo gasto na viagem em horas: "));
let velocidadeMedia = parseFloat(prompt("Informe a velocidade média em km/h: "));
let distanciaPercorrida = tempoGasto * velocidadeMedia;
let consumoPorLitro = 12; // km/litro
let litrosConsumidos = distanciaPercorrida / consumoPorLitro;

alert(`A quantidade de litros de combustível gasta na viagem é: ${litrosConsumidos.toFixed(2)} litros.`);