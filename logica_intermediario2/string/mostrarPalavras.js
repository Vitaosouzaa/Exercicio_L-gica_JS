// Crie uma função que receba uma string e devolva todas as palavras que aparecem mais de uma vez.

function mostrarPalavras(frase) {
  // Normaliza a frase para minúsculas e extrai somente sequências de letras
  // \p{L} com a flag 'u' captura letras Unicode (inclui letras acentuadas)
  // match(...) retorna um array de palavras ou null; o '|| []' garante um array vazio
  const palavras = frase.toLowerCase().match(/\p{L}+/gu) || [];

  // Usa reduce para construir um objeto de contagem: { palavra: ocorrencias }
  // Em cada iteração incrementamos o contador para a palavra atual e retornamos o acumulador
  const contagem = palavras.reduce((acc, palavra) => {
    acc[palavra] = (acc[palavra] || 0) + 1;
    return acc; // importante: retornar o acumulador para a próxima iteração
  }, {});

  // Object.keys(contagem) transforma o objeto em um array de palavras
  // filter seleciona apenas as palavras cuja contagem é >= 2
  const aparecemMaisDeUmaVez = Object.keys(contagem).filter(
    (palavra) => contagem[palavra] >= 2
  );

  // Retorna um array com as palavras que aparecem mais de uma vez
  return aparecemMaisDeUmaVez;
}

const sentenca = "Chove, chove, e o tempo não cansa e chove";

console.log(mostrarPalavras(sentenca));
