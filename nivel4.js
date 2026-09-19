//46. Escreva um laço while que conte de 1 a 10 e exiba no console.
let numero = 10;
let contador = 1;
while(contador <= numero){
    console.log(contador);
    contador++;
}
//47. Escreva um laço while que faça uma contagem regressiva de 10 a 0.
let n1 = 0;
let contadorRegressivo = 10;
while(contadorRegressivo >= n1){
    console.log(contadorRegressivo);
    contadorRegressivo--;
}
//48. Crie uma função que calcule a tabuada de um número de 1 a 10 usando while.
let numeroSolicitado = parseInt(prompt('Digite um número de 1 a 10'));
let resultado = calcularTabuada(numeroSolicitado);

function calcularTabuada(num){
let textoTabuada = '';  
let contadorTabuada = 1;

    while(contadorTabuada <= 10){
        let multiplicacao = num * contadorTabuada;
        textoTabuada += `${num} X ${contadorTabuada} = ${multiplicacao}\n`;
        contadorTabuada++;
    }
    return textoTabuada;
}
alert(resultado);
//49. Crie uma função que calcule a tabuada de um número usando for.
let solicitarNumero = parseInt(prompt('Digite um número de 1 a 10'));
let resultadoDaMultiplicacao = tabuada(solicitarNumero);
function tabuada(numeroSolicitado){
    let texto = '';

    for(let cont = 1; cont <= 10; cont++){
        let multi = numeroSolicitado * cont;
        texto += `${numeroSolicitado} X ${cont} = ${multi}\n`;
    }
    return texto;
}
alert(resultadoDaMultiplicacao);
//50. Calcule a soma de todos os números inteiros de 1 a 100 usando um laço.
let soma = 0;
for(let nu = 1; nu <= 100; nu++){
     soma = soma + nu;
     console.log(`A soma de 1 a 100 é: ${soma}`);

}
//51. Crie uma função para calcular o fatorial de um número recebido por parâmetro.
let numeroParaCalcularFatorial = parseInt(prompt('Digite um número'));
let resultadoFatorial = calcularFatorial(numeroParaCalcularFatorial);
function calcularFatorial(nufato){
    let resul = 1;
    for(let conta = nufato; conta >= 1; conta--){
        resul = resul * conta
    }
    return resul;
}
alert(`O fatorial de ${numeroParaCalcularFatorial} é ${resultadoFatorial}`);
//52. Exiba todos os números pares entre 1 e 50.
let numeroPar = 1;

while(numeroPar <= 50){
    if(numeroPar % 2 ==0){
        console.log(numeroPar);
    }
    numeroPar++;
    
}
//53. Exiba todos os números ímpares entre 1 e 50.
for(let numeroImpar = 1; numeroImpar <= 50; numeroImpar++){// da para colocar numeroImpar +=2, para não colocar o if, ai o código vai saltar de dois em dois e retornando o mesmo resultado
    if(numeroImpar % 2 == 1){
        console.log(numeroImpar);
    }
}
//54. Crie uma função que receba $N$ e retorne a soma de todos os números pares de 1 até $N$.
let solicitarNumeroIndefinido = parseInt(prompt('Digite um número para começar:'));
let resultadoSoma = calcularNumeroIndefinido(solicitarNumeroIndefinido);
function calcularNumeroIndefinido(nume){
    let soma = 0;
    for(let numero = 1; numero <= nume; numero++){
        if(numero % 2 ==0){
            soma += numero;// guarda o numero par dentro da variavel soma "cofre"
        } 
    }
    return soma;
}
 alert(resultadoSoma);
//55. Escreva um algoritmo que conte quantos números negativos existem em uma sequência dada.
let quantidadeNumeros = [-10, 9, -5, 6, -20, -17, 1, 5, -2, 3];
let totalNumerosNegativos = 0;
for(let contadorNumerosNegativos = 0; contadorNumerosNegativos < quantidadeNumeros.length; contadorNumerosNegativos++){
    if(quantidadeNumeros[contadorNumerosNegativos] < 0){
        totalNumerosNegativos++;
    }
}
if(totalNumerosNegativos >0){
    alert(`O total de  números negativos na lista  são: ${totalNumerosNegativos}`);
}else{
    alert('Não há números negativos.')
}
//56. Crie um laço que continue pedindo uma confirmação até que o usuário digite "sim".
let digitarPalavraCerta = prompt('Insira a palvra chave de confirmação:');
let palavraCerta = 'sim';
while(digitarPalavraCerta !== palavraCerta){
    alert('A palvra chave inserida não está correta, tente novamente!');
    digitarPalavraCerta = prompt('Insira a palvra chave');
}
alert('Confirmação realizada com sucesso!');
//57. Calcule a média de 5 números digitados pelo usuário acumulando o valor em um laço.

