/**
 * @file pag66-ex1-b.js
 * @discipline React
 * @professor Jailson Costa
 * @student Marcos Vinicius
 * @date 12/04/2025
 * @description traz a tabuada de 1 a 10 de um numero qualquer
 * 
 */ 

let numeroQualquer = parseInt(prompt('Informe um numero qualquer: '));
mensagem = ""

for(let i = 1; i <= 10; i++){
  console.log(`${numeroQualquer} x ${i} = ${i * numeroQualquer}`);
  mensagem += `${numeroQualquer} x ${i} = ${i * numeroQualquer}\n`;
}

alert(mensagem);2