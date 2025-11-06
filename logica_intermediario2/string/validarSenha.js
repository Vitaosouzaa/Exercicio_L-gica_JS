//Crie uma função que valide se uma senha é forte (mínimo 8 caracteres, pelo menos 1 número, 1 maiúscula e 1 símbolo).

function validarSenha(string, limite) {
  const senha = string.length >= limite;
  const numero = "0123456789";
  const maiuscula = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const simbolo = "!@#$%^&*(),.?':{}|<>";

  const caracteres = string.split("");

  const temNumero = caracteres.some((c) => numero.includes(c));
  const temMaiuscula = caracteres.some((c) => maiuscula.includes(c));
  const temSimbolos = caracteres.some((c) => simbolo.includes(c));
  const senhaForte = senha && temNumero && temMaiuscula && temSimbolos;

  return { senha, temNumero, temMaiuscula, temSimbolos, senhaForte };
}

console.log(validarSenha("123asd12d", 8));

//O método .some() é uma função de array em JavaScript que verifica se pelo menos um elemento do array satisfaz uma condição. Se encontrar um único elemento que retorne true, ele para e retorna true. Se nenhum satisfizer, retorna false.
////No código acima, usamos .some() para verificar se a senha contém pelo menos um número, uma letra maiúscula e um símbolo especial.
//A função validarSenha recebe uma string (senha) e um limite mínimo de caracteres.
//Ela verifica se a senha atende aos critérios de força e retorna um objeto com os resultados das verificações.
