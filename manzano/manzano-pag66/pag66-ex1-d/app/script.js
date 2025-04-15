/**
 * @file pag66-ex1-d.js
 * @discipline React
 * @professor Jailson Costa
 * @student Marcos Vinicius
 * @date 12/04/2025
 * @description calcula soma dos pares de 1 a 500
 * 
 */ 

let somatoria = 0;
let quantidade = 500;

for(let i = 2; i <= quantidade; i += 2){
  somatoria += i;
  console.log(i + " - " + somatoria);
}

alert(`A soma dos pares de 1 a 500 é: ${somatoria}`);