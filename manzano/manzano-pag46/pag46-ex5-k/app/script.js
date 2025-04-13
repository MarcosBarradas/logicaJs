/**
 * @file pag46-ex5-k.js
 * @discipline React
 * @professor Jailson Costa
 * @student Marcos Vinicius
 * @date 12/04/2025
 * @description Calcula a área total de uma residência (sala, cozinha,banheiro,
 * quartos, área de serviço, quintal,garagem, etc.).
 * O programa solicita nome, a largura e o comprimento de um determinado
 * cômodo.
 * Em seguida apresenta a área do cômodo lido e também uma mensagem solicitando
 * do usuário a confirmação de continuar calculando novos cômodos.
 * Caso o usuário responda “NAO”, o programa mostra o total de m2 e finaliza.
*/

//var
let nomeComodo = "";
let largura = 0;
let comprimento = 0;
let areaComodo = 0;
let continuar = "";
let mensagem = "";
let areaTotal = 0;

//Inicio
while (continuar !== "n") {
  nomeComodo = prompt("Informe o nome do cômodo: ");
  largura = parseFloat(prompt("Informe a largura do cômodo: "));
  comprimento = parseFloat(prompt("Informe o comprimento do cômodo: "));
  areaComodo = largura * comprimento;
  areaTotal += areaComodo;
  mensagem += `A área do ${nomeComodo} é: ${areaComodo}\n`;
  continuar = prompt("Deseja continuar? (s/n): ").toLowerCase();
}
alert(`${mensagem}A área total da casa é: ${areaTotal}`);
//FimAlgoritmo