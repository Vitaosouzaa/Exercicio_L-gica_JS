let element = [];//array começa vazio

for (let i = 1; i <= 50; i++) { //faz a iteração
    if (i % 2 === 0) { // verifica ser o numero é par
        element.push(i); // adiciona os numeros pares no array
    }
}
console.log(element);

//Esse looping mostra os numeros pares de 1 a 50;