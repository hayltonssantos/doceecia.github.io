
var enviar = document.querySelector(".enviar");
enviar.addEventListener("click", function (event){
    event.preventDefault();
    alert("FORMULARIO ENVIADO - AGRADEÇEMOS O CONTATO");
    enviar.classList.add("enviado");
});
