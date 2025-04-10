/**
 * @file ex23.js
 * @discipline React
 * @professor Jailson Costa
 * @student Marcos Vinicius
 * @date 09/04/2025
 * @description  descobre se é macho ou femia e 
 * calcula peso
 */
let nome = prompt("Qual o seu nome?");
let peso = parseFloat(prompt("Qual o seu peso?"));
let altura = parseFloat(prompt("Qual a sua altura? ex: 1.75 - use ponto"));
let sexo = prompt("Qual o seu sexo? (M/F)").toUpperCase();
let pesoIdeal = 0;

if (sexo ==  "M") {
    pesoIdeal = 72.7 * altura - 58;
}
else if (sexo == "F") {
    pesoIdeal = 62.1 * altura - 44.7;
} else {
    alert("Sexo inválido");
}

alert(`O peso ideal de ${nome} é ${pesoIdeal.toFixed(2)} \n 
seu peso é ${peso}`);



