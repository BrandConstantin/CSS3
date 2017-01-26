function iniciar(){
	var elemento = document.getElementById('lienzo');

	lienzo = elemento.getContext('2d');
	
	var imagen = new Image();

	imagen.src = 'tux.png';
	imagen.addEventListener('load', function(){
		//lienzo.drawImage(imagen, 0, 0, elemento.width / 2, elemento.height / 2);
		lienzo.drawImage(imagen, 0, 0, elemento.width = 200, elemento.height = 200);
	}, true);
}

//cuando se carga la página llama a la función iniciar
window.addEventListener("load", iniciar, false)