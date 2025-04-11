/**
 * @file ex36.js
 * @discipline React
 * @professor Jailson Costa
 * @student Marcos Vinicius
 * @date 10/04/2025
 * @description  lê as idades de 2 homens e de 2 mulheres (considera que as
 * idades dos homens serão sempre diferentes entre si, bem como as das mulheres).
 * Calcula e escreve a soma das idades do homem mais velho com a mulher mais
 * nova, e o produto das idades do homem mais novo com a mulher mais velha.
 *  Se for gasolina da 4% de desconto até 20L e 6% acima de 20L
 * Se for Álcool da 3% de desconto até 20L e 5% acima de 20L
*/

let homem1 = parseInt(prompt(`Escreva a idade de um homem`));
let homem2 = parseInt(prompt(`Escreva a idade de um homem diferente`));
let mulher1 = parseInt(prompt(`Escreva a idade de uma mulher`));
let mulher2 = parseInt(prompt(`Escreva a idade de uma mulher diferente`));

let velhoComNova;
let novoComVelha;

if (homem1 > homem2) {
    // Se homem1 for o mais velho 
    if (mulher1 < mulher2) {
        // Se mulher1 for a mais nova
        velhoComNova = homem1 + mulher1;
        novoComVelha = homem2 * mulher2;
    }
    else {
        velhoComNova = homem1 + mulher2;
        novoComVelha = homem2 * mulher1;
    }

} else {
    // Se homem2 for o mais velho
    if (mulher1 < mulher2) {
        // Se mulher1 for a mais nova
        velhoComNova = homem2 + mulher1;
        novoComVelha = homem1 * mulher2;
    }
    else {
        velhoComNova = homem2 + mulher2;
        novoComVelha = homem1 * mulher1;
    }

}


alert(`A soma do mais velho com a mais nova: ${velhoComNova}\n
    O produto do mais novo com a mais velha: ${novoComVelha}`);
