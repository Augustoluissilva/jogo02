//46. Escreva um laço while que conte de 1 a 10 e exiba no console.
let numero = 10;
let contador = 0;
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

//56. Crie um laço que continue pedindo uma confirmação até que o usuário digite "sim".
//57. Calcule a média de 5 números digitados pelo usuário acumulando o valor em um laço.
//58. Crie um laço para gerar os primeiros 10 números da sequência de Fibonacci.
//59. Crie uma função que verifique se um número é primo.
//60. Simule um cofre que pede uma senha e permite até 3 tentativas antes de bloquear.
