/**
 * @file ex42.js
 * @discipline React
 * @professor Jailson Costa
 * @student Marcos Vinicius
 * @date 10/04/2025
 * @description  Uma empresa quer verificar se um empregado está qualificado para a aposentadoria ou não. Para
 * estar em condições, um dos seguintes requisitos deve ser satisfeito:
 * - Ter no mínimo 65 anos de idade.
 * - Ter trabalhado no mínimo 30 anos.
 * - Ter no mínimo 60 anos e ter trabalhado no mínimo 25 anos.
 * Com base nas informações acima, faça um algoritmo que leia: o número do empregado (código), o ano
 * de seu nascimento e o ano de seu ingresso na empresa. O programa deverá escrever a idade e o tempo
 * de trabalho do empregado e a mensagem 'Requerer aposentadoria' ou 'Não requerer'.
*/

let anoAtual = 2025;

let codigo = parseInt(prompt("Digite o código do empregado: "));
let anoNascimento = parseInt(prompt("Digite o ano de nascimento do empregado:"))
let anoIngresso = parseInt(prompt("Digite o ano de ingresso do empregado: "));

idade - anoAtual - anoNascimento; // calculo da idade
tempoTrabalho = anoAtual - anoIngresso; // calculo do tempo de trabalho

alert(`Idade: ${idade} anos\n
       Tempo de trabalho: ${idade} anos`);

if (idade >= 65 || tempoTrabalho >= 30 || (idade >= 60 && tempoTrabalho >= 25)) {
    alert("Requerer aposentadoria");
} else {
    alert("Não requerer aposentadoria");
}
