//Faça uma função que receba três números e retorne o maior deles.

//exemplo 1
function maiorNumero(num1, num2, num3) {
    if (num1 > num2 && num1 > num3) {
        return "É o maior entre os tres"
    }else if(num2 > num1 && num2 > num3) {
        return "É o maior entre os tres"
    }else if(num3 > num1 && num3 > num2) {
        return "É o maior entre os tres"
    }else{
        return "são iguais"
    }
}

console.log(`O numero 11 ${maiorNumero(1, 10, 11)}`);

//exemplo 2

function maiorNumeroVersaoDois(num1, num2, num3) {
    if (num1 >= num2 && num1 >= num3) {
        return num1;
    } else if (num2 >= num1 && num2 >= num3) {
        return num2;
    } else {
        return num3;
    }
}

// Teste
console.log(`O maior número é: ${maiorNumeroVersaoDois(1, 10, 11)}`); // Saída: 11

//exemplo 3

function maiorNumeroVersaoTres(num1, num2, num3) {
    const maior = Math.max(num1, num2, num3);

    if (num1 === num2 && num2 === num3) {
        return "Todos os números são iguais.";
    }

    return `O maior número é ${maior}.`;
}

console.log(maiorNumeroVersaoTres(1, 10, 11)); // Saída: O maior número é 11.

