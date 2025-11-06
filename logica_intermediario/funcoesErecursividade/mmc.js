//Crie uma função que calcule o mínimo múltiplo comum (MMC) de dois números.

function mdc(num1, num2) {
    while (num2 !== 0) {
        let temp = num2;
        num2 = num1 % num2;
        num1 = temp;
    }
    return num1;
}

function mmc(num1, num2){
    const maximoDivisor = mdc(num1,num2)
    return(num1 * num2) / maximoDivisor;
}

console.log(mmc(12, 45));
