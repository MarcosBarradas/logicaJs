/**
 * @file ex22.js
 * @discipline React
 * @professor Jailson Costa
 * @student Marcos Vinicius
 * @date 09/04/2025
 * @description  recebe quanto fulano ganha por hora, quantas
 *  horas ele trabalhou e se passar de 40 horas semanais a gente cobra horas 
 * extras
 */

let horasMinimas = 40 * 4; //mensais
let horasTrabalhadas = parseInt(prompt(`Quantas horas você trabalhou no mês? o mínimo é ${horasMinimas}.`));
let salarioHora = parseFloat(prompt("Quanto você ganha por hora, filho?"));
let salarioPadrao = salarioHora * horasMinimas; //salario padrão mensal

let horasExtras = -horasMinimas + horasTrabalhadas; 

let salarioHoraExtra = salarioHora * 1.5; //salario hora extra

let salarioTotal = salarioPadrao + (salarioHoraExtra * horasExtras); //salario total mensal
alert(`Seu salário total é R$ ${salarioTotal.toFixed(2)}`); 



