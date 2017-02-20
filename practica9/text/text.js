function iniciar(){
	var elemento = document.getElementById('lienzo');

	lienzo = elemento.getContext('2d');
	
	//definir propriedades texto
	lienzo.font = "bold 24px verdana, sans-serif";
	//lienzo.textAlign = "start";
	//el color del texto
	lienzo.fillStyle = "#d39";
	//lienzo.textBaseline = 'bottom';
	//la distancia donde aparecera el texto
	lienzo.fillText("Canvas", 150, 190);
}

//cuando se carga la página llama a la función iniciar
window.addEventListener("load", iniciar, false)