/**
 * @file pag46-ex5-i.js
 * @discipline React
 * @professor Jailson Costa
 * @student Marcos Vinicius
 * @date 12/04/2025
 * @description Efetua  a leitura de 10 valores numéricos e apresente no final
 * o total do somatório e a média aritmética dos valores lidos.
*/

//se eu usasse 10 diretamente eu iria ficar fadado a sempre ler 10 
// valores e se uma nova regra de negocio fosse implementada onde 
// precisassemos ler mais ou menos valores... iria ser dificil fazer manutenção.
//  no meu código você só precisa mudar a variável numeroDeLeituras

let valor = 0;
let somatorio = 0;
let media = 0;
let i = 0;
let numeroDeLeituras = 10; // variavel que define o numero de leituras

while (i < numeroDeLeituras) {
    valor = parseFloat(prompt(`informe o ${i}º valor`));
    somatorio += valor;
    console.log(`Valor ${i}: ${valor}`);
    i++;
}


media = somatorio / i;
alert(`A soma dos valores é: ${somatorio}\n
  A média dos valores é: ${media}`);

