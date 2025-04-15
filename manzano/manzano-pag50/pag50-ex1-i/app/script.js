/**
 * @file pag50-ex1-i.js
 * @discipline React
 * @professor Jailson Costa
 * @student Marcos Vinicius
 * @date 15/04/2025
 * @description lê valores inteiros positivos até que um negativo seja
 * informado e então exibe o maior e o menor valor, usando a estrutura repita
 * 
 */
let atual;
let maior, menor;

do {
  atual = parseInt(prompt("Digite um número inteiro: "));
  
  switch (true) {
    case atual > -1: //se o número for natural
      //entra no encadeamento    
      if (maior !== undefined) { //se "não" for a primeira vez que isso executa
        //siga a lógica de comparação
        if (atual > maior) maior = atual; 
        else if (atual < menor) menor = atual;
        
      } else { //se for a primeira vez
        //atribua o primeiro valor de entrada para as variáveis automaticamente
        maior = atual;
        menor = atual;

      }
      break;
    case atual < 0: //se for negativo, informe o menor e o maior valor antes de encerrar programa
      alert("O menor número informado foi: " + menor);
      alert("O maior número informado foi: " + maior);
      break;
    default:
      alert("Valor inválido"); //se entrar valor inválido ponho atual com um numero inteiro, 
      // só para nao quebrar o loop
      atual = 1; //esse número nao vai entrar na lógica por estar no fim do loop
  }
} while (atual > -1);