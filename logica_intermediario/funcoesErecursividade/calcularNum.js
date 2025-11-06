//Crie uma função recursiva que calcule a soma dos números de 1 até N.

function calcularNum (n) {
    if(n === 1) {
        return 1;
    }else{
        return n + calcularNum(n - 1)
    }
 }

 console.log(calcularNum(10));
 


//com for
function calcularSoma(n) {
  let soma = 0;
  for (let i = 1; i <= n; i++) {
    soma += i;
  }
  return soma;
}

console.log(calcularSoma(10));
