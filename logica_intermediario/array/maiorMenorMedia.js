//Crie uma função que receba um array de números e retorne um objeto com: {maior, menor, media}.

function maiorMenorMedia(arr1){
    const menor = Math.min(...arr1);
    const maior = Math.max(...arr1);
    const media = arr1.reduce((prev, curr) => prev + curr, 0) / arr1.length

    return {menor, maior, media}
}

const arrayNum = [100, 1000, 2, -2, 0]

console.log(maiorMenorMedia(arrayNum));
