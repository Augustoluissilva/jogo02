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
function somaNumerosPositivos(){
let soma = 0;
    while(true){
        let numeroDigitado = parseInt(prompt('Digite outro número:'));
        if(numeroDigitado < 0){
            alert('Número Invalido');
            break;
        }else{
           soma += numeroDigitado;
           
        }
        
    }
    alert(soma);
}
somaNumerosPositivos();
//Tabuada com Limite Personalizado, Crie uma função que receba dois valores: o número principal da tabuada e até qual multiplicador ele deve ir.
//Exemplo: tabuada do 7 indo até 15 (ao invés de parar no 10). Exiba as multiplicações formatadas linha a linha em um alerta ou no console.
function tabuada(){
let inicio = parseInt(prompt('Digite um número qualquer para iniciar:'));
let final = parseInt(prompt('Digite outro número:'));
let contagemMultiplicadorTabuada = '1';
let texto = '';
for(let numeroInicial = inicio; contagemMultiplicadorTabuada <= final; contagemMultiplicadorTabuada++){
    let resultadoMultiplicacaoTabuada = numeroInicial * contagemMultiplicadorTabuada;
    texto += `${inicio} X ${contagemMultiplicadorTabuada} = ${resultadoMultiplicacaoTabuada} \n`;
}
return texto;

}
let resultadoTabuada = tabuada();
alert(resultadoTabuada);
//O Jogo do Número Secreto Simples
//Enunciado: Defina uma variável com um número secreto fixo (por exemplo, let segredo = 7;). Faça um laço que continue pedindo palpites ao usuário até que ele acerte o número. Conte quantas tentativas ele precisou e, ao final, exiba: "Parabéns, você acertou em X tentativas!".
//Dica: Um contador (tentativas++) deve rodar a cada palpite dentro do laço.
let numeroSecreto = 6;
let tentativas =0;
while(true){
    let solicitarNumeroSecreto = parseInt(prompt('Digite um número entre 1 e 10'));
    tentativas++
    if(solicitarNumeroSecreto < numeroSecreto){
        alert('O número digitado é menor que o número Secreto, tente novamente ');
    }else if(solicitarNumeroSecreto > numeroSecreto){
        alert('O número digitado é maior que o número Secreto, tente novamente ');
    }else{
     break;
    }   
}
let palavraTentativa = tentativas > 1? 'tentativas' : 'tentativa';
alert(`Parabéns o número secreto é ${numeroSecreto}, você acertou e utilizou ${tentativas } ${palavraTentativa}`);
