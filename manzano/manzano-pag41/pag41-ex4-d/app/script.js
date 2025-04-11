/**
 * @file pag41-ex4-d.js
 * @discipline React
 * @professor Jailson Costa
 * @student Marcos Vinicius
 * @date 11/04/2025
 * @description Lê quatro valores referentes a quatro notas escolares de um
// aluno e imprime uma mensagem dizendo que o aluno foi aprovado, quando média
//é maior ou igual a 7. Se o valor da média for menor que 7, solicita a nota de
//exame, soma com o valor da média e obtem nova média.
//Se a nova média é maior ou igual a 5, apresenta uma
// mensagem dizendo que o aluno foi aprovado em exame. Se o aluno não foi
// aprovado, indicar uma mensagem informando esta condição.
// Apresentar com as mensagens o valor da média do aluno, independente de
//aprovação.
*/

let nota1 = parseFloat(prompt("Digite a primeira nota: "));
let nota2 = parseFloat(prompt("Digite a segunda nota: "));
let nota3 = parseFloat(prompt("Digite a terceira nota: "));
let nota4 = parseFloat(prompt("Digite a quarta nota: "));
let media = (nota1 + nota2 + nota3 + nota4) / 4;
let resultado = media >= 7 ? "Aprovado" : "Reprovado"; // operador ternário
let notaExame = 0;

//se deu reprovado a gente manda para a lógica de exame
if (resultado == "Reprovado") {
    notaExame = parseFloat(prompt("Aluno de recuperação. Digite a nota do exame: "));
    media = (media + notaExame) / 2;
    //sobrecreve resultado se cair na lógica de exame 
    resultado = media >= 5 ? "Aprovado em exame" : "Reprovado em exame"; 
}

alert(`O aluno foi ${resultado} com média ${media.toFixed(2)}`); 


