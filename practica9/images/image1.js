function iniciar(){
	var elemento = document.getElementById('lienzo');

	lienzo = elemento.getContext('2d');
	
	var imagen = new Image();

	imagen.src = 'tux.png';
	imagen.addEventListener('load', function(){
		//la distancia left/top donde aparecera la imagen
		lienzo.drawImage(imagen, 10, 80);
	}, true);

	//lienzo.drawImage(imagen, 0, 0, elemento.width, elemento.height);
}

//cuando se carga la página llama a la función iniciar
window.addEventListener("load", iniciar, false)