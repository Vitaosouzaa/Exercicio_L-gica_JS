//Crie uma função que receba um número e retorne um array com todos os seus números primos até ele.

function numPrimo(num){
    if(num < 2) return false;

    for (let i = 2; i <= Math.sqrt(num); i++) {
        if(num % i === 0) return false;       
    }

    return true
}

function primosAte(n) {
  const array = [];

  for (let i = 2; i <= n; i++) {
    if (numPrimo(i)) {
      array.push(i);
    }
  }

  return array;
}
 console.log(primosAte(100));
 


