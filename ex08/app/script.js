/**
 * @file ex08.js
 * @discipline React
 * @professor Jailson Costa
 * @student Marcos Vinicius
 * @date 08/04/2025
 * @description Ler o total de eleitores e a quantidade de votos brancos,
 * nulos e válidos de um município, calcular e exibir o percentual de cada
 * tipo de voto em relação ao total de eleitores.
 */

let totalEleitores = parseInt(prompt("Digite o total de eleitores: "));
let votosBrancos = parseInt(prompt("Digite a quantidade de votos brancos: "));
let votosNulos = parseInt(prompt("Digite a quantidade de votos nulos: "));
let votosValidos = parseInt(prompt("Digite a quantidade de votos válidos: "));
let percentualBrancos = (votosBrancos / totalEleitores) * 100;
let percentualNulos = (votosNulos / totalEleitores) * 100;
let percentualValidos = (votosValidos / totalEleitores) * 100;

alert(`Percentual de votos brancos: ${percentualBrancos.toFixed(2)}% \n
Percentual de votos nulos: ${percentualNulos.toFixed(2)}% \n
Percentual de votos válidos: ${percentualValidos.toFixed(2)}%`);


