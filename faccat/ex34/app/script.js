/**
 * @file ex34.js
 * @discipline React
 * @professor Jailson Costa
 * @student Marcos Vinicius
 * @date 10/04/2025
 * @description Recebe  2 valores (x e y), multiplica eles e soma eles com 5
 * para descobrir o valor de z. Exibe A se for menor ou igual a 0, B se for menor ou igual a 100 e C se for maior que 100.
*/

let x = parseFloat(prompt("Digite o valor de x: "));
let y = parseFloat(prompt("Digite o valor de y: "));
let z = (x * y) + 5;
let resposta = 0;

if(z <= 0){
    resposta = "A";
} else if(z <= 100){    
    resposta = "B";
} else {
    resposta = "C";
}

//ESSES VALORES POR EXEMPLO GERAM ESSES RESULTADOS

   //3x 2y =  11z                         resposta = B

   //150x 3y = 455z                       resposta = C

   //7x -1y =  -2z                        resposta = A

   // -2x 5y = -5z                        resposta = A

   //50x 3y = 155z                        resposta = C