/**
 * @file ex18.js
 * @discipline React
 * @professor Jailson Costa
 * @student Marcos Vinicius
 * @date 09/04/2025
 * @description Lê o ano atual e o ano de 
 * nascimento de uma pessoa. Escreve uma 
 * mensagem que diz se ela poderá ou não votar
 * este ano (ignorando o mês de    
 * nascimento).
 * Considera que a idade mínima para votar é 18 anos.
 */
alert(`Olá, aqui você precisa ser maior de idade para votar!`);
let anoAtual = parseInt(prompt("Digite o ano atual: "));
let anoNascimento = parseInt(prompt("Digite o ano de nascimento: "));
let idade = anoAtual - anoNascimento;

if(idade >= 18) {
    alert(`Você pode votar este ano. Sua idade é ${idade} anos.`);
} else {
    alert(`Você não pode votar este ano. Sua idade é ${idade} anos.`);
}
