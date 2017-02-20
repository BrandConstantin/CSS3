function iniciar(){
	var elemento = document.getElementById('lienzo');

	lienzo = elemento.getContext('2d');
	
	//definir propriedades del texto
	lienzo.font = "bold 24px verdana, sans-serif";
	//lienzo.textAlign = "start";
	//para que el texto aparezca en el centro del rectangulo
	lienzo.textBaseline = 'bottom';
	//el color del texto
	lienzo.fillStyle = "#d39";
	//la distancia donde aparecera el texto
	lienzo.fillText("Canvas", 130, 150);
	//para que el mensaje Canvas lo incluya dentro de un rectangulo
	var tamanio = lienzo.measureText("Canvas");
	//129 left donde aparece el rectangulo, 120 top, 
	//160 width y 30 height el tamañio del rectangulo
	lienzo.strokeRect(129, 120, 160, 35);
}

//cuando se carga la página llama a la función iniciar
window.addEventListener("load", iniciar, false)