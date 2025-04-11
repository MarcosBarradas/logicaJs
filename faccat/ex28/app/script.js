/**
 * @file ex28.js
 * @discipline React
 * @professor Jailson Costa
 * @student Marcos Vinicius
 * @date 09/04/2025
 * @description  Lê três valores considerando - nunca
 * vão entrar valores iguais - e ver qual é o maior.
*/

let valor1 = parseInt(prompt("Digite o primeiro valor:"));
let valor2 = parseInt(prompt("Digite o segundo valor:"));
let valor3 = parseInt(prompt("Digite o terceiro valor:"));
let maiorValor = 0; //variável para armazenar o maior valor

if (valor1 > valor2 && valor1 > valor3) {
    maiorValor = valor1; //se valor1 for maior que valor2 e valor3, então é o maior
}
else if (valor2 > valor1 && valor2 > valor3) {
    maiorValor = valor2; //se valor2 for maior que valor1 e valor3, então é o maior
} else {
    maiorValor = valor3; //se não for nenhum dos dois, então é o terceiro
}
alert(`O maior valor é ${maiorValor}`); //exibe o maior valor