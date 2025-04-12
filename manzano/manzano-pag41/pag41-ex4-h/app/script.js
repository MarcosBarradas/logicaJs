/**
 * @file pag41-ex4-h.js
 * @discipline React
 * @professor Jailson Costa
 * @student Marcos Vinicius
 * @date 11/04/2025
 * @description Lê cinco naturais e identifica o maior e o menor valor.
*/

let numero1 = parseFloat(prompt("Digite o primeiro número: "));
let numero2 = parseFloat(prompt("Digite o segundo número: "));
let numero3 = parseFloat(prompt("Digite o terceiro número: "));
let numero4 = parseFloat(prompt("Digite o quarto número: "));
let numero5 = parseFloat(prompt("Digite o quinto número: "));
let numeros = [numero1, numero2, numero3, numero4, numero5];
let maior = 0;
let menor = 0;


numeros.forEach((numero, index) => {

    if (index == 0) {//se nao o menor sempre será 0 porque nenhum dos numeros digitados será menor que 0
        maior = numero;
        menor = numero;
    } else {
        if (numero > maior) { //compara cada numero com o maior encontrado até agora
            //se for maior que o maior encontrado até agora, então é o novo maior
            maior = numero;
        } else if (numero < menor) { //se não foi maior, compara para ver se é o menor seguindo a mesma lógica
            menor = numero;
        }
    }
}
)

alert(`O maior número é ${maior} e o menor número é ${menor}`);

