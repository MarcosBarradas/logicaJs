/**
 * @file pag50-ex1-.js
 * @discipline React
 * @professor Jailson Costa
 * @student Marcos Vinicius
 * @date 12/04/2025
 * @description Exibe resultado com o valor do fatorial dos ímpares numa
 * faixa de zero à 10
 * 
 */ 

let i = 1;
let somatoria = 0;

do {
  let fatorial = 1; //tem que estar aqui dentro para reiniciar a cada repetição
  let repeticoes = 1;
  do {
    fatorial *= repeticoes;
    repeticoes++;
  } while(repeticoes <= i);
  somatoria += fatorial;
  i += 2; //n precisa de mod % se somar de 2 em 2 a partir de 1
} while (i < 10);

alert(`somatoria de ímpares até 10: ${somatoria}`);