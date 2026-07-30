//Verificador de par ou impar

function verificarParImpar(){
    let pedirNumero = parseInt(prompt('Insira um número para começar:'));
    if(pedirNumero % 2 == 0){
        alert(`O número ${pedirNumero} é par.`);
    }else{
        alert(`O número ${pedirNumero} é ímpar.`);
    }

}
verificarParImpar();

// validador de acesso a evento

let idade = parseInt(prompt('Informe a sua idade:'));
let temConvite = prompt('Você tem convite?');

if(idade == '18' && temConvite == 'sim'){
    alert('Acesso permitido!');
}else{
    alert('Acesso negado!');
}

// Contagem Regressiva para lançamento

let contador = 10;
while(contador >=0){
    console.log(contador);
    contador = contador - 1;
}
console.log('Decolar!');

// jogo do número secreto
let numeroSecreto = 7;
let chute;

while(chute != numeroSecreto){
    chute = parseInt(prompt('Insira um número para começar o jogo:'));
    if(chute > numeroSecreto){
        alert(`O número secreto é menor que  ${chute}`);
    }else if(chute == numeroSecreto){
        alert('Parabéns, você acertou!');
    }else{
        alert(`O número secreto é maior que ${chute}`);
    }
}