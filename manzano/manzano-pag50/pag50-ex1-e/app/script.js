/**
 * @file pag50-ex1-e.js
 * @discipline React
 * @professor Jailson Costa
 * @student Marcos Vinicius
 * @date 13/04/2025
 * @description lê 15 valores, calcula fatorial e soma fatorial de todos
 */
//1 * 2 * 3 * 4 = 24 então (24 * 5) = ((1 * 2 * 3 * 4) * 5) só que com 
//1 * 2 * 3 * 4 acumulados como 24. o resultado da multiplicação dos
//ultimos numeradores tem todos os numeradores anteriores escondidos ali,
//no caso desse código, acumulados na variável fatorial.
let valor = 0;
let i = 0;
let somatoria = 0;

do {
  valor = parseInt(prompt(`Informe o ${i + 1}º valor: `));
  let fatorial = 1;
  let numeradores = 1;
  console.log(`calculos do fatorial de ${valor}:`);
  do {
    let mensagem = `${numeradores} x ${fatorial} x`;
    fatorial *= numeradores;
    console.log(mensagem + fatorial);
    numeradores++;
  } while (numeradores <= valor);
  console.log(`${valor}!: ${fatorial}`);
  somatoria += fatorial;
  i++;
} while (i < 15);

alert(`Soma dos fatoriais: ${somatoria}`);
