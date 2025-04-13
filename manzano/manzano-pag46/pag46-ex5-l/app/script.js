/**
 * @file pag46-ex5-l.js
 * @discipline React
 * @professor Jailson Costa
 * @student Marcos Vinicius
 * @date 12/04/2025
 * @description Lê valores positivos inteiros até que um valor negativo
 * seja informado. Ao final apresenta o maior e o menor valores informados pelo
 * usuário.
*/

//var
let numero;
let maior;
let menor;
//Inicio
numero = parseInt(prompt(`Esse programa recebe vários valores naturais \n
  e devolve o maior e o menor\n
  Informe o primeiro número: `));
maior = numero;
menor = numero;
numero = parseInt(prompt(`deseja continuar? \n
     sim = informe mais um número \n
     não = informe um número negativo`));

while (numero >= 0) {
  if (numero > maior) {
    maior = numero;
  } else if (numero < menor) {
    menor = numero;
  } 
  numero = parseInt(prompt(`deseja continuar? \n
     sim = informe mais um número \n
     não = informe um número negativo`));
}

alert(`O maior número é: ${maior}\n
  O menor número é: ${menor}`);
//FimAlgoritmo