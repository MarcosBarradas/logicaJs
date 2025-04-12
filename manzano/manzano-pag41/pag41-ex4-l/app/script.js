/**
 * @file pag41-ex4-l.js
 * @discipline React
 * @professor Jailson Costa
 * @student Marcos Vinicius
 * @date 11/04/2025
 * @description Lê nome e sexo de uma pessoa, apresentando com
 * saída uma das seguintes mensagens: "Ilmo Sr.", se o sexo informado como
 *  masculino, ou a mensagem "Ilma Sra.", para o sexo informado como feminino.
*/

let nome = prompt("Digite seu nome: ");
let sexo = prompt("Digite seu sexo (M/F): ").toUpperCase();
let mensagem = sexo == "M" ? `Ilmo Sr. ${nome}` : `Ilma Sra. ${nome}`;
alert(mensagem);





