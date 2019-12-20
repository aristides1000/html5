function comenzar(){

    var miboton = document.getElementById("dame_ubicacion");

    miboton.addEventListener("click", obtener, false);

}

function obtener(){

    /* Para utilizar el tercer parámetro debemos hacer lo siguiente */

    var parametros = {enableHighAccuracy: true, timeout: 10000, maximumAge: 60000};

    /* enableHighAccuracy si es true usa la ubicación por GPS */
    /* timeout lo que dice es que tiene chance de conseguir la geolocalización 10 segundos, si no lo hace va a generar un error */
    /* maximumAge lo que dice es que si en la caché ya hay una localización menor a 60 segundos ae usa esa */

    /* navigator.geolocation.getCurrentPosition(mostrar_posicion, gestion_errores, parametros); */

    navigator.geolocation.watchPosition(mostrar_posicion, gestion_errores, parametros);

    /* La diferencia entre getCurrentPosition y watchPosition radica en que watchPosition se usa para dispositivos móviles, y getCurrentPosition para PC */

    /* hay que tener cuidado al momento de usar maximumAge, Ya que en los dispositivos móviles consume muchos recursos */

    /* con watchPosition cambia la funcionalidad de maximumAge, ya que su valor ahora va a representar cada cuanto tiempo se va a localizar el dispositivo en milisegundos */

    /* lo que está encerrado entre parentesis es la función que va a ejecutar si da exitosa la geolocalización, la segunda función que coloquemos va a ser la función que se va a ejecutar cuando de error la geolocalización */ /* Nuestro segundo argumento denominado gestion_errores es aquella función la cuál va a ser la encargada de tratar los errores que surjan al momento de que por cualquier motivo no logremos obtener la localización del usuario */ /* Con el tercer parámetro que coloquemos en la función getCurrentPosition(x,x,este_parametro) en este 3er parámetro vamos a colocar una configuración, con esta configuración podemos saber con cuál exactitud queremos saber la ubicación del usuario, también podemos colocar el tiempo límite para conocer la ubicación del usuario, y también se puede establecer cada cuanto tiempo queremos conocer la posición del usuario, incluso recuriendo a la caché del navegador, lo cual es interesante ya que con ello no consumimos recursos del servidor */
    /* en el parámetro enableHighAccuracy, se le puede colocar el valor true or false, si se le coloca el valor true va a proceder a buscar la localización con GPS, por supuesto eso se hace con dispositivos móviles, no con navegadores */

}

function mostrar_posicion(posicion){ /* Aquí llamamos posicion al objeto position devuelto por el método  getCurrentPosition */

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

function gestion_errores(error){
    /* esta función va a recibir un argumento al cual llamaremos error de la misma forma que hicimos en getCurrentPosition en la función mostrar_posicion, se lanza un objeto que se debe capturar desde la función mostrar_posicion(posicion) y a ese objeto lo llamamos posicion, de la misma forma ocurre con los errores, cuando ocurre un error, un objeto es creado o invocado, que lo hemos llamado error, aunque le pudimos haber puesto cualquier nombre como por ejemplo juanito, el cual podemos capturar como argumento dentro de la función gestión_errores(error) para después usarlos en métodos y propiedades que vienen con el objeto error, para luego gestionar el error */

    /* alert("Ha habido un error"); */

    /* hasta el momento, sólo le dijimos a la función gestion_errores(error) que si posee algún error que nos lanzara un alert, ahora bien, el objeto error posee dos propiedades, una de ellas es la propiedad "code" que nos dá el código del error, y la otra es la que nos dá la propiedad message, la cual nos dá el mensaje del error, con lo cual se podría hacer lo siguiente en nuestro código */

    /* alert("Ha habido un error " + error.code + " " + error.message); */

    /* ahora bien, repasando, error.code nos devuelve el código del error, y error.message, nos devuelve el mensaje del error. */

    /* if(error.message == "User denied Geolocation"){
        alert("Debe permitir el uso de la Goelocalización en tu navegador");
    } */

    /* son sólo 3 errores que arroja el error.code, los códigos son 1,2,3 */

    console.log(error.code);

    if(error.code == 1){
        alert("Debe permitir el uso de la Goelocalización en tu navegador");
    }
}

window.addEventListener("load", comenzar, false);