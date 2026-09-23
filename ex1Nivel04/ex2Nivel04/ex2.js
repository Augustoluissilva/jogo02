let numero = parseInt(prompt('Digite um número entre 1 e 10, para saber a sua tabuada'));
let resultado = calcularTabuada(numero);
function calcularTabuada(nu){
let textoTabuada = '';
let contadorTabuada = 1;

while(contadorTabuada <= 10){
    let calculoMultiplicacao = nu * contadorTabuada;
    textoTabuada += `${nu} X ${contadorTabuada} = ${calculoMultiplicacao} \n`;
    contadorTabuada++;
}
return textoTabuada;
}
alert(resultado)
//Contagem Regressiva com mensagem no final
let nu = parseInt(prompt('Digite um número positivo entre 1 e 10:'));
let textoDecolagem = '';
for(let contador = nu; contador >= 1; contador--){
    textoDecolagem += `Se preparando para a decolagem em ${contador} \n`;
}
alert(`${textoDecolagem} Decolando...🚀`);

//somatorio até parar. Crie um programa que peça números repetidamente ao usuário via prompt. Vá somando esses números em um acumulador. O programa deve parar imediatamente quando o usuário digitar um número negativo. Ao final, exiba a soma total de todos os números positivos inseridos. 
