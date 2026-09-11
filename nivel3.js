//31. Crie uma função que diga "Olá, [nome]!" recebendo o nome por parâmetro.
let solicitarNomeUsuario = prompt('Insira seu nome:');
function BoasVindas(nome){
    alert(`Olá ${nome}`);
}
BoasVindas(solicitarNomeUsuario);// ele pega a informação que está armazenada na variavel solicitarNomeUsuario , joga esse valor para dentro do parametro nome e dentro da função a variavel nome ganha o valor que está armazenado na variavel solicitarNomeUsuario.
//32. Crie uma função que receba dois números e retorne a soma.
let n1 = parseInt(prompt('Digite um número qualquer:'));
let n2 = parseInt(prompt('Digite outro número qualquer:'));
let resultado = somar(n1, n2);
function somar(nume1, nume2){
    return nume1 + nume2;
}
alert(`O resultado da soma entre o ${n1} e ${n2} é ${resultado}`);

//33. Crie uma função que receba um número e retorne true se for par e false se for ímpar.
let solicitarNumero = parseInt(prompt('insira um número:'));

function verificar(numero){
    if(numero % 2 == 0){
        return true
    }else{
        return false
    }
}
alert(verificar(solicitarNumero))  ;
//34. Crie uma função que receba a largura e altura de um retângulo e retorne sua área.
//35. Crie uma função que receba o raio de um círculo e retorne sua área.
//36. Crie uma função que converta Reais para Dólar.
//37. Crie uma função que receba 3 notas e retorne a média.
//38. Crie uma função que receba a idade e retorne o ano de nascimento.
//39. Crie uma função que receba uma string e retorne a quantidade de caracteres dela (length).
//40. Crie uma função que receba um preço e retorne com 5% de imposto adicionado.
//41. Crie uma função que receba dois textos e retorne a concatenação deles com espaço.
//42. Crie uma função que retorne o maior valor entre três números passados como parâmetros.
//43. Crie uma função para converter minutos em segundos.
//44. Crie uma função que verifique se um número é múltiplo de 5.
//45. Crie uma função que receba o preço original e a porcentagem de desconto e retorne o valor final.
