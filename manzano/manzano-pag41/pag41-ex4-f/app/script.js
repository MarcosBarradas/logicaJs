/**
 * @file pag41-ex4-f.js
 * @discipline React
 * @professor Jailson Costa
 * @student Marcos Vinicius
 * @date 12/04/2025
 * @description   Lê três valores (variáveis A, B e C) e apresenta eles
 * dispostos em ordem crescente.
*/

let numero1 = parseFloat(prompt("Digite o primeiro número: "));
let numero2 = parseFloat(prompt("Digite o segundo número: "));
let numero3 = parseFloat(prompt("Digite o terceiro número: "));
let menor = 0;
let medio = 0;
let maior = 0;

if (numero1 <= numero2 && numero1 <= numero3) {
    menor = numero1;
    if (numero2 <= numero3) {
        medio = numero2;
        maior = numero3;
    } else {
        medio = numero3;
        maior = numero2;
    }
} else if (numero2 <= numero1 && numero2 <= numero3) {
    menor = numero2;
    if (numero1 <= numero3) {
        medio = numero1;
        maior = numero3;
    } else {
        medio = numero3;
        maior = numero1;
    }
} else {
    menor = numero3;
    if (numero1 <= numero2) {
        medio = numero1;
        maior = numero2;
    } else {
        medio = numero2;
        maior = numero1;
    }
}

alert(`Os números em ordem crescente são: \n
    ${menor} \n
    ${medio} \n
    ${maior}`);