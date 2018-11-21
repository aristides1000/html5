function ejecuta(){/*esto es para decirle al docuento javascript que reconozca las etiquetas <p>*/
	/*document.getElementsByTagName("p")[0].onclick=saludo;*//*esto es para decirle al docuento javascript que reconozca las etiquetas <p> y que tenga en cuenta el evento cliquear "onclick" y ejecute la función "saludo()"*//*esto devuelve un array o arreglo, el [0] representa la posición y los arrays siempre comienzan en "0"*/
	/*document.getElementById("importante").onclick=saludo;*//*esto es para escoger un solo elemento con un Id en este caso el toma es el primero*/

	/*Si en nuestro caso queremos obtener todos los <p> tenemos que hacer un bucle for de esta forma*/
	/*
	for(var i=0;i<3;i++){
		document.getElementsByTagName("p")[i].onclick=saludo;
	}
	*/

	/*ahora vamos a hacerlo a través del atributo class de la siguiente forma*/

	/*en este caso aplicamos primeramente una variable, ya que éste método es un pelo caprichoso, aunque si no le coloco lo de la variable agarra de todas formas*/
	/*var z=document.getElementsByClassName("importante")[i].onclick=saludo;*/
	/*si queremos que agarre varios elementos con la clase específica debemos hacer un ciclo for de la siguiente manera*/
	/*de igual forma si agarramos y eliminamos el var z agarra de todas formas*/
	
	for(var i=0;i<3;i++){
		var z=document.getElementsByClassName("importante")[i].onclick=saludo;
	}
	
	/*si no sabemos la cantidad de elementos, no hay de qué preocuparnos, ya que lo explicarán más adelante el curso*/
}

function saludo(){
	
	alert("Nuevo mensaje");

}

/*una forma de auto ejecutar una función de javascript es esta*/
/*window.onload=saludo;*//*esto quiere decir que inmediatamente al cargar la página se ejecute la función saludo*/

/*todas las sentencias terminan en ; excepto los bucles, los condicionales ni las funciones*/

window.onload=ejecuta;/*esto quiere decir que inmediatamente al cargar la página se ejecute la función "ejecuta()"*/