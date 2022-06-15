var cuadroTexto = document.createElement("textarea");
var parrafo = document.getElementById("sobremi");
var contenido = parrafo.innerText;

cuadroTexto.classList.add("editarParrafo");
function editarNombre(){
    cuadroTexto.innerHTML=contenido;
    parrafo.replaceWith(cuadroTexto);
}


function agregarContenido(){
    var areatexto = document.getElementsByTagName("textarea");
    var pr=document.getElementById("sobremi");
    var text = areatexto.value;
    pr.textContent=text;
    areatexto.replaceWith(pr);
}