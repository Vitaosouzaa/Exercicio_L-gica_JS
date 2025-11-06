const frase = "Isso é pesquisa de mercado, análise da concorrência e escuta ativa de clientes";

const fraseModificada = frase.replace(/a/gi, "@");

console.log(fraseModificada)

//O método .replace() em JavaScript é uma ferramenta poderosa para substituir partes de uma string por outra coisa — seja uma letra, palavra ou até um padrão mais complexo.
//string.replace(valorAntigo, valorNovo);
//string.replace("a") é o que quer ssubtitituir, ("@") é que poe no lugar
// o "g" - significa global, ou seja, todas as ocorrências, ou seja, Substitui todas as letras "a"
//- i significa case-insensitive, ou seja, ignora se é "A" ou "a"

