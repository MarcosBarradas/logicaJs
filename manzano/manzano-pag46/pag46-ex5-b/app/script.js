/**
 * @file pag46-ex5-b.js
 * @discipline React
 * @professor Jailson Costa
 * @student Marcos Vinicius
 * @date 12/04/2025
 * @description Apresentar o total da soma obtida dos cem
 * primeiros números
 * inteiros (1+2+3+4+...+98+99+100) usando 'while'.
*/
//valor esperado: 5050
let soma = 0;
contador = 1; 

while (contador <= 100) {
    soma += contador; 
    contador++; 
}

alert(`A soma dos números de 1 a 100 é: ${soma}`); // Exibe o resultado da soma

