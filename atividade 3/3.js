let botao = function() {

    let n1 = parseFloat(document.getElementById("n1").value);
    let n2 = parseFloat(document.getElementById("n2").value);
    let n3 = parseFloat(document.getElementById("n3").value);
    let n4 = parseFloat(document.getElementById("n4").value);
  
    let conta = n1 + n2 + n3 + n4;
    let media = conta/4

    let saida = document.getElementById('saidaResultado');


    if(media > 6){
        return  saida.innerHTML = "aprovado";
    } else{
        return  saida.innerHTML = "reprovado";
    };
  } 