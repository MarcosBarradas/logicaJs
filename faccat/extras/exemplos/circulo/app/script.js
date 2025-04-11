/**
 * @file circulo.js
 * @discipline React
 * @professor Jailson Costa
 * @student Marcos Vinicius
 * @date 08/04/2025
 * @description calcula a area de um círculo
 */

let raio = parseFloat(prompt("Informe o raio do círculo:")); // solicita o raio
let area = Math.PI * raio ** 2; // calcula a area do círculo
                    //raio elevado a 2
alert("A área do círculo é: " + area.toFixed(2)); // mostra a area