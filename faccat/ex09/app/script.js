/**
 * @file ex09.js
 * @discipline React
 * @professor Jailson Costa
 * @student Marcos Vinicius
 * @date 08/04/2025
 * @description Este algoritmo tem como objetivo principal calcular o novo
 * salário de um funcionário após um reajuste percentual
 */

let salarioAtual = parseFloat(prompt("Informe o salário atual do funcionário:"));
let percentualReajuste = parseFloat(prompt("Informe o percentual de reajuste:"));
let novoSalario = salarioAtual + (salarioAtual * percentualReajuste / 100);
                                             // divide por cem por que é "porcento"
                                             //ao mutiplicar porcentagem vc obtem
                                             //regra de três 
alert("O novo salário do funcionário é: " + novoSalario.toFixed(2));

