/**
 * @file extra01.js
 * @discipline React
 * @professor Jailson Costa
 * @student Marcos Vinicius
 * @date 10/04/2025
 * @description  recebe um número de 1 a 7 e retorna o dia da semana
 * 1 - domingo
 * 2 - segunda
 * 3 - terça
 * 4 - quarta  
 * 5 - quinta
 * 6 - sexta
 * 7 - sábado
 * Se o número não estiver entre 1 e 7, retorna uma mensagem de erro
*/

let dia = parseInt(prompt(`digite de um a 7 o dia da semana`));

switch (dia) {
    case 1:
        alert(`domingo`);
        break;
    case 2:
        alert(`segunda`);
        break;
    case 3:
        alert(`terça`);
        break;
    case 4:
        alert(`quarta`);
        break;
    case 5:
        alert(`quinta`);
        break;
    case 6:
        alert(`sexta`);
        break;
    case 7:
        alert(`sábado`);
        break;
    default:
        alert(`não existe esse dia da semana`);
        break;
}