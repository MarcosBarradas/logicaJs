/**
 * @file pag41-ex4-e.js
 * @discipline React
 * @professor Jailson Costa
 * @student Marcos Vinicius
 * @date 11/04/2025
 * @description  lê três valores (variáveis A, B e C) e
 * calcula a equação completa de segundo grau, apresentando as duas
 * raízes, se para os valores informados for possível efetuar o
 * referido cálculo. 
 * Nesse código fiz comentários abundantes explicando como funciona  Bhaskara
 * para que até uma pessoa que tenha esquecido o assunto possa relembrar e entender.
*/
//testes: 
// a = 1, b = -5, c = 6  duas raizes reais
//a = 1, b = 2, c = 1    uma raiz real
// a = -1                erro "não pode ser 0"
// a = 1, b = 2, c = 3   erro "delta negativo"

let a = parseFloat(prompt("Digite o valor de A: "));
let b;
let c;
let delta = 0;
let x1 = 0;
let x2 = 0;

if (a == 0) {
    alert(`Calma kk, está tentando fazer uma equação de segundo grau com A = 0?  
        com 0x²? \n
        Deus perdoa, eu não.\n
         se A = 0 não é uma equação de segundo grau, é uma equação de primeiro grau kk.\n
        Traduzindo: "A" não pode ser 0`);
    throw new Error("A não pode ser 0");
} else {
    b = parseFloat(prompt("Digite o valor de B: "));
    c = parseFloat(prompt("Digite o valor de C: "));
    delta = b ** 2 - (4 * a * c);
}
if (delta < 0 /*se for negativo*/) {
    alert(`não existe raiz quadrada de número negativo, então não existe raiz real para essa equação. \n
    Deus perdoa, eu não.\n
    Traduzindo: "Delta" não pode ser negativo`);
    throw new Error("Delta negativo, não existe raiz real.");
} else if (delta == 0) {
    //se delta == 0, (b -) ou (b +) raiz de delta dão o mesmo resultado... então só precisa calcular uma vez porque tanto x1 quanto x2 vão dar o mesmo resultado.
    x1 = -b / (2 * a);
    alert(`A equação tem uma raiz real: \n
        x = ${x1.toFixed(2)}`);
} else {
    //cenário perfeito
    x1 = (-b + (delta ** 0.5)) / (2 * a); //raiz positiva
    x2 = (-b - (delta ** 0.5)) / (2 * a); //raiz negativa
    alert(`A equação tem duas raízes reais: \n
        x1 = ${x1.toFixed(2)} \n
        x2 = ${x2.toFixed(2)}`);
}




