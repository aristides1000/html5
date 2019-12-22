function comenzar(){
    
    zonadatos = document.getElementById("zonadatos");

    var archivos = document.getElementById("archivos");/* Aquí identificamos al botón */

    /* ahora nos ponemos a la escucha del evento change del bótón file */

    archivos.addEventListener("change", procesar, false);

}

function procesar(e){ /* a esta función se le pasa por parámetro el objeto evento */
    /* La profundización de javascript estáAquí mismo en la página de píldoras informáticas */
    /* "e" (osea el objeto evento) está haciendo referencia al botón en el momento que ocurre el evento o en el momento que sucede el evento change del botón que mencionamos arriba en la función comenzar y esto nos permite acceder a las propiedades y a los métodos de un objeto en el momento que ocurre el evento, lo podremos capturar en una función como parámetro */
    var archivos = e.target.files; /* esto quiere decir lo siguiente, "e" es nuestro botón tipo file en el momento que ocurre el evento, ese botón al momento de ocurrir el evento envía una propiedad file, y la propiedad file hace referencia a un array, es decir a una matriz que contiene los elementos generados por el botón */

    /* esta propiedad file hace referencia a una matriz, donde, cada uno de los archivos que seleccionemos, representa una posición en esa matriz */

    /* vamos a decirle a partir de aquí que el tipo de archivo tiene que ser de imagen con las siguientes instrucciones y a partir de aquí arranca el video 55 */

    zonadatos.innerHTML = ""; /* de esta forma vaciamos la información contrenida en zonadatos */

    var mi_archivo = archivos[0]; /* aquí lo que estamos haciendo en asignandole a una variable la posición [0] de la matriz que generó .files y a la que a su vez se la asignamos a la variable archivos */

    /* Ahora vamos a crear un lector para poder leer la información generada */

    /* mediante el siguiente alert vamos a verificar que tipo de archivo es el que estamos cargando */

    /* alert(mi_archivo.type); */ /* este alert nos dice el tipo de archivo */

    if(!mi_archivo.type.match(/image/)){ /* Aquí estamos creando un condicional que nos dice si mi archivo no es una imagen */ /* (/image/) es una expresión regular en javascript, para poder entenderlo del todo tenemos que hacer el curso de javascript contenido en el canal de píldoras informáticas en youtube */

        alert("Selecciona una imagen, por favor");

    }else{/* si no no es una imagen, osea, la doble negación genera un verdad, si es una imagen */

        zonadatos.innerHTML += "Nombre del archivo: " + mi_archivo.name + "<br>";

        /* zonadatos.innerHTML += "Tamaño del archivo: " + mi_archivo.size + "bytes <br>";  *//* Aquí podemos observar que se puede modificar el resultado de byte para que nos devuelva kilobyte de la siguiente manera */

        /* zonadatos.innerHTML += "Tamaño del archivo: " + mi_archivo.size/1024 + "kb <br>"; */ /* el número de kb me dá demasiados desimales, para eliminar ese poco de decimales hacemos lo siguiente */

        /* zonadatos.innerHTML += "Tamaño del archivo: " + mi_archivo.size/1048576 + " mb <br>"; */ /* esto es en megabytes */

        zonadatos.innerHTML += "Tamaño del archivo: " + Math.round(mi_archivo.size/1024) + " kb <br>";

        var lector = new FileReader(); /* Aquí nos creamos el lector */

        /* lector.readAsText(mi_archivo); */ /* en este caso ya no podemos usar el método .readAsText ya que este método lee como texto, por al contrario tenemos que usar el método .readAsDataURL este método lo que hace es devolvernos la información del archivo en formato URL y esa URL se puede utilizar para muchos propósitos, como lo son el de incrustarlo dentro de un código HTML y deesa forma nos salga la imágen */

        lector.readAsDataURL(mi_archivo);

        lector.addEventListener("load", mostrar_en_web, false);
    }

    /* var lector = new FileReader(); */ /* Aquí estamos creando un lector y lo estamos almacenando en una variable */

    /* lector.readAsText(mi_archivo *//* , "UTF-8" *//* ); */ /* Aquí estoy leyendo como texto mi archivo */ /* con readAsText, le podemos pasar un segundo parámetro el cuál es el del tipo de codificación y se lo pasamos con una coma y después el formato de lectura de caratéres */ /* Cabe acotar que si no se le coloca este parametro va a tomar por defecto el de UTF-8 */

    /* Ahora procedemos a colocar al lector a la escucha de un evento */

    /* lector.addEventListener("load", mostrar_en_web, false); *//* aquí dijimos que cuando cargue lector me ejecute la función mostrar_en_web */

}

function mostrar_en_web(e){/* Aquí le pasamos el objeto que ha desencadenado el evento "e" que en este caso es el lector */

    /* Ahora procedo a almacenar el resultado del objeto en una variable */

    var resultado = e.target.result; /* Aquí estamos almacenando el resultado del objeto evento en una variable */

    /* zonadatos.innerHTML = resultado; */ /* esta instrucción cámbia ligeramente con la finalidad de que se nos permita ver la imagen */

    /* zonadatos.innerHTML += "<img src='" + resultado + "'>"; */ /* en resultado está almacenada una ruta URL */

    zonadatos.innerHTML += "<img src='" + resultado + "' width='100%'>";
}

window.addEventListener("load", comenzar, false);