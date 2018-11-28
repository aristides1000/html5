var miaudio, reproducir, barra, progreso, maximo;/*declaración de variables*/

maximo=600;

function comenzar(){
	miaudio=document.getElementById("miaudio");
	reproducir=document.getElementById("play");
	barra=document.getElementById("barra");
	progreso=document.getElementById("progreso");

	reproducir.addEventListener("click",clicando,false);

	barra.addEventListener("click",adelantando,false);
}

function clicando(){
	if((miaudio.paused==false) && (miaudio.ended==false)){

		miaudio.pause();
		reproducir.innerHTML="Play";/*la propiedad innerHTML sirve para cambiar el texto del botón, y para ello debemos hacer uso de los Id*/

	}
	else{
		miaudio.play();
		reproducir.innerHTML="Pause";/*la propiedad innerHTML sirve para cambiar el texto del botón, y para ello debemos hacer uso de los Id*/

		bucle=setInterval(estado,30);/*esta función "setInterval()" posee 2 parámetros, 1ero va la función de estado y el 2do parámetro es la frecuencia con la que queremos llamar a esa función, la unidad de medida de esta frecuencia es en milisegundos*//*1000milisegundos es igual a 1 segundo*/
	}
}

function estado(){

	if (miaudio.ended==false){

		var total=parseInt(miaudio.currentTime*maximo/miaudio.duration);

		progreso.style.width=total+"px";/*el "+" es un concatenador*/

	}else{

		reproducir.innerHTML="Play";/*Esto es para que al finalizar el video cambie el texto del botón*/
		
	}
}

function adelantando(posicion){

	var ratonX=posicion.pageX-barra.offsetLeft;

	var nuevoTiempo=ratonX*miaudio.duration/maximo;

	miaudio.currentTime=nuevoTiempo;

	progreso.style.width=ratonX+"px";

}

window.addEventListener("load",comenzar,false);