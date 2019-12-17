var elem_destino;

function comenzar(){

    var imagenes = document.querySelectorAll("#cajaimagen img"); /* El método querySelectorAll lo que nos devuelve es un arreglo o un array con diferentes posiciones y en cada una de sus posiciones va a alamcenar cada una de las imágenes, ejemplo: imagenes[0]=imagen1 ; imagenes[1]=imagen2 ; esto en definitiva es lo que va a hacer querySelectorAll */

    /* ahora vamos a recorrer el array con un bucle for */

    for(var i=0;i<imagenes.length;i++){

        imagenes[i].addEventListener("dragstart", comenzando_arrastrar, false);

    }

    /* var elem_destino = document.getElementById("zonadestino"); */ /* esta línea de código genera el error del ámbito local de las variables, ya que no se encuentra declarada de forma global, este error ya ah sido visto en videos anteriores */
    /* para evitar este error, se tiene que declarar la variable afuera de la función y al principio para el ámbito global */

    elem_destino = document.getElementById("zonadestino");

    /* elem_destino.addEventListener("dragenter", function(e){
        e.preventDefault();}, false); */

    elem_destino.addEventListener("dragenter", entrando, false);    

    elem_destino.addEventListener("dragover", function(e){
        e.preventDefault();}, false);

    elem_destino.addEventListener("drop", soltado, false);

    elem_destino.addEventListener("dragleave", saliendo,false);/* este función se ejecuta cuando el elemento sale de la zonadestino */

}

function comenzando_arrastrar(e){

    var elemento = e.target;/* con esta linea alamaceno el objeto que descencadenó el evento */

    e.dataTransfer.setData("Text", elemento.getAttribute("id")); /* esta línea de código envía el atributo ID del objeto alamacenado en la variable elemento */

}

function soltado(e){

    e.preventDefault();

    var id = e.dataTransfer.getData("Text"); /* Esta Línea de código captura la info enviada por SetData */

    var src = document.getElementById(id).src;

    elem_destino.innerHTML = "<img src='" + src + "'>";

    /* la propiedad innerHTML lo que hace es inyectar código HTML en javascript */

    /* el caracter de concatenación en javascript es el + */

    /* lo de tantas comillas son fundamentos de javascript */
}

function entrando(e){

    e.preventDefault();

    elem_destino.style.background = "rgba(8,252,25,.8)";

}

function saliendo(e){
    e.preventDefault();

    elem_destino.style.background = "#FFF";
}

window.addEventListener("load", comenzar, false);