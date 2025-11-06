//Crie um array com 5 números e mostre o maior número.

const numero = [10, 11, 7, 71, 100];
let maiorNumero = numero[0];

for (let i = 0; i < numero.length; i++) {
    if(numero[i] > maiorNumero){
        maiorNumero = numero[i];
    }
}
console.log(maiorNumero);


//outra forma de achar o maior numero
const numeroDois = [10, 11, 7, 71, 100];
const maiorNumeroDois = Math.max(...numeroDois);
console.log(maiorNumeroDois); // Resultado: 100

//Math.max(...numero) → Math.max() retorna o maior valor entre os números fornecidos.
//O operador ... (spread) "espalha" os elementos do array como argumentos individuais para a função Math.max().
//Se não usar o ... (spread), Math.max(numero) tentaria comparar o array inteiro como um único argumento, o que não funcionaria corretamente.
