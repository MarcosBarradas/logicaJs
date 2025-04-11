/**
 * @file ex24.js
 * @discipline React
 * @professor Jailson Costa
 * @student Marcos Vinicius
 * @date 09/04/2025
 * @description  recebe salário fixo, vendas efetuadas e calcula comissão
 * 3% se vendeu menos que 1500 e 3% de 1500 mais 5% do restante se vender 
 * mais que 1500
 */

let salarioFixo = parseFloat(prompt("Qual o seu salário fixo?"));
let totalVendido = parseFloat(prompt("Qual o total de vendas efetuadas?"));
let comissao = 0; //comissao será armazenada aqui após calculada
let quantoUltrapassouMeta = 0; //quanto ultrapassou a meta de 1500
let salarioTotal = 0; //salario total com comissão

if (totalVendido <= 1500) { //verifica se vendeu menos que R$1500,00
    comissao = 0.03 * totalVendido; //3% de comissão se vendeu menos que R$1500,00
    alert(`Você não ultrapassou a meta de R$ 1500,00`);
} else {
    quantoUltrapassouMeta = totalVendido - 1500; //quanto ultrapassou a meta
    comissao = (0.03 * 1500) + (0.05 * quantoUltrapassouMeta); //3% de 1500 + 5% do restante    
    alert(`Você ultrapassou a meta em R$ ${quantoUltrapassouMeta.toFixed(2)}`);
}
salarioTotal = salarioFixo + comissao; //salario total
alert(`Seu salário total mais comissão é R$ ${salarioTotal.toFixed(2)}`);

