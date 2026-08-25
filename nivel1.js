//Nível 1: Fundamentos, Variáveis e Operadores (1 a 15)
//Crie uma variável para armazenar seu nome e exiba no console.
let nome = prompt('Digite seu nome:');
console.log('olá', nome);
//Armazene dois números e exiba a soma entre eles.
alert('Bora somar números!');
let n1 = parseInt(prompt('Digite o primeiro número:'));
let n2 = parseInt(prompt('Digite o segundo número:'));

let soma = n1 + n2;
console.log(`A soma entre ${n1} e ${n2} é:`, soma);
//Armazene dois números e exiba a subtração, multiplicação e divisão.
alert('Bora subtrair, multiplicar e divir números!');
let nume1 = parseInt(prompt('Digite o primeiro número:'));
let nume2 = parseInt(prompt('Digite o segundo número:'));
let subtracao = nume1 - nume2;
let multiplicacao = nume1 * nume2;
let divisao = nume1 / nume2;
console.log(`A subtração entre ${nume1} e ${nume2} é:`, subtracao);
console.log(`A multiplicação entre ${nume1} e ${nume2} é:`, multiplicacao);
console.log(`A divisão entre ${nume1} e ${nume2} é:`, divisao);
//Calcule a média aritmética de 3 notas recebidas por variáveis.
alert('Vamos calcular a media dos alunos.');
let nota1 = parseFloat(prompt('Insira a primeira nota:'));
let nota2 = parseFloat(prompt('Insira a segunda nota:'));
let nota3 = parseFloat(prompt('Insira a terceira nota:'));

let media = (nota1 + nota2 + nota3) / 3;
console.log('A media é:', media.toFixed(2));
//Converta uma temperatura de Celsius para Fahrenheit.
let tempCelsius = parseFloat(prompt('Insira a teperatura da maquina em graus celsius para a conversão em fahrenheit:'));
let conversorFahrenheit = (tempCelsius * 1.8) + 32;
console.log('A temperatura da maquina em Fahrenheit é:', conversorFahrenheit , '°');
//Calcule o dobro e o triplo de um número.
let escrevaNumero = parseInt(prompt('Digite qualquer número:'));
let calculaDobroDoNumero = escrevaNumero * 2;
let calculaTriploDoNumero = escrevaNumero * 3;
console.log(`O dobro do ${escrevaNumero} é ${calculaDobroDoNumero} e o triplo ele é ${calculaTriploDoNumero}`);
//Calcule a área de um quadrado dado o seu lado.
let ladoQadrado = parseInt(prompt("Digite o valor do lado do quadrado:"));
let calcularAreaDoQuadrado = ladoQadrado * ladoQadrado;
console.log(`A área do quadrado é : ${calcularAreaDoQuadrado}`);
//Calcule o preço com 10% de desconto de um produto.
let precoProduto = 150.00;
let desconto = 0.10;

let calculoDesconto = (precoProduto * desconto);
let precoFinal = precoProduto - calculoDesconto;
console.log(`O preço do produto com desconto é ${precoFinal}`);

//Troque os valores de duas variáveis (a vira b e b vira a).
let a = 2;
let b = 3;
let c;

c = a;
a = b;
b = c;
console.log(`Agora o valor de A é: ${a}`); 
console.log(`Agora o valor de B é: ${b}`); 
//Calcule o resto da divisão (%) entre dois números.
let insiraNumero = parseInt(prompt('Digite um número qualquer:'));
let insiraNumeroDois = parseInt(prompt('Digite um número qualquer:'));
let calcularRestoDivisao = insiraNumero % insiraNumeroDois;
console.log(`O resto da divisão é ${calcularRestoDivisao}`);
//Verifique o tipo (typeof) de 5 variáveis com tipos de dados diferentes
let texto = "Ola";
let numeroInteiro = 2;
let numeroComVirgula = 2.4;
let verdadeiroOuFalso = true;
let nada;
console.log(typeof texto);
console.log(typeof numeroInteiro);
console.log(typeof numeroComVirgula);
console.log(typeof verdadeiroOuFalso);
console.log(typeof nada);
//Converta uma string contendo número ("42") para tipo Number.
let textoNumero = "150";
let stringParaNumero = Number(textoNumero);
console.log(typeof textoNumero);
console.log(typeof stringParaNumero);
//Converta um número para String.
let numeroTexto = 100;
let numeroParaString = String(numeroTexto);
console.log(typeof numeroParaString);
//Calcule o salário final de um vendedor que ganha comissão de 5% sobre vendas.
let informeQuantoVendeu = parseFloat(prompt('Insira o tatal vendido no mês:'));
let comissao = 0.05;
let salarioFixo = 1621.00;

let calcularComissao = informeQuantoVendeu * comissao;
let salarioFinal = salarioFixo + calcularComissao;
console.log(`O seu salario final do mês com a comissão de 5% é de R$ ${salarioFinal.toFixed(2)}`);
//Dado o ano de nascimento, calcule a idade atual.
let anoDeNascimento = parseInt(prompt('Insira o ano em que você nasceu:'));
let anoAtual = 2026;
let calcularIdadeAtual = anoAtual - anoDeNascimento;
console.log(` Você tem ${calcularIdadeAtual} anos!`);
