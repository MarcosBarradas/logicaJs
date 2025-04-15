/**
 * @file pag50-ex1-h.js
 * @discipline React
 * @professor Jailson Costa
 * @student Marcos Vinicius
 * @date 15/04/2025
 * @description Lê nome, largura, comprimento de cada comodo da casa e calcula
 * a area total da residência. Usa laço do while para ir adicionando comodos
 * diferentes e soma todas as areas no final.
 */ 

let nome = '';
let largura = 0;
let comprimento = 0;
let areaTotal = 0;
let continuar = '';

do {
  let areaComodo = 0;
  nome = prompt('Informe o nome do comodo: ');
  largura = parseFloat(prompt('Informe a largura do comodo: '));
  comprimento = parseFloat(prompt('Informe o comprimento do comodo: '));
  areaComodo = largura * comprimento;
  areaTotal += areaComodo;
  alert(`A area do comodo ${nome} e ${areaComodo}m2`)
  continuar = prompt('Deseja continuar? (S/N)');
} while (continuar.toUpperCase() !== 'N');

alert(`A area total da residencia e ${areaTotal}m2`)