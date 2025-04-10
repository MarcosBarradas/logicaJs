/**
 * @file extra03.js
 * @discipline React
 * @professor Jailson Costa
 * @student Marcos Vinicius
 * @date 10/04/2025
 * @description  solicita ao usuário dois números e uma operação 
 * (adição, subtração, multiplicação, divisão) e exiba o resultado.
*/

let numero1 = parseFloat(prompt("Digite o primeiro número:"));
let numero2 = parseFloat(prompt("Digite o segundo número:"));
let operacao = prompt("Digite a operação desejada (+, -, *, /):");

switch (operacao) {
    case "+":
        alert(`Resultado: ${numero1 + numero2}`);
        break;
    case "-":
        alert(`Resultado: ${numero1 - numero2}`);
        break;
    case "*":
        alert(`Resultado: ${numero1 * numero2}`);
        break;
    case "/":

        if (numero2 !== 0) {
            alert(`Resultado: ${numero1 / numero2}`);
        } else {
            alert("Erro: Divisão por zero não é permitida.");
        }
        break;

    default:
        alert("Operação inválida. Por favor, escolha entre +, -, *, /");
        break;
}

