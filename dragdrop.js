var elem_origen;

var elem_destino;

function comenzar() {
    
    elem_origen = document.getElementById("imagen");
    /* var elem_origen = document.getElementById("imagen"); */ /* Esto va a generar un error ya que son variables que sólo existen dentro de la función comenzar (osea tienen un ámbito local), y no en todo el código, lo que hara que no podamos usarlo para todas las demás funciones internas en el código, la solición a esto es declarar las variables fuera de cualquier función y dentro del archivo */
    /* elem_origen.addEventListener("dragstart", function () {alert("Comenzó el evento");}, false); */ /* Aquí en lugar de llamar a una función lo que hacemos es ejecutar una función anónima */
    /* El evento dragstart se desencadena al momento de iniciar el arrastrado de un objeto */
    /* Ahora bien, vamos a hacer uso del evento dragend, que se ejecuta al momento de finalizar el arrastrado del elemento, y vamos a visualizarlo con el siguiente ejemplo */
    /* elem_origen.addEventListener("dragend", function () {alert("Finalizó el evento");}, false); */
    /* El evento drag se ejecuta al momento de arrastrar el elemento */
    /* elem_origen.addEventListener("drag", function () {alert("Se  el evento");}, false); */
    /* elem_origen.addEventListener("dragstart", function () {alert("Se inició el evento");}, false); */
    elem_origen.addEventListener("dragstart", comenzamos_arrastrar,false);

    elem_destino = document.getElementById("zonadestino");
    /* var elem_destino = document.getElementById("zonadestino"); *//* Esto va a generar un error ya que son variables que sólo existen dentro de la función comenzar (osea tienen un ámbito local), y no en todo el código, lo que hara que no podamos usarlo para todas las demás funciones internas en el código, la solición a esto es declarar las variables fuera de cualquier función y dentro del archivo */

    /* elem_destino.addEventListener("dragenter", function(e){ */
    /* aquí es donde le vamos a decir al navegador que resetee sus valores por defecto para poder hacer uso de drag and drop */
    /* para hacer lo anterior tenemos que llamar a una función anónima que la llamamos aquí function(e) */
    /* El parámetro (e) de function(e) responde al evento disparado, es decir es como capturar dentro de una variable pues el evento que tiene lugar y pasarle ese evento como parámetro a la función luego entonces abrimos la llave de esa función anónima */
    /* e.preventDefault();}, false); */

    elem_destino.addEventListener("dragover", function(e){
        e.preventDefault();}, false);

        /* Igual que el anterior */
    
    elem_destino.addEventListener("drop", soltado, false); /* La finalidad de esta línea de código busca lo mismo que las anteriores */

    /* Aquí comienza el video 41 */

    elem_origen.addEventListener("dragend", terminado, false);/* esto es para que esté a la escucha de cuando termine de arrastrarse el objeto */

    elem_destino.addEventListener("dragenter", entrando, false);/* para que entre en la función entrando */

    elem_destino.addEventListener("dragleave", saliendo, false);

}

