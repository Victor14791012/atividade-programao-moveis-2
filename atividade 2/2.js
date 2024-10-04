let botao = function() {

    let n1 = parseFloat(document.getElementById("n1").value);
    let n2 = parseFloat(document.getElementById("n2").value);
  
    let conta = n1 + n2;
  
    let saida = document.getElementById('saidaResultado');
    saida.innerHTML = conta;
  
  }
  