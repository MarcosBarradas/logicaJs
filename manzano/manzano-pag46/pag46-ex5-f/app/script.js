/**
 * @file pag46-ex5-f.js
 * @discipline React
 * @professor Jailson Costa
 * @student Marcos Vinicius
 * @date 12/04/2025
 * @description Apresenta como resultado o valor de uma potência de uma base
 * qualquer elevada a um expoente qualquer, ou seja, de BE, em que B é o valor
 * da base e E o valor do expoente. sem utilizar o operador de exponenciação
 * (^ ou ** ou math.pow).
*/

let base = parseInt(prompt("Digite a base: "));
let expoente = parseInt(prompt("Digite o expoente: "));
let resultado = 1; // Inicializa o resultado com 1
let contador = 0; // Inicializa o contador com 0


while(contador < expoente) { // contador diretamente proporcional ao expoente
  resultado *= base; // Multiplica o resultado pela base
  contador++; // Incrementa o contador
}
alert(`${base}^${expoente} = ${resultado}`); // Exibe a mensagem com os resultados