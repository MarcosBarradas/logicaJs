/**
 * @file ex30.js
 * @discipline React
 * @professor Jailson Costa
 * @student Marcos Vinicius
 * @date 10/04/2025
 * @description Lê 3 valores diferentes e imprimir de forma crescente
*/

let primeiro = parseInt(prompt("Digite o primeiro valor:"));
let segundo = parseInt(prompt("Digite o segundo valor:"));
let terceiro = parseInt(prompt("Digite o terceiro valor:"));

if (primeiro < segundo && primeiro < terceiro) {
    if (segundo < terceiro) {
        alert(`${primeiro}, ${segundo}, ${terceiro}`);
    } else {
        alert(`${primeiro}, ${terceiro}, ${segundo}`);
    }
} else if (segundo < primeiro && segundo < terceiro) {
    if (primeiro < terceiro) {
        alert(`${segundo}, ${primeiro}, ${terceiro}`);
    } else {
        alert(`${segundo}, ${terceiro}, ${primeiro}`);
    }
} else {
    if (primeiro < segundo) {
        alert(`${terceiro}, ${primeiro}, ${segundo}`);
    } else {
        alert(`${terceiro}, ${segundo}, ${primeiro}`);
    }
}