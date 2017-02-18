function iniciar(){
	var elemento = document.getElementById('lienzo');

	lienzo = elemento.getContext('2d');
	
	var imagen = new Image();

	imagen.src = 'tux.png';
	//500 left y 500 top es la parte de la imágen original de donde se extraera una parte más pequeña
	//80 y 80 es el zoom que se le hace a la imágen
	//100 left y 120 top donde aparece la imágen dentro del lienzo
	//400 width y 100 height, es el tamaño del trozo recortado
	lienzo.drawImage(imagen, 500, 500, 80, 80, 100, 120, 400, 100);
}

//cuando se carga la página llama a la función iniciar
window.addEventListener("load", iniciar, false)