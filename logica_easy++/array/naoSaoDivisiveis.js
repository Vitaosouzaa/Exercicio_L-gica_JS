//Faça um programa que receba um array de números e retorne apenas aqueles que não são divisíveis por 2 nem por 3.

let array = [];

for (let i = 1; i <= 100 ; i++) {
    if (i % 2 !== 0 && i % 3 !== 0) {
        array.push(i)
    }    
}

console.log(array);
