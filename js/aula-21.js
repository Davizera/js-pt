window.onload = function() {
  var ajax = new XMLHttpRequest();
  var click = document.getElementsByClassName('abrePagina');

  ajax.onreadystatechange = function() {
    console.log(ajax.status);
    console.log(ajax.readyState);
    if (ajax.readyState == 4 && ajax.status == 200) {
      document.getElementById('retorno').innerHTML = ajax.responseText;
    }
  }
  ajax.onerror = function () {
    alert("Pag not found!");
  };
  for (var i = 0; i < click.length; i++) {
    click[i].onclick = function(evento) {
      evento.preventDefault();
      ajax.open("GET", this.getAttribute("href"), true);
      ajax.send();
      return false;
    };
  }

}
