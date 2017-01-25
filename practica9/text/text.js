function iniciar(){
	var elemento = document.getElementById('lienzo');

	lienzo = elemento.getContext('2d');
	
	lienzo.font = "bold 24px verdana, sans-serif";
	lienzo.textAlign = "start";
	lienzo.fillStyle = "#d34";
	//lienzo.textBaseline = 'bottom';
	lienzo.fillText("Mi mensaje", 100, 120);
}

//cuando se carga la página llama a la función iniciar
window.addEventListener("load", iniciar, false)