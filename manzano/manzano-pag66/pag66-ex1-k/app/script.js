/**
 * @file pag66-ex1-.js
 * @discipline React
 * @professor Jailson Costa
 * @student Marcos Vinicius
 * @date 12/04/2025
 * @description calcula o fatorial de numeros ímpares de 1 a 10 e exibe somatoria deles
 * 
 */ 
        //PENDENTE
let somatoria;
for (let i = 1; i < 10; i+=2) {
  let fatorial = 1;
  for (let j = 1; j <= i; j++) {
    fatorial *= j;
  } console.log(`${i}!: ${fatorial}`);
  somatoria += fatorial;
}


alert(`fatorial de todos os ímpares de 1 a 10: ${somatorio}`);