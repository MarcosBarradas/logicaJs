/**
 * @file pag50-ex1-d.js
 * @discipline React
 * @professor Jailson Costa
 * @student Marcos Vinicius
 * @date 12/04/2025
 * @description Calcula o total de grãos de trigo em um tabuleiro de e 
 * xadrez, onde cada casa contém o dobro de grãos da anterior (1, 2, 4, 
 * 8...), acumulando até a 64ª casa.
 */ 
//var
let i = 0;
let graosNestaCasa = 1n;
let graosTotal = 0n;
//algoritmo
do {
  console.log(`quantidade de grãos na casa ${i + 1}: ${graosNestaCasa}`);
  graosTotal += graosNestaCasa;
  graosNestaCasa *= 2n;
  i++;
} while (i < 64);
//saida
console.log(`Total de graos: ${graosTotal}`);

alert(`O total de grãos é: ${graosTotal}, abra o console para\n ver a  quantidade de graos de cada casa. aperta f12 e vai na aba  "console"`);