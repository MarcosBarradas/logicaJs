/**
 * @file pag50-ex1-j.js
 * @discipline React
 * @professor Jailson Costa
 * @student Marcos Vinicius
 * @date 15/04/2025
 * @description calcula o quociente inteiro da divisão usando apenas
 * subtrações sucessivas (sem usar o operador DIV /), com a estrutura 
 * repita
 */ 

let  dividendo = 20; //valor a ser 
// decrementado
let divisor = 4; // decremento
let quociente = 0; //quantas vezes decrementou o dividendo com divisor
let resto = 0;

do {
  dividendo -= divisor; //0
  quociente++ //3
} while (divisor <= dividendo);

resto = dividendo !== 0 ? dividendo : 0;
//se não pode usar / tbm n posso usar mod, pois facilitaria
console.log(`Quociente: ${quociente}, Resto: ${resto}`);