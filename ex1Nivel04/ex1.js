function contar(){
    let inicio = Number(document.getElementById("txti").value);
    let fim = Number(document.getElementById("txtf").value);
    let passo = Number(document.getElementById("txtp").value);
    let res = document.getElementById('res');
    
    if(passo <= 0){
        alert('Passo inválido! Considerando PASSO 1');
        passo = 1;
    }
    res.innerHTML = 'Contando <br>';
    if(inicio < fim){
        for(let contador = inicio; contador <= fim; contador += passo){
            res.innerHTML += `${contador} <br>`;
    }
   }else if(inicio > fim){
    for(let contador = inicio; contador >= fim; contador -= passo){
            res.innerHTML += `${contador} <br>`;
   }
}
}
