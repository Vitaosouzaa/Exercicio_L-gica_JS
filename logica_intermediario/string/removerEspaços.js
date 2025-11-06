//Crie uma função que receba uma string e remova os espaços duplicados.

function removerEspacoDuplicados(string) {
    return string.replace(/\s+/g, ' ').trim();
}

const frase = "  Remover  os espaços  que  estão dublicados  ";

console.log(removerEspacoDuplicados(frase));

// - \s+ → seleciona um ou mais espaços em branco (inclui tabulação e quebras de linha).
// - ' ' → substitui por um único espaço.
// - .trim() → remove espaços extras no início e no fim da string.

// Se quiser aplicar isso em textos de formulários, nomes de usuários ou até limpar dados antes de salvar, posso te mostrar como adaptar. Quer aplicar isso em algum projeto específico?
