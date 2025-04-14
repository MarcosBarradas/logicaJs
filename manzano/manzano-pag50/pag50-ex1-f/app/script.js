/**
 * @file pag50-ex1-f.js
 * @discipline React
 * @professor Jailson Costa
 * @student Marcos Vinicius
 * @date 12/04/2025
 * @description lê números e entrega quantos foram lidos, soma, média 
 * aritmética. Deve sair quando o usuário fornecer um valor negativo.
 * 
 */
let valorDaVez = 0;
let somatoria = 0;
let mediaAritmetica = 0;
let repeticoes = 0;
let mensagem = ``;

alert(`Digite números para  calcular a somatória e média aritmética.\n`);


do {

  switch (true) {
    case valorDaVez >= 0:
      somatoria += valorDaVez;
      repeticoes++;
      break;
    case valorDaVez < 0:
      alert(`Encerrando o programa...`);
      break;
    default:
      alert(`Digite um valor válido.`);
      break;
  }

} while (valorDaVez >= 0);

mediaAritmetica = somatoria / repeticoes;
alert(`
  Quantidade de números lidos: ${repeticoes}\n
  Soma dos números lidos: ${somatoria}\n
  Média aritmética dos números lidos: ${mediaAritmetica}`
);
