/**
 * @file pag46-ex5-a.js
 * @discipline React
 * @professor Jailson Costa
 * @student Marcos Vinicius
 * @date 12/04/2025
 * @description Apresentar os resultados de uma tabuada de 
 * multiplicar (de 1 até 10) de um número qualquer. usando 
 * while
*/

let contadora = 1;
let resultado = 0;
let fator = parseInt(prompt("Digite um número para ver a tabuada: "));

let mensagem = "Tabuada do " + fator + "\n\n";

while (contadora <= 10) {

    resultado = fator * contadora;
    mensagem += `${fator} x ${contadora} = ${resultado}\n`;
    contadora++;

} 

alert(mensagem);
