function exibirTituloNaTela(h1){
    let titulo = document.querySelector('h1');
    titulo.innerHTML = "Página de Revisão!";
}
exibirTituloNaTela('h1');

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

