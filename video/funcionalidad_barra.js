var mivideo, reproducir, barra, progreso;

function comenzar(){
	mivideo=document.getElementById("mivideo");
	reproducir=document.getElementById("reproducir");
	barra=document.getElementById("barra");
	progreso=document.getElementById("progreso");

	reproducir.addEventListener("click",clicando,false);

	progreso.addEventListener("click",adelantando,false);
}

function clicando(){
	if((mivideo.paused==false) && (mivideo.ended==false)){

		mivideo.pause();
		reproducir.innerHTML="Play";/*la propiedad innerHTML sirve para cambiar el texto del botón, y para ello debemos hacer uso de los Id*/

	}
	else{
		mivideo.play();
		reproducir.innerHTML="Pause";/*la propiedad innerHTML sirve para cambiar el texto del botón, y para ello debemos hacer uso de los Id*/
	}
}

window.addEventListener("load",comenzar,false);