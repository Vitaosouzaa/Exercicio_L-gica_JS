//Peça uma frase e conte quantas vezes a palavra "JavaScript" aparece.

const frase = "Estou estudando muito javascript";
const tratamento = frase.toLowerCase().replace(/[^\w\s]/g, '').split(' ');
const procurarpalavra = tratamento.filter(palavra => palavra === 'javascript')

console.log(procurarpalavra.length);

//.replace(/[^\w\s]/g, '') // remove pontuação
// Ela é usada para remover pontuação e símbolos de uma string, mantendo apenas letras, números e espaços. Aqui vai o que cada parte significa:

// 🔍 Quebra da expressão:
// - /.../g → Isso é uma expressão regular com a flag g (global), que aplica a substituição em toda a string, não apenas na primeira ocorrência.
// - [^\w\s] → Esse é o coração da expressão:
// - \w → representa caracteres alfanuméricos: letras (A–Z, a–z) e números (0–9), além do underscore _.
// - \s → representa espaços em branco (espaço, tabulação, quebra de linha).
// - ^ → dentro de colchetes, significa negação. Ou seja, tudo que não for letra, número, underscore ou espaço.
// 👉 Portanto, [^\w\s] significa: qualquer caractere que não seja letra, número, espaço ou underscore.

