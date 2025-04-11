/**
 * @file ex29.js
 * @discipline React
 * @professor Jailson Costa
 * @student Marcos Vinicius
 * @date 10/04/2025
 * @description  Lê três valores diferentes e soma os dois maiores
*/

let primeiro = parseInt(prompt("Digite o primeiro valor:"));
let segundo = parseInt(prompt("Digite o segundo valor:"));
let terceiro = parseInt(prompt("Digite o terceiro valor:"));
let soma = 0; //variável para armazenar a soma dos dois maiores valores

if(terceiro < primeiro && terceiro < segundo) { //verifica se o terceiro é o menor
    soma = primeiro + segundo; //se for, soma os dois primeiros
} else if(primeiro < segundo && primeiro < terceiro) { //verifica se o primeiro é o menor
    soma = segundo + terceiro; //se for, soma os dois últimos
} else { //se não for nenhum dos dois, então o segundo é o menor
    soma = primeiro + terceiro; //soma o primeiro e o terceiro
}

alert(`A soma dos dois maiores valores é ${soma}`); //exibe a soma dos dois maiores valores
