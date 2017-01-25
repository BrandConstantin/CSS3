function iniciar(){
	var elemento = document.getElementById('lienzo');

	lienzo = elemento.getContext('2d');
	lienzo.strokeRect(0, 0, elemento.width, elemento.height);
	
	lienzo.fillStyle = "#d34";
	lienzo.moveTo(50, 50);
	lienzo.lineTo(100, 150);
	lienzo.lineTo(100, 40);
	lienzo.fill();
}

//cuando se carga la página llama a la función iniciar
window.addEventListener("load", iniciar, false)
