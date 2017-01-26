function iniciar(){
	var elemento = document.getElementById('lienzo');

	lienzo = elemento.getContext('2d');
	
	lienzo.fillStyle = '#900';
	lienzo.fillRect(100, 100, 300, 100);
	lienzo.globalCompositeOperation = "destination-atop";
	lienzo.fillStyle = '#AAF';
	lienzo.font = "bold 24px verdana, sans-serif";
	lienzo.textAlign = 'center';
	lienzo.textBaseline = 'middle';
	lienzo.fillText('PRUEBA1', 200, 100);
}

//cuando se carga la página llama a la función iniciar
window.addEventListener("load", iniciar, false)