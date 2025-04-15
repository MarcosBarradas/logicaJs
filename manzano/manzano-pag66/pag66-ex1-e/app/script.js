/**
 * @file pag66-ex1-e.js
 * @discipline React
 * @professor Jailson Costa
 * @student Marcos Vinicius
 * @date 12/04/2025
 * @description exibe todos os números ímpares de 0 a 20
 * 
 */ 

let mensagem = "";
for(let i = 1; i < 20; i += 2){
  console.log(i);
  mensagem += i + "\n";
}
alert(mensagem);