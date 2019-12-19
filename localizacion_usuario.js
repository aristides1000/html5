function comenzar(){

    var miboton = document.getElementById("dame_ubicacion");

    miboton.addEventListener("click", obtener, false);

}

function obtener(){

    navigator.geolocation.getCurrentPosition(mostrar_posicion); /* lo que está encerrado entre parentesis es la función que va a ejecutar si da exitosa la geolocalización, la segunda función que coloquemos va a ser la función que se va a ejecutar cuando de error la geolocalización */

}

function mostrar_posicion(posicion){ /* Aquí llamamos posicion al objeto position devuelto por el método getCurrentPosition */

    var ubicacion = document.getElementById("ubicacion");

    /* var latitud = "Latitud: " + posicion.coords.latitude; */ /* esta línea devuelve la latitud */

    var miubicacion = "";

    miubicacion += "Latitud: " + posicion.coords.latitude + "<br>";

    miubicacion += "Longitud: " + posicion.coords.longitude + "<br>";

    miubicacion += "Exactitud: " + posicion.coords.accuracy + "<br>";

    /* este operador += ya se vió en el video anterior de drag & drop de las propiedades de los archivos este es el que me permite incrementar los resultados */

    /* ubicacion.innerHTML = latitud; */

    ubicacion.innerHTML = miubicacion;

}

window.addEventListener("load", comenzar, false);