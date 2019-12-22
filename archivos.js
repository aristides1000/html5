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

    var mi_archivo = archivos[0]; /* aquí lo que estamos haciendo en asignandole a una variable la posición [0] de la matriz que generó .files y a la que a su vez se la asignamos a la variable archivos */

    /* Ahora vamos a crear un lector para poder leer la información generada */

    var lector = new FileReader(); /* Aquí estamos creando un lector y lo estamos almacenando en una variable */

    lector.readAsText(mi_archivo/* , "UTF-8" */);/* Aquí estoy leyendo como texto mi archivo */ /* con readAsText, le podemos pasar un segundo parámetro el cuál es el del tipo de codificación y se lo pasamos con una coma y después el formato de lectura de caratéres */ /* Cabe acotar que si no se le coloca este parametro va a tomar por defecto el de UTF-8 */

    /* Ahora procedemos a colocar al lector a la escucha de un evento */

    lector.addEventListener("load", mostrar_en_web, false);/* aquí dijimos que cuando cargue lector me ejecute la función mostrar_en_web */

}

function mostrar_en_web(e){/* Aquí le pasamos el objeto que ha desencadenado el evento "e" que en este caso es el lector */

    /* Ahora procedo a almacenar el resultado del objeto en una variable */

    var resultado = e.target.result; /* Aquí estamos almacenando el resultado del objeto evento en una variable */

    zonadatos.innerHTML = resultado;

}

window.addEventListener("load", comenzar, false);