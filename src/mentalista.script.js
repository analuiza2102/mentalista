var numeroSecreto = parseInt(Math.random() * 11);

function Chutar() {
  var Resultado = document.getElementById("resultado");
  var chute = parseInt(document.getElementById("valor").value);
  console.log(chute);
  if (numeroSecreto == chute) {
    Resultado.innerHTML = "Acertou!";
  } else if (numeroSecreto > chute > 0) {
    Resultado.innerHTML = "O número secreto é maior!";
  } else if (numeroSecreto < chute < 10) {
    Resultado.innerHTML = "O número secreto é menor!";
  }
}
