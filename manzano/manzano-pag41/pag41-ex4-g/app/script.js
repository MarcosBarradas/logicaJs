/**
 * @file pag41-ex4-g.js
 * @discipline React
 * @professor Jailson Costa
 * @student Marcos Vinicius
 * @date 11/04/2025
 * @description  Lê quatro inteiros e apresenta os números que são
 * divisíveis por 2 e 3.
*/

let numero1 = parseFloat(prompt("Digite o primeiro número: "));
let numero2 = parseFloat(prompt("Digite o segundo número: "));
let numero3 = parseFloat(prompt("Digite o terceiro número: "));
let numero4 = parseFloat(prompt("Digite o quarto número: "));

let numeros = [numero1, numero2, numero3, numero4];
let mensagem = "";

numeros.forEach((numero) => {
    if (numero % 2 == 0 && numero % 3 == 0) {
        mensagem += `O número ${numero} é divisível por 2 e 3.\n`;
    } 
} )

alert(mensagem || "Nenhum número é divisível por 2 e 3.");
