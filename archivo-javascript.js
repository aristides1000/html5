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
	/*
	for(var i=0;i<3;i++){
		var z=document.getElementsByClassName("importante")[i].onclick=saludo;
	}
	*/
	/*si no sabemos la cantidad de elementos, no hay de qué preocuparnos, ya que lo explicarán más adelante el curso*/

	/*querySelector() retorna solo el primer elemento, en cambio querySelectorAll() retorna todos los elementos*/
	/*
	document.querySelector(".importante").onclick=saludo;
	*/
	/*si queremos apuntar al último elemento de la etiqueta <p> lo que debemos hacer es lo siguiente*/
	/*document.querySelector("#principal p:last-child").onclick=saludo;*//*recordar que querySelector() sólo devuelve un elemento*/

	/*si queremos devolver todos las <p> debemos hacer lo siguiente*/

	/*var elementos=document.querySelectorAll("#principal p")[0].onclick=saludo;*//*hay que poner entre corchetes [] la posición del array que queremos devolver*/

	/*si queremos apuntar a todos debemos hacer lo siguiente*/
	/*
	for(var i=0;i<4;i++){
		var elementos=document.querySelectorAll("#principal p");

		elementos[i].onclick=saludo;
	}
	*/
	/*Ahora bien, lo anterior es lo mismo que esto*/
	/*
	for(var i=0;i<4;i++){
		document.querySelectorAll("#principal p")[i].onclick=saludo;
	}
	*/

	/*Ahora bien, sino sabemos la cantidad de elementos que contenga la etiqueta debemos hacer lo siguiente si no sabemos el tamaño del arreglo*/

	var elementos=document.querySelectorAll("#principal p, span");/*con esto lo que le queremos decir es que va a tomar todos los elementos p que se encuentren en la clase principal más todos los elementos que se encuentren entre las etiquetas span*/

	for(var i=0;i<elementos.length;i++){/*con esta instrucción ;i<elementos.length; no es necesario saber el tamaño del arreglo, sino que más bien el código lo averigua, y tenemos que hacer estos cambios en las lineas de código para que tengamos inicializada la variable*/

		elementos[i].onclick=saludo;
	}	
}

function saludo(){
	
	alert("Nuevo mensaje");

}

/*una forma de auto ejecutar una función de javascript es esta*/
/*window.onload=saludo;*//*esto quiere decir que inmediatamente al cargar la página se ejecute la función saludo*/

/*todas las sentencias terminan en ; excepto los bucles, los condicionales ni las funciones*/

window.onload=ejecuta;/*esto quiere decir que inmediatamente al cargar la página se ejecute la función "ejecuta()"*/