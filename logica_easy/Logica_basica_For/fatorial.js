
//- Define uma função chamada fatorial que recebe um parâmetro n, que é o número do qual queremos calcular o fatorial.

function fatorial(n) {
    if(n === 0 || n === 1) // - Verifica se n é igual a 0 ou 1
        return 1;
        //- Por definição matemática, o fatorial de 0 e 1 é sempre 1.
        // - Se essa condição for verdadeira, a função retorna 1 imediatamente e não executa o restante do código.
        let resultado = 1;//- Cria uma variável chamada resultado e inicializa com 1.
        //- Essa variável vai armazenar o produto acumulado dos números de 2 até n.


        //- Inicia um laço for que começa com i = 2 e vai até i <= n.
        //- Começamos em 2 porque já tratamos os casos de 0 e 1 antes.
        for (let i = 2; i <= n; i++) {
            resultado *= i; //- Multiplica o valor atual de resultado por i e atualiza resultado.
            //- Isso é equivalente a resultado = resultado * i.
    }
    return resultado
}

console.log(fatorial(5));