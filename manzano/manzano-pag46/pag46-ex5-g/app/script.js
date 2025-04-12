/**
 * @file pag46-ex5-g.js
 * @discipline React
 * @professor Jailson Costa
 * @student Marcos Vinicius
 * @date 12/04/2025
 * @description  Calcula o fabonacci até décimo quinto termo
*/

let primeiro = 1;
let segundo = 1;
let proximo = 0;
let index = 2; // Começa do terceiro index, pois os dois primeiros já estão definidos (primeiro, segundo).
// 0 primeiro - 1 segundo - 2 terceiro
mensagem = `1, 1`; 

while (index < 15) { 
    proximo = primeiro + segundo;
    primeiro = segundo;
    segundo = proximo;
    mensagem += `, ${proximo}`; // Adiciona o próximo número à mensagem
    index++;
}
alert(`Os 15 primeiros: ${mensagem}.`); // Exibe a sequência de Fibonacci
