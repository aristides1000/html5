var elem_destino;

function comenzar(){

    var imagenes = document.querySelectorAll("#cajaimagen img"); /* El método querySelectorAll lo que nos devuelve es un arreglo o un array con diferentes posiciones y en cada una de sus posiciones va a alamcenar cada una de las imágenes, ejemplo: imagenes[0]=imagen1 ; imagenes[1]=imagen2 ; esto en definitiva es lo que va a hacer querySelectorAll */

    /* ahora vamos a recorrer el array con un bucle for */

    for(var i=0;i<imagenes.length;i++){

        imagenes[i].addEventListener("dragstart", comenzando_arrastrar, false);

        if(i != 1){ /* esto se hace con la finalidad de no poder arrastrar la imagen 1 */
            imagenes[i].addEventListener("dragend", terminado, false);
        }

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

    var id = e.dataTransfer.getData("Text"); /* Esta Línea de código captura la info enviada por SetData que este caso es el atributo id de la etiqueta HTML */

    if(id != "imagen2"){

        var src = document.getElementById(id).src;

        elem_destino.innerHTML = "<img src='" + src + "'>";

        /* la propiedad innerHTML lo que hace es inyectar código HTML en javascript */

        /* el caracter de concatenación en javascript es el + */

        /* lo de tantas comillas son fundamentos de javascript */
    } else { /* esto se hizo con la finalidad de que cuando se coloque la imagen2 no nos permita colocarla y nos coloque el fondo de la zonadestino en color rojo y nos coloque un mensaje en el Document Object Model del HTML "DOM" */

        elem_destino.innerHTML="La imagen no es admitida";

        elem_destino.style.background = "#fa0d29"

    }    

}

function entrando(e){

    e.preventDefault();

    var id = e.dataTransfer.getData("Text"); /* Esta Línea de código captura la info enviada por SetData que este caso es el atributo id de la etiqueta HTML */
    /* Esto se hace con la finalidad de poder capturar y utilizar el id */

    if(id != "imagen2"){

        elem_destino.style.background = "rgba(8,252,25,.8)";

    } else {

        elem_destino.style.background = "#fa0d29";

    }

}

function saliendo(e){
    e.preventDefault();

    elem_destino.style.background = "#FFF";
}

function terminado(e){ /* la (e) representa al objeto evento o al object event */

    var elemento = e.target;

    elemento.style.visibility = "hidden";

}

window.addEventListener("load", comenzar, false);