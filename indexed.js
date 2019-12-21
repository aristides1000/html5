var bd;

function iniciar(){
    /* procedemos a identificar nuestros sectores a los que le vamos a modificar su Document Object Model */
    zonadatos = document.getElementById("zonadatos");

    boton = document.getElementById("grabar");

    /* ya tengo identificado mi botón, ahora procedo a colocarlo a la escucha del evento click de la siguiente manera */

    boton.addEventListener("click", agregarobjeto, false); /* el evento click procedo a colocarlo entre comillas dobles */ /* esto nos direcciona a una función */

    /* ahora procedemos a crear el evento open de la siguiente manera */

    /* Hay aquí un punto importante a recalcar, y es el de que al colocar una variable sin el var al principio la estamos haciendo global dentro de la función, quiere decir que las demás funciones la van a poder utilizar, en cambio, al anteponerle a la variabel el var, automáticamente le estamos diciendo que su ámbito es local y sólo se rige a esa función, lo que a su vez quiere decir que sólo podrá ser utilizada por esa función */

    var solicitud = indexedDB.open("mibase"); /* esata variable nos permite iniciar o crear una base de datos, en este caso para acceder a ella lo hacemos a travé de indexedDB.open, con .open creamos la base de datos, con open podemos recibir 2 parámetros, el primero de los parámetros es el nombre de la base de datos que en mi caso es ("mibase") cabe acotar y es importante que el primer parametro de open, osea el nombre va entre comillas */

    /* para saber si la base de datos fue creada con éxito utilizamos la propiedad onsuccess, el cual, si tiene éxito ejecuta lo que le sigue a continuación */

    solicitud.onsuccess = function(e){
        /* Aquí, hemos ejecutado una función anónima a la cual se le pasa como parámetro un objeto e que va a desencadenar el evento, es por ello que se llama e, en este caso en particular, el evento que deseamos que se ejecute va a ser la base de datos, y esto se va a realizar de la siguiente manera */

            bd = e.target.result; /* Aquí lo que estamos haciendo es almacenando la base de datos en una variable */

            /* como la variable bd (base de datos) la vamos a utilizar en un futuro, vamos vamos a declararla en la parte de afuera de la función */

    }

    solicitud.onupgradeneeded = function(e) { /* el evento .onupgradeneeded sólo se ejecuta si es necesario acutailizar la base de datos, osea, si la base de datos y los alamacenes, no están creados, en caso contrario no los ejecuta */
        /* aquí procedemos a crear los almacenes que van a estar inmersos dentro de las bases de datos que hemos creado */

        /* este es el método que nos crea un almacén de datos dentro de una base de datos se llama "createObjectStore" y este método tiene 2 parámetros, el primero de los parámetros es el de el nombre del almacen de datos que por cierto va entre comillas y el segundo parámetro es el que nos dice cuál va a ser nuestro campo clave, osea, identifica nuestra clave primaria, la que nunca se repite y es única */

        /* aquí nos va a generar un error, y esto se debe a que al momento de ejecutar el código js se lee y se almacena la bd en la función de arriba, pero como esta instruccióin no ha culminado y automáticamente se ejecuta la próxima función, entonces al buscar bd. el sistema se percata que bd aún no existe y por eso nos genera el error */

        /* para evitar el error que comentámos arriba, volvemos a almacenar en esta función el objeto evento que desencadenó la variable bd contentiva con el objeto que se muestra en la parte de arriba */
        bd = e.target.result;

        bd.createObjectStore("gente", {keyPath: "clave"});
    }
}

function agregarobjeto(){
    /* Primeramente capturamos lo que está dentro de los input de nuestra base de datos */

    var clave = document.getElementById("clave").value; /* Aquí estamos caputarndo el valor de lo contenido en el id="clave" */

    var titulo = document.getElementById("texto").value;

    var Fecha = document.getElementById("fecha").value;

    /* vamos a proceder a crear la transacción este método puede ser de 3 tipos de transacciones, una de ellas es la de read, la otra de write y la otra de readwrite */

    var transaccion = bd.transaction(["gente"], "readwrite"); /* .transaction recibe 2 parámetros, el primero de ellos es el que nos dice cómo se llama el almacén al cuál le vamos a ejecutar la transacción, en nuestro caso en perticular, ya lo creamos arriba, con el método .createObjectStore y se llama "gente", el segundo parámetro que recibe es el del tipo de transacción que vamos a ejecutar, los cuales pueden ser ("read", "write", "readwrite") en nuestro caso en particular decidimos usa readwrite */

    /* ahora procedo almacenar la transacción */
    var almacen = transaccion.objectStore("gente");

    /* a través del método .add agregamos información dentro de los objetos que están almacenados en nuestro almacén que a su ves forma parte de la base de datos se hace de la siguiente forma */

    var agregar = almacen.add({clave: clave, titulo: titulo, Fecha: Fecha}); /* aquí le decimos que cree los objetos y a continuación les coloque la información en este apartado clave: clave, primeramente clave: representa el nombre del objeto, y la segunda clave representa el valor almacenado en clave que declaramos en la parte de arriba */

    /* después de verificar que se haya almacenado la información en nuestra base de datos de indexedDB procedemos a dejar vacíos los inputs de los que tomamos la información de la siguiente manera */


    
    document.getElementById("clave").value = ""; /* esta forma dejamos vaciós los inputs cuyos valores acabamos de capturar */

    document.getElementById("texto").value = "";

    document.getElementById("fecha").value = "";



}

window.addEventListener("load", iniciar, false);