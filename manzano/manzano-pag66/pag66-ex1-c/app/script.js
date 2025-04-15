/**
 * @file pag66-ex1-c.js
 * @discipline React
 * @professor Jailson Costa
 * @student Marcos Vinicius
 * @date 12/04/2025
 * @description calcula a soma dos 100 primeiros números inteiros
 * 
 */ 

let somatoria = 0;

let quantidade = 100;

for(let i = 1; i <= quantidade; i++){
  somatoria += i;
  console.log(i + " - " + somatoria);
}

alert(`A soma dos 100 primeiros números inteiros é: ${somatoria}`);