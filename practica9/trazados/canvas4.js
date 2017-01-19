function iniciar(){
	var elemento = document.getElementById('lienzo');

	lienzo = elemento.getContext('2d');
	lienzo.strokeRect(0, 0, elemento.width, elemento.height);

	lienzo.beginPath();
	lienzo.moveTo(100, 100);
	lienzo.lineTo(200, 200);
	lienzo.lineTo(100, 200);
	lienzo.fill();
}

//cuando se carga la página llama a la función iniciar
window.addEventListener("load", iniciar, false);