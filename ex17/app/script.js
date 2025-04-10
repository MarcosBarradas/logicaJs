/**
 * @file ex17.js
 * @discipline React
 * @professor Jailson Costa
 * @student Marcos Vinicius
 * @date 09/04/2025
 * @description Lê as notas da 1a. e 2a. avaliações de um aluno. Calcular a média 
 * aritmética simples e escreve diz se o aluno foi ou
 * não aprovado (considerar que nota igual * ou maior que 6 o 
 * aluno é aprovado). Escrever também a média calculada.  
 */
let nota1 = parseFloat(prompt("Digite a nota da 1a. avaliação: "));
let nota2 = parseFloat(prompt("Digite a nota da 2a. avaliação: "));
let media = (nota1 + nota2) / 2; //calcula a média aritmética simples
let resultado = media >= 6 ? "Aprovado" : "Reprovado"; //verifica se o aluno foi aprovado ou reprovado
