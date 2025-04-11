/**
 * @file extra08.js
 * @discipline React
 * @professor Jailson Costa
 * @student Marcos Vinicius
 * @date 11/04/2025
 * @description 
*/

let mes = prompt("Digite o mês do ano (1-12): ");
switch (true) {
    case mes >= 1 && mes <= 3:
        alert("O mês " + mes + "É verão!");
        break;
    case mes >= 4 && mes <= 6:
        alert("O mês " + mes + "É outono!");
        break;
    case mes >= 7 && mes <= 9:
        alert("O mês " + mes + "É inverno!");
        break;
    case mes >= 10 && mes <= 12:
        alert("O mês " + mes + "É primavera!");
        break;
    default:
        alert("Mês inválido! Digite um número entre 1 e 12.");
        break;
}




