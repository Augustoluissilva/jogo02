//31. Crie uma função que diga "Olá, [nome]!" recebendo o nome por parâmetro.
let solicitarNomeUsuario = prompt('Insira seu nome:');
function BoasVindas(nome){
    //Para esse exercicio é necessario criar um parâmetro, pois ele é a entrada onde coloca a função para trabalhar.
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
let largura = parseFloat(prompt('Insira o valor da largura do retângulo:'));//pedir o valor da largura para o usuário
let altura = parseFloat(prompt('Insira o valor da altura do retângulo'));//pedir o valor da altura para o usuário
let area = valorFinal(largura, altura);//variavel criada para armazenar o valor final, que é calculado dentro da função
function valorFinal(largura1, altura1){//função executa a multiplicação entre largura * altura
    return largura1 * altura1;// o return pega o resultado dessa multiplicação e joga para a variavel area que chama a função.
}
alert(`A área do retângulo é ${area.toFixed(2)}`);
//35. Crie uma função que receba o raio de um círculo e retorne sua área.
let solicitarRaio = parseFloat(prompt('Informe qual é o raio do círculo:'));
let circulo = calcularArea(solicitarRaio);
function calcularArea(raio){
    return 3.14 * raio ** 2; 
}
alert(`A área do círculo é ${circulo.toFixed(2)}`);
//36. Crie uma função que converta Reais para Dólar. Melhorar desafio!
let cotacao = 5.12;
let solicitarReais = parseFloat(prompt('Informe o valor que deseja fazer a conversão de Reais para Dolar:'));
let valorDolar = calcularDolar(cotacao, solicitarReais);
function calcularDolar(cotacaoMoeda, valorReais){
    return valorReais / cotacaoMoeda;
}
alert(`O valor da cotação é de ${valorDolar.toFixed(2)}`);
//37. Crie uma função que receba 3 notas e retorne a média.
let nota1 = parseFloat(prompt('Insira a primeira nota do aluno:'));
let nota2 = parseFloat(prompt('Insira a segunda do aluno:'));
let nota3 = parseFloat(prompt('Insira a terceira nota do aluno'));
let media = calcularMediaAluno(nota1, nota2, nota3);
function calcularMediaAluno(n1, n2, n3){
    return (n1 + n2 + n3)/ 3;
}
alert(`A media do aluno é de ${media.toFixed(2)}`);
//38. Crie uma função que receba a idade e retorne o ano de nascimento.
let solicitarIdadeDoUsuario = parseInt(prompt('Digite a sua idade:'));
const anoAtual = 2026;
let nascimento = calcularDataDeNascimento(solicitarIdadeDoUsuario, anoAtual);
function calcularDataDeNascimento(idade, ano){
    return ano - idade;
}
alert(`Você nasceu em ${nascimento}`);
//39. Crie uma função que receba uma string e retorne a quantidade de caracteres dela (length).
let solicitarTexto = prompt('escreva uma palavra:');
let caracteres = quantidadeDeCaracteres (solicitarTexto);
function quantidadeDeCaracteres(texto){
    return texto.length//length serve para descobrir o tamanho de uma sequencia, como a quantidade de letras que tem uma palvra ou o tamanho  de um array.
}
alert(`A quantidade de caracteres que a palavra ${solicitarTexto} tem é de ${caracteres} letras!`);
//40. Crie uma função que receba um preço e retorne com 5% de imposto adicionado.
let solicitarPreco = parseFloat(prompt('Insira o preço do produto:'));
let precoFinal = adicionarImposto(solicitarPreco);
function adicionarImposto(preco, ){
    return preco + (preco * 0.05);
}
alert(`O valor final com 5% de imposto adicionado ao produto é de ${precoFinal.toFixed(2)}`);
//41. Crie uma função que receba dois textos e retorne a concatenação deles com espaço.
let pedirPalavra1 = prompt('Digite qualquer palavra:');
let pedirPalavra2 = prompt('Digite outra palavra:');
let unir = concatenarPalavras(pedirPalavra1, pedirPalavra2);
function concatenarPalavras(palavra01, palavra02){
    return palavra01 + "" + palavra02;
}
alert(unir);
//42. Crie uma função que retorne o maior valor entre três números passados como parâmetros.
let numero01 = parseInt(prompt('Digite o primeiro número'));
let numero02 =parseInt(prompt('Digite o segundo número'));
let numero03 = parseInt(prompt('Digite o terceiro número'));
let numeroMaior = descobrirNumeroMaior(numero01, numero02, numero03);
function descobrirNumeroMaior(numero1,numero2,numero3){
    if(numero1 >= numero2 && numero1 >= numero3){
        return numero1;
    }else if(numero2 >= numero3 && numero2 >= numero1){
        return numero2;
    }else{
        return numero3;
    }
}
alert(`O número maior entre os valores inseridos é ${numeroMaior}`);
//43. Crie uma função para converter minutos em segundos.
let minutos = parseInt(prompt('Insira quantos minutos queira converter para segundos:'));
let converter = converterMinutosParaSegundos(minutos);
function converterMinutosParaSegundos(tempoMinutos){
    return tempoMinutos * 60;
}
alert(`A converção de minutos inseridos em segundos é: ${converter}`)
//44. Crie uma função que verifique se um número é múltiplo de 5.
let numeroQualquer = parseInt(prompt('Digite um número para começar a brincadeira:'));
let verificar = verificarNumeroMultiplo(numeroQualquer);
function verificarNumeroMultiplo(numeroMultiploQualquer){
    return numeroMultiploQualquer % 5 ==0;
}
if(verificar){
    alert(`O número ${numeroQualquer} é múltiplo por 5`);
}else{
    alert(`O número ${numeroQualquer} não é múltiplo por 5`);
}
//45. Crie uma função que receba o preço original e a porcentagem de desconto e retorne o valor final.
let solicitarPrecoDeCompra = parseFloat(prompt('Insira o valor do produto:'));
let desconto = parseFloat(prompt('Insira o valor de desconto do produto:'));
let taxaDecimal = converterParaDecimal(desconto);
let valorFinalComDesconto = calcularValorFinal(solicitarPrecoDeCompra, taxaDecimal);
function converterParaDecimal(taxa){
    return taxa / 100;
}
function calcularValorFinal(compra, descontoProduto){
    return compra - (compra * descontoProduto);
}
alert(`O valor final de sua compra é : ${valorFinalComDesconto}`);