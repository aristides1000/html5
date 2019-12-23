function comenzar(){

    zonadatos = document.getElementById("zonadatos");

    var boton = document.getElementById("boton");

    boton.addEventListener("click", crear, false);

    /* Ahora procedemos a pedir permiso para el uso del disco por la aplicación y le decimos cuánto espacio vamos a utilizar para el almacenado */

    navigator.webkitPersistentStorage.requestQuota(5*1024*1024, acceso); /* se usa el prefijo webkit porque lo vamos a realizar por google chrome, si fuese por mozillaFirefox, se usaría el prefijo moz, el almacenado se mide en bytes, por ende, 1 kilobyte son 1024 bytes, y 1 megabyte es 1024*1024, y 1 gigabyte es 1024*1024*1024 y así sucesivamente */

}

/* Ahora vamos a proceder a crear el sistema de archivos de la siguiente manera */

function acceso(){

    window.webkitRequestFileSystem(PERSISTENT, 5*1024*1024, crearsis, errores); /* este método recibe 4 parámetros, los cuales son, el primero el tipo de almacenamiento, el segundo es el espacio en disco que le vamos a asignar, el tercero es la función que vamos a llamar si tiene éxito el creado del disco, el cuarto es la funciòn que vamos a llamar si no tiene éxito el creado de archivos */ /* "5*1024*1024" representa 5 megabytes */

}

function crearsis(sistema){ /* cuando ejecutamos llamamos en la línea de arriba a la función crearsis, lo que sucede es que esa funciòn pasa con un parámetro, el cual se llama en realidad FileSystem el cuál nosotros lo renombramos con el nombre de sistema */

    espacio = sistema.root; /* con esta línea de código estamos diciendo que almacene en espacio a la raís de nuestro sistema de archivos */

    ruta = "";/* Aquí representamos a una ruta que es a la que le vamos a decir a nuestro navegador que cree las rutas */

    mostrar();

}

/* function crear(){ */ /* en esta función hemos creado el archivo con el método getFile */

    /* var nombre_archivo = document.getElementById("entrada").value; */

    /* Ahora procedemos a controlar que haya algo escrito en el input con id de entrada y eso lo hacemos con un if */

    /* if(nombre_archivo != ""){ *//* esto lo que quiere decir es que el nombre del archivo no sea vacio */
        
        /* espacio.getFile(nombre_archivo, {create:true, exclusive:false}, mostrar, errores); */ /* el método getFile recibe 4 parámetros, el primero es el nombre del archivo (que en nuestro caso le asignamos la variable nombre_archivo), el segundo parametro es el de si create es true, quiere decir que si ya está el archivo creado, no lo cree, si está es false, crea un nuevo archivo sobreescribiendo el ya existente, si exclusive es true, al crear un archivo que ya exista va a soltar un error, ya que el archivo ya existe, si está en false no va a generar ningún error si creamos un archivo con el mismo nombre o ya existente, el 3er parámetro es el de la función que se va a ejecutar si la creación del archivo tiene éxito que en nuestro caso la función se llama mostrar, y el 4to es la función que se va a ejecutar si la creación del archivo presenta errores al crearse que en nuestro caso en particular se llama errores */

    /* }else{
        alert("Debe crear un nombre de archivo");
    }

} */

/* function mostrar(entrada){ *//* con entrada hemos capturado el objeto lanzado por getFile */

    /* document.getElementById("entrada").value = ""; *//* esto blanquea el input con el id="entrada" */

    /* zonadatos.innerHTML = "Éxito en la creación de espacio y en la creación del archivo! <br>"; *//* el += auto incrementa lo agregado por innerHTML */

    /* zonadatos.innerHTML += "Nombre: " + entrada.name + "<br>";

    zonadatos.innerHTML += "Ruta: " + entrada.fullPath + "<br>";

} */

/* function errores(e){ */ /* la función errores retorna un objeto evento al que hemos denominado e */

   /*  alert("Ha habido un error: " + e.code);

} */

function crear(){

    var nombre_archivo = docuemnt.getElementById("entrada").value;

    if(nombre_archivo != ""){/* quiere decir que si hay datos en nombre archivo */

        nombre_archivo = ruta + nombre_archivo;

        /* ahora vamos a intentar crear un nuevo archivo y lo hacemos de la siguiente manera */

        espacio.getFile(nombre_archivo, {create: true, exclusive: false}, mostrar, errores);

    }

}

function mostrar(){

    document.getElementById("entrada").value = "";

    zonadatos.innerHTML = "";

    espacio.getDirectory(ruta, null, leerdir, errores);/* este método posee 4 parámetros que ya fueron explicados con anterioridad es lo mismo que con getFile; el primer parámetro es el de la ruta del directorio, el segundo parámetro es null, debido a que no voy a crear un nuevo directorio, sino más bien voy a leerlo, el 3er parámetro es el que especifica la función a ejecutar si la lectura de directorio se realiza son problemas, y el 4to parámetro es la función que se ejecuta en la ocación de que la lectura del directorio nos de un error */

}

function leerdir(dir){/* la función leerdir que es la que nos ejecuta gatDirectory si todo ocurre sin problemas, es mandada con un parámetro */

    lector = dir.createReader(); /* creo el lector del directorio y lo almaceno en una variable que llamé lector */

    leer();

}

function leer(){

    lector.readEntries(function(archivos){/* aquí ejecutamos una función anónima para que se ejecute cuando se realice la lectura de entradas de forma satisfactoria y le pasamos el parámetro archivos como objeto evento */
        if(archivos.length){ /* en archivos se almacena la información como arrays, listando los archivos en posiciones [0], [1], [2], etc, por ende, si posiciones almacenadas procede a entrar en el código contenido en el if */
            listar(archivos);/* Aquí lo que estamos diciendo es que si el if tiene éxito, entramos en este código, en este código estamos en presencia de una función a la cual le pasamos el parámetro archivos que ya estuvimos trabajando aquí y es el array generado */
        }
    }, errores);/* este método recibe 2 parámetros, en el cual el primero es el qué hacer si la lectura de entradas sea exitoso y la segunda se encarga de decirnos qué es lo que va a hacer en caso de que nos de un error */

}

function listar(archivos){

    /* archivos contiene un array, y cómo recorremos un array en programación, pues con un bucle for */

    for(var i=0; i<archivos.length; i++){

        if(archivos[i].isFile){/* si esto retorna true entra en el if osea que si lo que estamos leyendo es un archivo entra en el if, el método isFile verifica que lo que estamos seleccionando sea un archivo */

            zonadatos.innerHTML += archivos[i].name + "<br>";/* Aquí incrustamos código html con innerHTML */

        }else if(archivos[i].isDirectory){ /* si esto retorna true entra en el if osea que si lo que estamos leyendo es un directorio entra en el if, el método isDirectory verifica que lo que estamos seleccionando sea un archivo */

            zonadatos.innerHTML += "<span class='directorio'>" + archivos[i].name + "</span><br>"; /* Aquí incrustamos código html */

        }

    }

}

function errores(e){

    alert("Ha habido un error: " + e.code); /* e.code retorna el código del error */

}

window.addEventListener("load", comenzar, false);