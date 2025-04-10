/**
 * @file ex41.js
 * @discipline React
 * @professor Jailson Costa
 * @student Marcos Vinicius
 * @date 10/04/2025
 * @description  lê 3 notas e media de notas dos exercícios, depois calcula
 * a media de aproveitamento de acordo com a formula
 * (n1+ n2 * 2 + n3 * 3 + mediaExercicios)/ 7.
 * e classifica como A se for maior que 9
 * B maior que 7.5
 * C maior que 6 D o resto
*/

let nota1 = parseFloat(prompt("Digite a nota 1:"));
let nota2 = parseFloat(prompt("Digite a nota 2:"));
let nota3 = parseFloat(prompt("Digite a nota 3:"));
let mediaExercicios = parseFloat(prompt("Digite a média dos exercícios:"));
let mediaAproveitamento = (nota1 + nota2 * 2 + nota3 * 3 + mediaExercicios) / 7;
let conceito = "";
alert(`A média de aproveitamento é: ${mediaAproveitamento}`);

if (mediaAproveitamento >= 9) {
    conceito = "Aprovado com conceito A";
} else if (mediaAproveitamento >= 7.5) {
    conceito = "Aprovado com conceito B";
} else if (mediaAproveitamento >= 6) {
    conceito = "Aprovado com conceito C";
} else {
    conceito = "Reprovado com conceito D";
}

alert(
    `Conceito: ${conceito} \n
     Média de aproveitamento: ${mediaAproveitamento}`
    );

