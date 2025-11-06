const lista = ['Vitor', 'Igor', 'Nilton', 'Andre', 'Amanda', 'Alice'];

const ordemAlfabetica = lista.map(nome => nome.toLowerCase()).sort();

console.log(ordemAlfabetica);
//O .map percorre cada item do Array e para cada 'nome' ele transforma em letra minuscula com o .toLowerCase
//Apos padronizar o .sort organiza o array em ordem alfabética de A a Z
// Caso queira de Z a A é soó usar o .reverse apos o .sort