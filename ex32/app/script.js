/**
 * @file ex32.js
 * @discipline React
 * @professor Jailson Costa
 * @student Marcos Vinicius
 * @date 10/04/2025
 * @description lê nome de dois times, numeros de gols de cada um e printa o
 * vencedor
*/

let time1 = prompt("Digite o nome do primeiro time: ");
let time2 = prompt("Digite o nome do segundo time: ");
let golsTime1 = parseInt(prompt("Digite o número de gols do primeiro time: "));
let golsTime2 = parseInt(prompt("Digite o número de gols do segundo time: "));

if(golsTime1 > golsTime2) {
    alert("O vencedor é: " + time1);
}   else if(golsTime2 > golsTime1) {
    alert("O vencedor é: " + time2);
} else {
    alert("Empate!");
}