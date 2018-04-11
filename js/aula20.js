window.onload = function(){
// trabalhando com ajax
   var ajax = new XMLHttpRequest();
   ajax.onreadystatechange = function(){
     if(ajax.readyState == 4 && ajax.status == 200){
       document.getElementById('retorno').innerHTML = ajax.responseText;
     }
   }

   ajax.open("GET","aula-20-informacoes.txt", true);
   ajax.send();
 };
