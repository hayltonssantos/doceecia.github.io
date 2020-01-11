var produtos = document.querySelectorAll(".produtos");

var tabela = document.querySelector("table");
 

tabela.addEventListener("dblclick", function(event){
   
    var nomeAlvo = event.target.className;
    var alvo = event.target;
   var paiDoAlvo = alvo.parentNode;
    
    console.log(nomeAlvo);

     if(nomeAlvo != "titulo-tabela" ){ 
         paiDoAlvo.classList.add("fadeOut");
         setTimeout(function(){
            paiDoAlvo.remove();
        },500);
    } 
});