function CalcularMediaCintoNumeros(){//função chamada CalcularMediaCincoNumeros
let soma = 0;// variavel acumuladora
for(let nu =1; nu <=5; nu++){//inicio do laço de repetição, cria uma variavel nu e ela tem como valor 1 inicio da rodada, avalia a condição antes de cada rodada iniciar vai rodar enquanto o nu for <=5, nu++ incrementa 1 a variavel nu ao termino de cada volta
    let numerosCalcular = parseInt(prompt(`Digite um ${nu} número:`));//essa variavel tem duas funções, a primeira seria o prompt que exibe um texto na tela exibindo em qual rodada está por conta do ${nu}, e o parseInt que converte o texto digitado pelo o usuario para um número inteiro, armazena o valor na variavel local numeroCalcular.
    soma += numerosCalcular;// adiciona o valor de numeroCalcular ao valor que já estava contido em soma equivale soma = soma + numeroCalcular.
}
let media = soma /5;// variavel media, que pega os valores acumulados na variavel soma e divide por cinco.
return media;//finaliza a sessão e retorna o valor.
}
let resultadoTotalMedia = CalcularMediaCintoNumeros();//Chama a função CalcularMediaCintoNumeros(). Toda a lógica interna é executada e o valor retornado por ela é salvo na variável resultadoTotalMedia
alert(`A media entre os números é: ${resultadoTotalMedia}`);//lert(\A media entre os números é: ${resultadoTotalMedia}`);Abre um pop-up na tela exibindo a mensagem final com o valor numérico que foi guardado na variávelresultadoTotalMedia`.
//58. Crie um laço para gerar os primeiros 10 números da sequência de Fibonacci.
let a = 0;
let b = 1;
for(let numeroFibonacci = 1; numeroFibonacci <= 10; numeroFibonacci++){
    console.log(a);
    let proximo = a + b;
    a = b;
    b = proximo;
}
//59. Crie uma função que verifique se um número é primo.
function verificarNumeroPrimo(){
    let primo = true;
    let solicitarNumeroPrimo = parseInt(prompt('Digite um número:'));
    if(solicitarNumeroPrimo <= 1){
        alert(`O ${solicitarNumeroPrimo} não é primo.`)
        return;
    }
    

    for(let nuPrimo = 2; nuPrimo < solicitarNumeroPrimo == 0; nuPrimo++){
        if(solicitarNumeroPrimo % nuPrimo === 0) {
            primo = false; 
            break;
    }
}
if(primo){
    alert(`${solicitarNumeroPrimo} é um número primo!`);
}else{
    alert(`${solicitarNumeroPrimo} não é um número primo.`);
}
}
verificarNumeroPrimo();
//60. Simule um cofre que pede uma senha e permite até 3 tentativas antes de bloquear.
let senha = 'adm123';
let acessoLiberado = false;
for(let i = 1; i <=3; i++){
    let solicitarSenha = prompt(`Digite a sua senha:`);
    if(solicitarSenha == senha){
        acessoLiberado = true;
        break;
    }else{
        alert(`A senha está incorreta, essa foi a sua ${i} tentativa.`);
    }
}
if(acessoLiberado){
    alert('Senha correta, acesso liberado.');
}else{
    alert('Cofre bloqueado, você errou as 3 tentativas.');
}
// Revisão:
//Exercício 1: Encontrar o Maior Número da Lista
//Objetivo: Praticar navegação em arrays e comparação de valores.
//Enunciado: Dado o array let numeros = [15, 42, 8, 99, 23, 74, 5];, crie um programa que percorra a lista e descubra qual é o maior número contido nela. Ao final, exiba apenas o maior número encontrado.
//Dica de lógica: Crie uma variável maior antes do laço que comece valendo o primeiro item da lista (numeros[0]). Dentro do laço, teste se o número atual é maior do que o que está guardado nela.
