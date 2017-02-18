function iniciar(){
	var elemento = document.getElementById('lienzo');

	lienzo = elemento.getContext('2d');
	
	var imagen = new Image();

	imagen.src = 'tux.png';
	imagen.addEventListener('load', function(){
		//los primeros valores 5 y 10 es la posición left/top donde aparece la imágen
		//los otros valores son el tamaño del elemento/imágen
		lienzo.drawImage(imagen, 5, 10, elemento.width = 400, elemento.height = 400);
	}, true);
}

//cuando se carga la página llama a la función iniciar
window.addEventListener("load", iniciar, false)