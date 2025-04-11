/**
 * @file ex34.js
 * @discipline React
 * @professor Jailson Costa
 * @student Marcos Vinicius
 * @date 10/04/2025
 * @description recebe 1 valor caractere que pode ser ou G (gasolina) ou A (Alcool)
 * depois lê quantos litros o usuario quer abastecer.
 * depois multiplica por precoGasolina se ler G
 * ou por precoAlcool se ler a opcao A para descobrir o total sem desconto.
 * 
 *  Se for gasolina da 4% de desconto até 20L e 6% acima de 20L
 * Se for Álcool da 3% de desconto até 20L e 5% acima de 20L
*/
alert(`Olá, calabreso! bem vindo ao postinhoShell!`);
let precoGasolina = 3.30;
let precoAlcool = 2.90;
let totalSemDesconto = 0;
let desconto = 0;
let totalComDesconto = 0;

let tipoCombustivel = prompt("Digite G para gasolina ou A para alcool: ").toUpperCase();
alert(`Você escolheu ${tipoCombustivel}`);
let litros = parseFloat(prompt("Quantos litros você quer abastecer?"));

if (tipoCombustivel === "G") {

    if (litros <= 20) {
        totalSemDesconto = precoGasolina * litros;
        desconto = totalSemDesconto * 0.04;//4% de desconto
        totalComDesconto = totalSemDesconto - desconto; 
    } else {
        totalSemDesconto = precoGasolina * litros;
        desconto = totalSemDesconto * 0.06; //6% de desconto
        totalComDesconto = totalSemDesconto - desconto;
    }

} else if (tipoCombustivel === "A") {

    if (litros <= 20) {
        totalSemDesconto = precoAlcool * litros;
        desconto = totalSemDesconto * 0.03; // 3% de desconto
        totalComDesconto = totalSemDesconto - desconto;
    } else {
        totalSemDesconto = precoAlcool * litros;
        desconto = totalSemDesconto * 0.05;// 5% de desconto
        totalComDesconto = totalSemDesconto - desconto;
    }

} else {
    alert(`A opcao ${tipoCombustivel} não é válida!\n
        Por favor, digite G para gasolina ou A para alcool.`);
        throw new Error(`A opcao ${tipoCombustivel} não é válida!\n
        Por favor, digite G para gasolina ou A para alcool.`);
}
alert(`
    você abasteceu ${litros}L de ${tipoCombustivel}.\n
        O total sem desconto foi de R$ ${totalSemDesconto}.\n
        O desconto foi de R$ ${desconto}.\n
        O total com desconto é R$ ${totalComDesconto}.\n
        agora faça o pix pra chave e-mail: marcos.barradas@outlook.com`
);