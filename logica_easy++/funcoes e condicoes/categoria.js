//Faça uma função que receba a idade de uma pessoa e retorne a categoria de natação (Ex: até 5 anos: bebê, 6–12: infantil, 13–18: juvenil, 19+: adulto).

function categoriaDeCompeticao(idade) {
    if (idade <= 5) {
        return "Bebê";
    }else if (idade > 5 && idade <= 12) {
        return "Infantil";
    }else if (idade >= 13  && idade <= 18) {
        return "Juvenil";
    }else{
        return "Adulto";
    }
}

console.log(`Idade 10 → Categoria: ${categoriaDeCompeticao(10)}`);
console.log(`Idade 20 → Categoria: ${categoriaDeCompeticao(20)}`);
console.log(`Idade 15 → Categoria: ${categoriaDeCompeticao(15)}`);
console.log(`Idade 4  → Categoria: ${categoriaDeCompeticao(4)}`);

