/**
 * @file ex21.js
 * @discipline React
 * @professor Jailson Costa
 * @student Marcos Vinicius
 * @date 09/04/2025
 * @description Ler dois valores que representam
 *  dois horários diferentes e calcular quantas
 *  horas se passaram
 */
let excessão =0;
let hora1 = parseInt(prompt("Digite que horas começou a partida (0-23):"));
let hora2 = parseInt(prompt("Digite que horas terminou a partida(0-23):"));
let quantasHoras = -hora1 + hora2; //se der negativo é porque passou de meia noite.

if (quantasHoras < 0) {
    excessão = -hora1 + hora2 + 24; // verifica distancia entre hora2 e hora1
    alert(`A partida durou ${excessão} horas`); 
} else {
    alert(`A partida durou ${quantasHoras} horas`);
}



