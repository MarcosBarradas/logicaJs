/**
 * @file pag26-ex7-g.js
 * @discipline React
 * @professor Jailson Costa
 * @student Marcos Vinicius
 * @date 11/04/2025
 * @description Ler quatro números inteiros e apresentar o resultado da adição e multiplicação, baseando-se na 
utilização do conceito da propriedade distributiva. Ou seja, se forem lidas as variáveis A, B, C, e D, 
devem ser somadas e multiplicadas A com B, A com C e A com D. Depois B com C, B com D e por fim 
C com D. Perceba que será necessário efetuar seis operações de adição e seis operações de 
multiplicação e apresentar doze resultados de saída.
 */

let a = parseInt(prompt("Digite o primeiro número: "));
let b = parseInt(prompt("Digite o segundo número: "));
let c = parseInt(prompt("Digite o terceiro número: "));
let d = parseInt(prompt("Digite o quarto número: "));
let resultado = ``;
const pares = [ [a, b], [a, c], [a, d], [b, c], [b, d], [c, d]];

pares.forEach(([x, y]) => {
    resultado += `${x} + ${y} = ${x + y}\n`;
    resultado += `${x} * ${y} = ${x * y}\n`;
});

alert(resultado);