let botao = function() {
  let n1 = parseFloat(document.getElementById("n1").value);
  let saida = document.getElementById('saidaResultado');
  
  let resultados = [];
  for (let i = 1; i <= 10; i++) {

    conta = n1 * i ,
    frase = "o resultado de "+ n1 + 'x' + i + " é: "
    resultados.push( frase+ conta);
  }
  
  saida.innerHTML = resultados.join("<br>");
}