/**
 * @file pag41-ex4-j.js
 * @discipline React
 * @professor Jailson Costa
 * @student Marcos Vinicius
 * @date 11/04/2025
 * @description Lê um valor  entre a faixa de 1 a 9. Após a
 * leitura o programa incdica uma de duas mensagens: "O
 * valor está na faixa permitida", caso o usuário forneça o valor nesta faixa,
 * ou a mensagem "O valor está fora da faixa permitida", caso o usuário forneça
 * valores menores que 1 ou maiores que 9.
*/

let numero = parseInt(prompt("Digite um número entre 1 e 9: "));
let mensagem = `O número ${numero} está `;
mensagem += numero >= 1 && numero <= 9 ? "na faixa permitida." : "fora da faixa permitida.";
alert(mensagem);