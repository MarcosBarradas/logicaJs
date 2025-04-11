/**
 * @file pag41-ex4-c.js
 * @discipline React
 * @professor Jailson Costa
 * @student Marcos Vinicius
 * @date 11/04/2025
 * @description Lê quatro valores referentes a quatro notas escolares de
 *  um aluno e imprime uma mensagem dizendo que o aluno foi aprovado, se o valor
 * da média escolar for maior ou igual a 5. Se o aluno não
 *  foi aprovado, indica uma mensagem informando.
 *  Apresenta junto das mensagens o valor da média do aluno independente de
 *  aprovação
*/

let nota1 = parseFloat(prompt("Digite a primeira nota: "));
let nota2 = parseFloat(prompt("Digite a segunda nota: "));
let nota3 = parseFloat(prompt("Digite a terceira nota: "));
let nota4 = parseFloat(prompt("Digite a quarta nota: "));
let media = (nota1 + nota2 + nota3 + nota4) / 4;
let resultado = media >= 5 ? "Aprovado" : "Reprovado"; // operador ternário
alert(`O aluno foi ${resultado} com média ${media.toFixed(2)}`); // template string







