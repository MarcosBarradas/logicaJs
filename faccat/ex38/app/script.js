/**
 * @file ex38.js
 * @discipline React
 * @professor Jailson Costa
 * @student Marcos Vinicius
 * @date 10/04/2025
 * @description  algoritmo que recebe usuario como entrada
 * (1234) e diz se tá errado
 * se estiver certo pede a senha(9999) tbm e se senha estiver certa mostra a msg
 * usuário válido
*/

let usuarioCadastrado = 1234;
let senhaCadastrada = 9999;
let usuario = parseInt(prompt(`Digite seu usuário`));

if (usuarioCadastrado === usuario) {

    senha = parseInt(prompt(`Digite sua senha`));

    if (senha !== senhaCadastrada) {
        alert(`Senha inválida`);
        throw new Error(`Senha inválida`);
    }


} else {

    alert(`Usuário inválido`);
    throw new Error(`Usuário inválido`);
    
}

alert(`acesso permitido`);


