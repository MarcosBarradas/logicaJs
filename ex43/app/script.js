/**
 * @file ex43.js
 * @discipline React
 * @professor Jailson Costa
 * @student Marcos Vinicius
 * @date 10/04/2025
 * @description  Este algoritmo verifica se três valores fornecidos (A, B, C)
 * podem formar um triângulo válido e, em caso positivo, classifica-o em Equilátero,
 * Isósceles ou Escaleno. Caso contrário, informa que não é possível formar um
 * triângulo
*/


let lado1 = parseInt(prompt("Digite o valor do lado 1: "));
let lado2 = parseInt(prompt("Digite o valor do lado 2: "));
let lado3 = parseInt(prompt("Digite o valor do lado 3: "));
let mensagem = "";

if(a < b + c && b < a + c && c < a + b) {
    if(a == b && b == c) {
        mensagem = "Os lados formam um triângulo equilátero";
    } else if(a == b || a == c || b == c) {
        mensagem = "Os lados formam um triângulo isósceles";
    } else {
        mensagem = "Os lados formam um triângulo escaleno";
    }
} else {    
    mensagem = "Os lados não formam um triângulo";
}

alert(mensagem);
