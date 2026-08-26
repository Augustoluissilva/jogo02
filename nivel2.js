//Nível 2: Estruturas Condicionais (16 a 30)
//16. Verifique se um número é positivo, negativo ou zero.
let solicitaNumeroAoUsuario = parseInt(prompt("Insira um número para começar o jogo:"));
if(solicitaNumeroAoUsuario == 0){
    alert(`O número inserido é igual a zero`);
}else if(solicitaNumeroAoUsuario > 0){
    alert(`O ${solicitaNumeroAoUsuario} é positivo`);
}else{
    alert(`O ${solicitaNumeroAoUsuario} é negativo`);
}
//17. Verifique se um número é par ou ímpar.
let sixseven = parseInt(prompt('Digite um número:'));
if(sixseven % 2 ==0){
    alert(`O ${sixseven} é par.`);
}else{
    alert(`O ${sixseven} é impar.`);
}
//18. Receba dois números e exiba o maior deles.
let numero1 = parseInt(prompt('Insira um número qualquer:'));
let numero2 = parseInt(prompt('Insira um número qualquer:'));
if(numero1 > numero2){
    alert(`O ${numero1} é maior que ${numero2}`);
}else if(numero1 == numero2){
    alert('Os números são iguai!');
}else {
    alert(`O ${numero1} é menor que ${numero2}`);
}
//19. Receba a idade de uma pessoa e informe se ela é maior de idade.
let solicitaIdade = parseInt(prompt('Insira sua idade:'));
if(solicitaIdade >=18){
    alert('Você é maior de idade');
}else{
    alert('Você é menor de idade.');
}
//20. Receba 3 notas, calcule a média e diga se foi Aprovado ($\ge 7$), Recuperação ($5$ a $6.9$) ou Reprovado.
let nota1 = parseFloat(prompt('Insira a primeira nota do aluno:'));
let nota2 = parseFloat(prompt('Insira a segunda nota do aluno:'));
let nota3 = parseFloat(prompt('Insira a terceira nota do aluno:'));
let media = (nota1 + nota2 + nota3) / 3;

if(media >= 7){
    alert(`O aluno foi aprovado com ${media.toFixed(1)} de media`);
}else if(media == 5 && media == 6.9){
    alert(`O aluno está de recuperação com ${media.toFixed(1)} de media`);
}else{
    alert(`O aluno está de reprovado com ${media.toFixed(1)} de media`);
}
//21. Verifique se um ano é bissexto.
//22. Verifique se um número está entre 10 e 50.
let numero = parseInt(prompt('Digite um número:'));
if(numero >= 10 &&  numero <= 50){
    alert('O numero digitado está entre 10 e 50');
}else{
    alert('o numero não está entre o 10 e 50');
}
//23. Crie um sistema de login simples (verifique se usuario == "admin" e senha == "1234").
const user = "admin";
const senha = 1234;
let solicitaUser = prompt("Insira o seu nome de usuario:");
let solicitaSenha = prompt("Insira a sua senha:");

if(solicitaUser == user && solicitaSenha == senha){
    alert('Acesso permitido!');
}else{
    alert('Acesso negado!');
}
//24. Receba o valor de uma compra e aplique 15% de desconto apenas se o valor for maior que R$ 100.
//25. Receba um caractere e diga se é uma vogal ou consoante.
//26. Crie uma calculadora simples usando switch/case para as 4 operações básicas.
//27. Receba 3 números e mostre-os em ordem crescente.
//28. Verifique se uma pessoa pode votar (idade maior ou igual a 16).
//29. Determine o IMC e informe a classificação (Abaixo do peso, Ideal, Sobrepeso, etc).
//30. Verifique se 3 lados fornecidos podem formar um triângulo.
