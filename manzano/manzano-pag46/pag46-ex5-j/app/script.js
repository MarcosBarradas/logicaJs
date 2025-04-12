/**
 * @file pag46-ex5-j.js
 * @discipline React
 * @professor Jailson Costa
 * @student Marcos Vinicius
 * @date 12/04/2025
 * @description apresenta os resultados da soma e da média aritmética dos valores pares situados na faixa numérica de 50 a 70.
*/

let i = 50;
let somatoria = 0;
let media = 0;
let quantosIncrementos = 0;

while (i <= 70) {
  if (i % 2 == 0) {
    somatoria += i;
    quantosIncrementos++;
  }
  i++;
}
media = somatoria / quantosIncrementos;
alert(`A soma dos valores é: ${somatoria}\n
  A média dos valores é: ${media}`);