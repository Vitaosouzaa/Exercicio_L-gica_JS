//Crie um array com nomes e mostre apenas os que tiverem mais de 5 letras.

const lista = ['Vitor', 'Igor', 'Nilton', 'Andre', 'Amanda', 'Alice'];

const arrayNome = lista.map(nome => nome.toLowerCase()).filter(nome => nome.length > 5);

console.log(arrayNome);

//O .map percorre cada item do Array e para cada 'nome' ele transforma em letra minuscula com o .toLowerCase
//O .filter percorre cada item do Array e para cada 'nome' ele verifica se o tamanho do nome é maior que 5 letras com o .length > 5
//Caso seja maior que 5 ele retorna o nome no novo array, caso contrario ele ignora o nome.
