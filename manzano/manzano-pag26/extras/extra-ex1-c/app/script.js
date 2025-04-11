/**
 * @file extra-ex1-c.js
 * @discipline React
 * @professor Jailson Costa
 * @student Marcos Vinicius
 * @date 11/04/2025
 * @description Efetua a leitura da quantidade de votos válidos para cada
// candidato (A, B ou C) e lê a quantidade de votos nulos e votos em branco.
// Finaliza apresentando um número total de eleitores, considerando votos
// válidos, nulos e em branco; o percentual correspondente de votos válidos em
//relação à quantidade de
//; o percentual correspondente de votos válidos do candidato A em
//relação à quantidade de
//eleitores; o percentual correspondente de votos válidos do candidato B em
 //relação à quantidade de
//eleitores; o percentual correspondente de votos válidos do candidato C em
//relação à quantidade de
//eleitores; o percentual correspondente de votos nulos em relação à quantidade
//de eleitores; e por último
// percentual correspondente de votos em branco em relação à quantidade de eleitores.
 */

let votosValidosA = parseFloat(prompt("Digite a quantidade de votos válidos para o candidato A: "));
let votosValidosB = parseFloat(prompt("Digite a quantidade de votos válidos para o candidato B: "));
let votosValidosC = parseFloat(prompt("Digite a quantidade de votos válidos para o candidato C: "));
let votosNulos = parseFloat(prompt("Digite a quantidade de votos nulos: "));
let votosBrancos = parseFloat(prompt("Digite a quantidade de votos em branco: "));
//o calculo de porcentagem é feito com base no total de eleitores, incluindo os votos válidos, nulos e em branco
let totalEleitores = votosValidosA + votosValidosB + votosValidosC + votosNulos + votosBrancos;
//regra de três simples
let percentualValidos = totalEleitores / totalEleitores * 100;
let percentualA = votosValidosA / totalEleitores * 100;
let percentualB = votosValidosB / totalEleitores * 100;
let percentualC = votosValidosC / totalEleitores * 100;
let percentualNulos = votosNulos / totalEleitores * 100;
let percentualBrancos = votosBrancos / totalEleitores * 100;

