function iniciar(){
	var elemento = document.getElementById('lienzo');

	lienzo = elemento.getContext('2d');
	
	lienzo.font = "bold 24px verdana, sans-serif";
	lienzo.textAlign = "start";
	lienzo.textBaseline = 'bottom';
	lienzo.fillStyle = "#d34";
	lienzo.fillText("Mi mensaje", 100, 120);
	var tamanio = lienzo.measureText("Mi mensaje");
	lienzo.strokeRect(98, 93, tamanio.width, 30);
}

//cuando se carga la página llama a la función iniciar
window.addEventListener("load", iniciar, false)