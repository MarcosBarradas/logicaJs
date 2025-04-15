/**
 * @file pag66-ex1-.js
 * @discipline React
 * @professor Jailson Costa
 * @student Marcos Vinicius
 * @date 12/04/2025
 * @description 
 * 
 */ 

let termo1 = 1;
let termo2 = 1;
let proximo = 0;
let quantidade = 15;
mensagem = `${termo1}, ${termo2}`;

for(let i = 3; i <= quantidade; i++){
  proximo = termo1 + termo2;
  mensagem += `, ${proximo}`;
  console.log(mensagem);
  termo1 = termo2;
  termo2 = proximo;
}