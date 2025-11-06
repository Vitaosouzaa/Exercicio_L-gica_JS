//Faça uma função que receba dois números e retorne o máximo divisor comum (MDC) deles.

function maximoDivisorComum(num1, num2) {
   while (num2 !== 0) {
        let temp = num2;
        num2 = num1 % num2;
        num1 = temp;
   }
   return num1;
}

console.log(maximoDivisorComum(48, 18));
