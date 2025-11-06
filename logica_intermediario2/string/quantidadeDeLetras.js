//Crie uma função que receba uma string e retorne a quantidade de letras únicas (que aparecem apenas uma vez).

function letrasSemRepetir(string) {
  const palavra = string
    .toLowerCase()
    .split("")
    .filter((letra) => "abcdefghijklmnopqrstuvwxyz".includes(letra));
  const quantidade = {};

  for (const letras of palavra) {
    quantidade[letras] = (quantidade[letras] || 0) + 1;
  }

  let unicas = 0;
  for (const letra in quantidade) {
    if (quantidade[letra] === 1) {
      unicas++;
    }
  }

  return unicas;
}

console.log(letrasSemRepetir("macarrao"));

// Explicação:
// 1. A função letrasSemRepetir recebe uma string como argumento.
// 2. Converte a string para minúsculas, divide em um array de caracteres e filtra apenas as letras do alfabeto.
// 3. Cria um objeto quantidade para contar as ocorrências de cada letra.
// 4. Itera sobre o array de letras, incrementando a contagem no objeto quantidade.
// 5. Itera sobre o objeto quantidade para contar quantas letras aparecem apenas uma vez.
// 6. Retorna o número de letras únicas.
// 7. Exibe o resultado no console.

// Observação: A função considera apenas letras do alfabeto inglês (a-z). Caracteres acentuados e outros símbolos são ignorados.
