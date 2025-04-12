/**
 * @file pag46-ex5-c.js
 * @discipline React
 * @professor Jailson Costa
 * @student Marcos Vinicius
 * @date 12/04/2025
 * @description programa que apresenta no final o somatório dos valores 
 * "PARES" existentes na faixa de1 até 500.
*/

//valor esperado: 62750


let soma = 0; // Inicializa a variável soma com 0
let contador = 1; // Inicializa o contador com 1

while (contador <= 500){
  if (contador % 2 == 0) { // Verifica se o contador é par...
    soma += contador; // Adiciona o contador à soma
  }
  contador++; // Incrementa o contador
}
alert(`A soma dos números pares de 1 a 500 é: ${soma}`); // Exibe o resultado da soma


