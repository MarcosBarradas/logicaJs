/**
 * @file extra06.js
 * @discipline React
 * @professor Jailson Costa
 * @student Marcos Vinicius
 * @date 10/04/2025
 * @description solicita ao usuário sua idade e exibe
 * a categoria correspondente (Criança, Adolescente, Adulto, Idoso).
*/

let idade = prompt("Qual a sua idade?");

switch (true) {
    case (idade >= 0 && idade <= 12):
        alert("Criança");
        break;
    case (idade >= 13 && idade <= 17):
        alert("Adolescente");
        break;
    case (idade >= 18 && idade <= 59):
        alert("Adulto");
        break;
    case (idade >= 60):
        alert("Idoso");
        break;
    default:
        alert("Idade inválida");
}



