/**
 * @file pag46-ex5-d.js
 * @discipline React
 * @professor Jailson Costa
 * @student Marcos Vinicius
 * @date 12/04/2025
 * @description Apresenta todos os valores numéricos inteiros ímpares situados
// na faixa de 0 a 20. Verifica se o número é ímpar, efetua dentro da malha a
//verificação lógica desta condição com a instrução perguntando se o número é
//ímpar; sendo, mostre-o; não sendo, passe para o próximo passo.
*/

let contadora = 1
let mensagem = ``;

//exclui o 0 e o 20 da operação para otimizar processamento
while (contadora < 20) {
    mensagem += contadora % 2 !== 0 ? `${contadora}, ` : ""; // Adiciona o número par à mensagem
    contadora++;
}
alert(`A soma dos números de 1 a 20 é: ${mensagem}`); // Exibe o resultado da soma
