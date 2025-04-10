/**
 * @file ex07.js
 * @discipline React
 * @professor Jailson Costa
 * @student Marcos Vinicius
 * @date 08/04/2025
 * @description Converter a idade de uma pessoa (expressa em anos, meses
 * e dias) para o total equivalente em dias, considerando:
 */

let anos = parseInt(prompt("Digite quantidade de anos: "));
let meses = parseInt(prompt("Digite quantidade de meses:"));
let dias = parseInt(prompt("Digite quantidade de dias:"));
let totalDias = (anos * 365) + (meses * 30) + dias;
alert(`A idade total em dias é ${totalDias}.`);

