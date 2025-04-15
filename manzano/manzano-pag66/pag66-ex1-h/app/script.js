/**
 * @file pag66-ex1-.js
 * @discipline React
 * @professor Jailson Costa
 * @student Marcos Vinicius
 * @date 12/04/2025
 * @description eleve a base por um expoente sem usar ^
 * 
 */

let base = parseInt(prompt("Informe a base da exponenciação:"));
let expoente = parseInt(prompt("Informe o expoente da exponenciação:"));
let resultado = 1;

for (let i = 0; i < expoente; i++) {
  resultado *= base;
  console.log(`${base}^${i + 1} = ${resultado}`);
}