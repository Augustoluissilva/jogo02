function exibirTituloNaTela(tag,texto){
    let titulo = document.querySelector(tag);
    titulo.innerHTML = texto;
}
exibirTituloNaTela('h1', 'Seja-Bem vindos(as) a minha nova página de estudos');

function calcularMedia(){
    let nota1 = parseInt(prompt('Digite a sua primeira nota:'));
    let nota2 = parseInt(prompt('Digite a sua segunda nota:'));
    let nota3 = parseInt(prompt('Digite a sua terceira nota:'));

    let media = (nota1 + nota2 + nota3) / 3;
    if(media >= 7){
        return 'Aprovado!';
    }else{
       return 'Reprovado';
    }
}
alert(calcularMedia());

//Crie uma função que calcule o índice de massa corporal (IMC) de uma pessoa, a partir de sua altura, em metros, e peso, em quilogramas, que serão recebidos como parâmetro.

/*/function CalculaImc (peso, altura){
    let imc = peso / (altura ** 2);
    return imc;
}
let meuIMC = CalculaImc(70, 1.77);
console.log(`Seu índice de massa corporal é de ${meuIMC.toFixed(2)}`);/*/

function CalcularIMC(){
    let solicitarPeso = prompt('Insira o seu peso:');
    let solicitarAltura = prompt('Insira sua Altura:');

    let imc = solicitarPeso / (solicitarAltura ** 2);
    if(imc == 18.5 && imc == 24.9){
        alert(`O seu índice de massa corporal é ideal. Ela é de ${imc.toFixed(2)}`);
    }else if(imc < 18.5){
        alert(`O seu índice de massa corporal está abaixo do ideal. Ela é de ${imc.toFixed(2)}`);
    }else{
        alert(`O seu índice de massa corporal está acima do ideal. Ela é de ${imc.toFixed(2)}`);
    }
}
CalcularIMC();

//Crie uma função que calcule o valor do fatorial de um número passado como parâmetro.
function CalcularFatorial(){
    let solicitarNumero = parseInt(prompt('Insira um número:'));
    let resultado = 1;
    
    while(solicitarNumero >=1){
        //console.log(resultado);
        resultado = resultado * solicitarNumero
        solicitarNumero = solicitarNumero - 1;
    }
    return resultado;
    
    
}
console.log(CalcularFatorial());

//Crie uma função que converte um valor em dólar, passado como parâmetro, e retorna o valor equivalente em reais. Para isso, considere a cotação do dólar igual a R$4,80.


function conversorDeDolar(){
    let valorDolar = 4.80;
    let solicitarValor = parseFloat(prompt('Insira o valor que deseja converter:'));
    let conversao = solicitarValor * valorDolar;
    return `O valor da conversão é de R$ ${conversao}`;
}

console.log(conversorDeDolar());


//Crie uma função que mostre na tela a área e o perímetro de uma sala retangular, utilizando altura e b    largura que serão dadas como parâmetro.

function CalcularArea(){
    let solicitarAltu = parseFloat(prompt('Insira o valor da altura da sala:'));
    let solicitarLargu = parseFloat(prompt('Insira o valor da largura da sala:'));
    let area = solicitarAltu * solicitarLargu;

    return ` A área desta sala é ${area} metros`;
}
console.log(CalcularArea());

//Crie uma função que mostre na tela a área e o perímetro de uma sala circular, utilizando seu raio que será fornecido como parâmetro. Considere Pi = 3,14.

//Crie uma função que mostre na tela a tabuada de um número dado como parâmetro.


//Crie uma lista vazia, com o nome listaGenerica.
//Crie uma lista de linguagens de programação chamada linguagensDeProgramacao com os seguintes elementos: 'JavaScript','C','C++', 'Kotlin' e 'Python'.
//Adicione à lista linguagensDeProgramacao os seguintes elementos: 'Java', 'Ruby' e 'GoLang'.
//Crie uma lista com 3 nomes e exiba no console apenas o primeiro elemento.
//Crie uma lista com 3 nomes e exiba no console apenas o segundo elemento.
//Crie uma lista com 3 nomes e exiba no console apenas o último elemento.