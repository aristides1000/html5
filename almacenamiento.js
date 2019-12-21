
function comenzar(){

    var boton = document.getElementById("grabar");

    boton.addEventListener("click", itemNuevo, false);

}

function itemNuevo(){

    var clave = document.getElementById("clave").value; /* con el .value en esta línea de código le decimos a nuestra variable que el valor que esté contenido en #clave se almacene en esta variable */

    var valor = document.getElementById("valor").value; /* lo mismo que en la explicación de arriba */

    /* sessionStorage.setItem(clave, valor); */ /* con sessionStorage almaceno los datos hasta que se cierre la pestaña */ /* setItem envía datos */

    /* Vamos a proceder a cambiar las instrucciones de sessionStorage por localStorage */

    localStorage.setItem(clave, valor);

    /* Lo de arriba se puede escribir de otra manera guardando las posiciones del array como claves, donde cada clave esté asosiada a un valor, eso lo hacemos de la siguienete manera */

    /* sessionStorage[clave] = valor; */

    leer_mostrar(clave); /* Así llamamos a que se ejecute una nueva función */ /* como nos queremos llevar el parámetro clave lo pasamos en la función */

    /* si deseo borrar la información que se encuentra en los inputs debo hacer lo siguiente */

    document.getElementById("clave").value = ""; /* Aquí estoy borrando la info contenida en el input con id="clave" de mi documento HTML */
    document.getElementById("valor").value = ""; /* lo mismo que hago arriba lo estoy haciendo abajo */

}

function leer_mostrar(clave){
/* Recuerda que debemos escribir la función leer_mostrar(clave) con el parámetro clave para que pueda capturarlo */

    var zonadatos = document.getElementById("zonadatos");

    /* var elvalor = sessionStorage.getItem(clave); */ /* getItem captura los datos enviados por setItem */ /* en el caso de elvalor almacena lo que está en valor */
    /* esta linea de código es redundante porque ya está en el ciclo for */

    /* Aquí vamos a colocar el botón que va a eliminar todo */

    zonadatos.innerHTML = '<div><button onclick = "eliminarTodo()">Eliminar Todo</button></div>'; /* el atributo onclick de la etiqueta button lo que hace es que llamemos a una función */

    /* esta es la otra forma, y de continua/periódica para el almacenado de información por getItem */

    /* var elvalor = sessionStorage[clave]; */

    /* Ahora bien, vamos a colocar todas las posiciones almacenadas del array y lo haremos de la siguiente manera*/

    /* zonadatos.innerHTML = ""; */ /* hay que quitar esta instrucción porque va a sobre-escribir la información que le estamos pasando arriba y no va a mostrar la informa */ /* esa linea tiene como finalidad borrar el texto de "A la espera de Información" */

    /* for(i=0;i<sessionStorage.length;i++){ */

    for(i=0;i<localStorage.length;i++){

        /* var clave = sessionStorage.key(i); */ /* a través de este nuevo atributo de sessionStorage que es el atributo .key(i) podemos obtener a cada una de las posiciones del array generado por el bucle for, esta es la principal función del atributo .key(i), la i representa la posición del bucle for */

        var clave = localStorage.key(i);

        /* var elvalor = sessionStorage.getItem(clave); */ /* con el atributo .getItem de sessionStorage capturamos los datos enviados por setItem y este caso, esos datos los estamos almacenando en una variable */

        var elvalor = localStorage.getItem(clave);

        /* zonadatos.innerHTML += "<div>Clave: " + clave + "--" + "Valor: " + elvalor + "</div>"; */ /* El += es un operador de incremental y se debe utilizar para poder usarlo dentro del ciclo for */

        /* Ahora bien, vamos a incluir el botón que se encargará de borrar el contenido de un Item en específico */

        zonadatos.innerHTML += '<div>Clave: ' + clave + '--' + 'Valor: ' + elvalor + '<br><button onclick="eliminarItem(\'' + clave + '\')">Eliminar</button></div>';

    }

    /* zonadatos.innerHTML = "<div>Clave: " + clave + "--" + "Valor: " + elvalor + "</div>"; */

}

function eliminarTodo(){

    if(confirm("Estas seguro de eliminar Todo lo almacenado?")){
        /* El confirm lo que hace es es lanzar un alert con un botón aceptar y un botón cancelar si le damos aceptar entra en el código del if */
        /* sessionStorage.clear(); */

        localStorage.clear();

        leer_mostrar();
    }

}

function eliminarItem(clave){
    /* le pasamos como parámetro la propiedad clave, ya que la habíamos pasado con ella a través del innerHTML  */
    if(confirm("Estás seguro de eliminar este Item?")){

        /* sessionStorage.removeItem(clave); *//* esta instrucción elimina un sólo item */
        localStorage.removeItem(clave);

        leer_mostrar();

    }

}

window.addEventListener("load", comenzar, false);