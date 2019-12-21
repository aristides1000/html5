
function comenzar(){

    var boton = document.getElementById("grabar");

    boton.addEventListener("click", itemNuevo, false);

}

function itemNuevo(){

    var clave = document.getElementById("clave").value; /* con el .value en esta línea de código le decimos a nuestra variable que el valor que esté contenido en #clave se almacene en esta variable */

    var valor = document.getElementById("valor").value; /* lo mismo que en la explicación de arriba */

    sessionStorage.setItem(clave, valor); /* con sessionStorage almaceno los datos hasta que se cierre la pestaña */ /* setItem envía datos */

    leer_mostrar(clave); /* Así llamamos a que se ejecute una nueva función */ /* como nos queremos llevar el parámetro clave lo pasamos en la función */

}

function leer_mostrar(clave){
/* Recuerda que debemos escribir la función leer_mostrar(clave) con el parámetro clave para que pueda capturarlo */

    var zonadatos = document.getElementById("zonadatos");

    var elvalor = sessionStorage.getItem(clave); /* getItem captura los datos enviados por setItem */ /* en el caso de elvalor almacena lo que está en valor */

    zonadatos.innerHTML = "<div>Clave: " + clave + "--" + "Valor: " + elvalor + "</div>";

}




window.addEventListener("load", comenzar, false);