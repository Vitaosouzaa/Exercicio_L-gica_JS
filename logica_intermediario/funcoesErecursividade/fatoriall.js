//Crie uma função recursiva que calcule o fatorial de um número.

function fatorial(num) {
    if (num === 0 || num === 1) {
        return 1;
    } else if (num < 0) {
        return 'error';
    }else{
        return num * fatorial(num - 1);
    }
}

console.log(fatorial(5));
