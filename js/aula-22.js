window.onload = function() {
  // REALIZANDO UMAS BUSCA DE CEP
  var ajax = new XMLHttpRequest();
  // http://api.postmon.com.br/v1/cep/*cep_a_consultar* ulr para fazer pesquisa
  var buscarCep = document.getElementById("frmCep");
  var inputCep = document.getElementById("cep");
  var retorno = document.getElementById("retorno");

  ajax.onreadystatechange = function() {
    if (ajax.readyState == 4 && ajax.status == 200) {
      var data =  JSON.parse(ajax.responseText);
      retorno.innerHTML = "Logradouro: "+data.logradouro;
    }
  };


  buscarCep.onsubmit = function() {
    if (inputCep.value == "" || inputCep.value.length < 8) {
      alert("O campo não foi preenchido!");
      return false;
    }
    retorno.innerHTML="Carregando..."
    ajax.open("GET", "http://api.postmon.com.br/v1/cep/"+inputCep.value, true);
    ajax.send();
    return false;
  }

}
