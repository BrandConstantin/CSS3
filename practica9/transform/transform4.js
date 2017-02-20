function iniciar(){
	var elemento = document.getElementById('lienzo');

	lienzo = elemento.getContext('2d');
	
	//color texto
	lienzo.fillStyle = '#000';
	//0 left de donde empieza la linea 
	//99 top por donde pasara la linea
	//230 es hasta donde llega la linea negra
	//3 es el grosor de la linea que subraya las letras
	lienzo.fillRect(0, 99, 230, 3);
	lienzo.globalCompositeOperation = "destination-atop";
	lienzo.fillStyle = '#AAF';
	lienzo.font = "bold 32px verdana, sans-serif";
	//lienzo.textAlign = 'center';
	lienzo.textBaseline = 'middle';
	lienzo.fillText('Canvas', 150, 100);
}

//cuando se carga la página llama a la función iniciar
window.addEventListener("load", iniciar, false)