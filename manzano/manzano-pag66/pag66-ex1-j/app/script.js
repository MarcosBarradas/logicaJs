/**
 * @file pag66-ex1-.js
 * @discipline React
 * @professor Jailson Costa
 * @student Marcos Vinicius
 * @date 12/04/2025
 * @description converte temperaturas de Celsius para Fahrenheit, de 10 em 10
// graus de 10°C até 100°C...
 * 
 */ 

let c = 10;

for(c; c <= 100; c += 10){
  let f = (9 * c + 160) / 5;
  console.log(`${c}°C = ${f}°F`);
}

alert(`vai no console`)