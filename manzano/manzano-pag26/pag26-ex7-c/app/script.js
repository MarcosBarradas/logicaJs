/**
 * @file pag26-ex7-c.js
 * @discipline React
 * @professor Jailson Costa
 * @student Marcos Vinicius
 * @date 11/04/2025
 * @description calcula o volume de uma lata de óleo usando a fórmula 
 * Volume = p × raio² × altura
 */

const PI = Math.PI;
let altura = parseFloat(prompt("Informe a altura da lata de óleo: "));
let raio = parseFloat(prompt("Informe o raio da lata de óleo: "));

let volumeEmCm3 = PI * raio ** 2 * altura;
let volumeLitros = volumeEmCm3 / 1000; // converte de cm³ para litros

alert(`O volume da lata de óleo é de ${volumeLitros.toFixed(2)} litros.`);
