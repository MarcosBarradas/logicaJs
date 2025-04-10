/**
 * @file extra05.js
 * @discipline React
 * @professor Jailson Costa
 * @student Marcos Vinicius
 * @date 10/04/2025
 * @description  solicita ao usuário um número de 1 a 4 e 
 * exibe a estação do ano correspondente (1 para Primavera, 2 para Verão, etc.).
*/

let estacao = prompt(`Digite um número de 1 a 4 para saber a estação do ano:`)
    // 1 - Primavera\n
    // 2 - Verão\n
    // 3 - Outono\n
    // 4 - Inverno`);

switch (estacao) {
    case "1":
        alert("Primavera");
        break;
    case "2":
        alert("Verão");
        break;
    case "3":
        alert("Outono");
        break;
    case "4":
        alert("Inverno");
        break;
    default:
        alert("Número inválido! Digite um número de 1 a 4.");
}


