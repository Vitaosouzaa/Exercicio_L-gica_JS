
function primo(num) {
    if (num / 1 === num && num / num === 1 && num & 2 !== 0){
        return true;
    }else{
        return false;
    }
};

console.log(primo(97));

//Crie uma função que receba um número e retorne true se ele for primo e false se não for.
//Um número primo é aquele que só é divisível por 1 e por ele mesmo.
