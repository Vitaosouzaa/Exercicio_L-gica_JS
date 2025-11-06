//Peça ao usuário um CPF no formato "000.000.000-00" e verifique se tem o formato correto (não precisa validar números).

const CPF = "000.000.000-00"//- Aqui estamos definindo uma variável chamada CPF com uma string que representa um CPF.

const formatoValido = /^\d{3}\.\d{3}.\d{3}-\d{2}$/.test(CPF)//Essa é a parte mais importante: usamos uma expressão regular (regex) para verificar se o CPF está no formato correto.
//- Esse método verifica se a string CPF bate com o padrão da regex.
//- Retorna true se estiver no formato correto, false se não estiver.

if (formatoValido) {
    console.log("formato valido");
}else{
    console.log("formato invalido");  
}

//O .test() é um método em JavaScript que pertence ao objeto RegExp (expressão regular). Ele serve para verificar se uma string corresponde a um padrão específico.
