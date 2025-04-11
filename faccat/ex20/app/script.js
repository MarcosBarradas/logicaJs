/**
 * @file ex20.js
 * @discipline React
 * @professor Jailson Costa
 * @student Marcos Vinicius
 * @date 09/04/2025
 * @description Ler dois valores e exibir de 
 * forma crescente
 */

alert(`Olá, aqui você vai descobrir a ordem crescente dos números!`);
let valor1 = parseInt(prompt("Digite o primeiro valor: "));
let valor2 = parseInt(prompt("Digite o segundo valor: "));

if(valor1 < valor2) {
    alert(`A ordem crescente é: ${valor1}, ${valor2}`);
}
else  {
    alert(`A ordem crescente é: ${valor2}, ${valor1}`);
}
