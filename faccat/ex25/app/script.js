/**
 * @file ex25.js
 * @discipline React
 * @professor Jailson Costa
 * @student Marcos Vinicius
 * @date 09/04/2025
 * @description  recebe conta do cliente, saldo 
 * atual, débito pendente
 * crédito pendente, calcula saldo atualizado e informa se o saldo
 * atualizado é negativo ou positivo
 */

let conta = parseInt(prompt("Qual o número da sua conta?"));
let saldoAtual = parseFloat(prompt("Qual o saldo atual?"));
let debitoPendente = parseFloat(prompt("Qual o débito pendente?"));
let creditoPendente = parseFloat(prompt("Qual o crédito pendente?"));
let saldoAtualizado = 0; //saldo atualizado
saldoAtualizado = saldoAtual - debitoPendente + creditoPendente; //saldo atualizado
let resultado = saldoAtualizado <0 ? "negativo" : "positivo"; //verifica se o saldo atualizado é negativo ou positivo
alert(`O saldo atualizado da conta ${conta} é R$ ${saldoAtualizado.toFixed(2)}, portanto é ${resultado}`); //exibe o resultado

