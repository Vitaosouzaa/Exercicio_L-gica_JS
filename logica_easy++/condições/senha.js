//Peça ao usuário uma senha e verifique se ela tem pelo menos 8 caracteres, uma letra maiúscula e um número.


const password = "Abcde1mn";
const temNumero = /\d/.test(password);//→ Verifica se há pelo menos um número
if (password.length >= 8 //Garante que a senha tenha pelo menos 8 caracteres.
    && password.match(/[A-Z]/) //→ Verifica se há pelo menos uma letra maiúscula
    && password.match(/[a-z]/) //→ Verifica se há pelo menos uma letra minúscula
    && temNumero === true) {
        console.log("Senha valida!!");
}else{
    console.log("Senha invalida");
    
};

//- \d significa qualquer dígito numérico (de 0 a 9).
//- /\d/ → Isso é uma expressão regular:
//- As barras /.../ delimitam a expressão regular.
//- .test(password) → O método test verifica se a expressão regular corresponde a alguma parte da string password. Retorna true ou false.