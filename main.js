var cuadroTexto = document.createElement("textarea");
var parrafo = document.getElementById("sobremi");
var contenido = parrafo.innerText;

cuadroTexto.classList.add("editarParrafo");
cuadroTexto.id="edicion";

function editarNombre(){
    cuadroTexto.innerHTML=contenido;
    parrafo.replaceWith(cuadroTexto);
}

function agregar(){
    var p1 = document.getElementById("edicion").value;
    contenido = p1;
    parrafo.innerText=contenido;
    cuadroTexto.replaceWith(parrafo);
    /* alert(parrafo.innerHTML); */
}


var foto1 = document.getElementById("fotoPerfil");
function editarFoto(){
    document.getElementById("fotoPerfil").src="img/foto_perfil/imgProfile2.jpg"
}