function comenzar() {
    var elem_origen = document.getElementById("imagen");
    /* elem_origen.addEventListener("dragstart", function () {alert("Comenzó el evento");}, false); */ /* Aquí en lugar de llamar a una función lo que hacemos es ejecutar una función anónima */
    /* El evento dragstart se desencadena al momento de iniciar el arrastrado de un objeto */
    /* Ahora bien, vamos a hacer uso del evento dragend, que se ejecuta al momento de finalizar el arrastrado del elemento, y vamos a visualizarlo con el siguiente ejemplo */
    /* elem_origen.addEventListener("dragend", function () {alert("Finalizó el evento");}, false); */
    /* El evento drag se ejecuta al momento de arrastrar el elemento */
    /* elem_origen.addEventListener("drag", function () {alert("Se  el evento");}, false); */
    /* elem_origen.addEventListener("dragstart", function () {alert("Se inició el evento");}, false); */
    elem_origen.addEventListener("dragstart", comenzamos_arrastrar,false);

    var elem_destino = document.getElementById("zonadestino");

    elem_destino.addEventListener("dragenter", function(e){
    /* aquí es donde le vamos a decir al navegador que resetee sus valores por defecto para poder hacer uso de drag and drop */
    /* para hacer lo anterior tenemos que llamar a una función anónima que la llamamos aquí function(e) */
    /* El parámetro (e) de function(e) responde al evento disparado, es decir es como capturar dentro de una variable pues el evento que tiene lugar y pasarle ese evento como parámetro a la función luego entonces abrimos la llave de esa función anónima */
    e.preventDefault();}, false);

    elem_destino.addEventListener("dragenter", function(e){
        e.preventDefault();}, false);

        /* Igual que el anterior */
    
    elem_destino.addEventListener("drop", soltado, false); /* La finalidad de esta línea de código busca lo mismo que las anteriores */
}

function comenzamos_arrastrar(e){
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
/* en definitiva lo que estamos haciendo es */
}

window.addEventListener("load", comenzar, false);