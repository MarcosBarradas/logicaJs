/**
 * @file pag46-ex5-h.js
 * @discipline React
 * @professor Jailson Costa
 * @student Marcos Vinicius
 * @date 12/04/2025
 * @description converte temperaturas de Celsius para Fahrenheit, de 10 em 10
// graus, começando em 10°C e terminando em 100°C
*/
let celsius = 10;
let fahrenheit = 0;
let mensagem = ""; // Inicializa a mensagem como uma string vazia
while (celsius <= 100) {
    fahrenheit = (9 * celsius + 160) / 5; 

    mensagem += `${celsius}°C = ${fahrenheit}°F\n`; // Adiciona a conversão à mensagem

    celsius += 10; // Incrementa a temperatura em Celsius
  }

  alert(mensagem); // Exibe a mensagem com todas as conversões