function comenzamos_arrastrar(e){

    /* e.preventDefault(); */

    /* var elem_origen = document.getElementById("imagen"); */

    var codigo = "<img src='" + elem_origen.getAttribute("src") + "'>";
    /* en src de <img src="" y aquí se supone que vendría a la ruta ahora bien como la ruta a lo mejor no la conocemos o en un futuro la cambiamos porque queremos arrastrar otro objeto diferente
lo que voy a hacer va a ser decirle al
código javascript que capture el mismo
pues la ruta del objeto que estamos
arrastrando en vez de escribir nosotros
la ruta completa y fija le vamos a decir
al código javascript que lo haga el y
para ello pues lo que hacemos es
escribir la primera parte de la etiqueta
img y concatenar lo pues con lo que aparece arriba en el código citado */
/* getAttribute lo que permite es capturar el
atributo que queramos del objeto en
cuestión en este caso lo que le estamos
diciendo oye mira me vas a capturar pues
un atributo de elemento origen elemento
origen recordamos que ese elemento que
estamos el elemento que estamos
arrastrando concretamente la imagen qué
atributo de la imagen me interesa a mí
capturar en este instante pues me
interesa capturar la ruta porque lo que
quiero es concatenar esa cadena de texto
que tenemos ahí a medias con la ruta
para que después de imagen src igual a
comillas pues me ponga la ruta luego
entonces aquí lo que le diremos es entre
comillas que me capturen esa propiedad
 */
/* cuando utilizas dentro de una cadena de caracteres una comilla que está dentro de otra tiene que ser diferente entonces las comillas externas son dobles mientras que las comillas internas son simples */

/* bueno pues una vez
hecho esto ya solamente nos queda
utilizar un método que vimos en el vídeo
anterior que es el método setData el
método setData si recordáis del vídeo
anterior lo que permite es establecer de
la información que tiene que compartir
el objeto que arrastras y la zona de
destino establecer información es la que
quieres compartir y la información que
quiero compartir entre las dos zonas es
precisamente pues lo que hay almacenado
en código esto lo que quiero compartir
es decir quiero compartir la etiqueta de
la imagen para que sea capaz de en la
zona de destino poner la imagen y esto
como lo hacemos bueno pues esto lo
hacemos utilizando el objeto que ha
desencadenado el evento
y a continuación el objeto data transfer
que ya mencionamos también en el vídeo
anterior este objeto era el que tenía el
método se trata con lo cual de la
siguiente forma */

    e.dataTransfer.setData("Text", codigo);

    /* setData lo que hace es enviar información, osea, hace lo contrario a setData */
}

function soltado(e){

    e.preventDefault();

    /* var elem_destino = document.getElementById("zonadestino"); */

    elem_destino.innerHTML = e.dataTransfer.getData("Text");

    /* getData lo que hace es capturar la información, osea, hace lo contrario a setData */

    /* el error está a la hora de declarar estas variables var en origen var el en destino es un error por sutil y bueno pues no lo editó
para que viendo los errores que yo
cometo que no son pocos pues vosotros
también podéis aprender de estas cosas
porque esto es un error de concepto de
javascript
mirad resulta que al declarar las
variables dentro de esta función pues el
ámbito de estas variables es un ámbito
local es decir estas variables solamente
tienen visibilidad dentro de la función
comenzar es decir desde que se abre la
llave hasta que la llave se cierra fuera
de estas llaves es como si estas
variables no existieran y si os fijáis
tanto en la función comenzará a
arrastrar
como en la función soltado estamos
haciendo referencia a estas variables el
m origen el en destino bueno pues estas
dos funciones no saben realmente a qué
nos referimos con estas variables ya que
no son visibles fuera de la función
comentar cómo podemos solucionar esto
pues esto lo solucionamos pues de dos
formas o bien quitas la palabra var que lo que haces es declarar la variable con
lo cual esto pues javascript lo permite
otros lenguajes no
no hace falta declarar la variable antes
de iniciarla en javascript o lo que
puedes hacer también que bajo mi punto
de vista sería más correcto pues es
declarar las fuera es decir fuera de
cualquiera de cualquier función pues
dice es para él en origen
y bueno pues debajo bar el intestino
eso es */
}

/* Aquí comienza el video 41 */

function terminado(e){

    var elemento = e.target;

    elemento.style.visibility = "hidden"; /* En esta linea le decimos a nuestro objeto que se haga invisible */

}

function entrando(e){

    e.preventDefault();
    
    elem_destino.style.background = "rgba(8,252,25,.8)"; /* Esta parte es importante, en lo que entre el ícono del ratón el background de elem_destino va a cambiar a verde */

}

function saliendo(e){

    e.preventDefault();/* esto es para resetear el comportamiento por defecto del navegador */

    /* elem_destino.style.background = "#FFF"; *//* eset es para que cuando el cursor del ratón salga del elem_destino, vuelva a cambiar a blanco */

    elem_destino.style.visibility = "hidden"; /* esta opción que se va a desarrollar es para hacer desaparecer el elem_destino */
}

window.addEventListener("load", comenzar, false);