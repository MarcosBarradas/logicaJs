/**
 * @file pag66-ex1-.js
 * @discipline React
 * @professor Jailson Costa
 * @student Marcos Vinicius
 * @date 12/04/2025
 * @description calcula e exibe as potências de 3 de 0 até 15,
//sem usar o operador de exponenciação ^
 * 
 */ 
let resultado=1;
console.log(`resultado 3^0 = 1`);

for(let i = 0; i < 15; i++){
    resultado*= 3
    console.log(`resultado 3^${i + 1} = ${resultado}`);
}