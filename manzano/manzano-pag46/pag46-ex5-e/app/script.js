/**
 * @file pag46-ex5-e.js
 * @discipline React
 * @professor Jailson Costa
 * @student Marcos Vinicius
 * @date 12/04/2025
 * @description Apresenta os resultados das potências de 3, variando do
// expoente 0 até o expoente 15. É considerado que qualquer número
// elevado a zero é 1, e elevado a 1 é ele próprio. Observe que
//neste exercício não pode ser utilizado o operador
//de exponenciação (^ ou ** ou math.pow).
*/
//3* 3 = 9                      = 3^2
//3 * 9 = 3* 3* 3 = 27          = 3^3
//3 * 27 = 3* 3* 3* 3 = 81      = 3^4
//3 * 81 = 3* 3* 3* 3* 3 = 243  = 3^5

let resultado = 1; // resultado a última operação
let contador = 0; // Inicializa o contador com 0
let mensagem = `3^0 = ${resultado}\n`; // 

while (contador <= 15) {
  //pega o resultado da última operação e multiplica por 3
  //assim as multiplicações que geraram o ultimo resultado, quantas vezes 
  //foram multiplicadas por 3, são acumuladas gerando o mesmo conceito
  //da potenciação.
  resultado *= 3; // Multiplica o último por 3

  contador++; // Incrementa o contador

  mensagem += `3^${contador} = ${resultado}\n`; // Adiciona o número par à mensagem 
}
alert(`${mensagem}`); // Exibe o resultado da soma