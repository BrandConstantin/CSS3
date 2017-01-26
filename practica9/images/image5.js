function iniciar(){
	var elemento = document.getElementById('lienzo');

	lienzo = elemento.getContext('2d');
	
	var imagen = new Image();

	imagen.src = 'tux.png';
	imagen.addEventListener('load', modificarImagen, false);
}

function modificarImagen(e){
	imagen = e.target;
	
	var info = lienzo.createPattern(imagen, 'repeat');
	
	lienzo.fillStyle = info;
	lienzo.fillRect(150, 150, 400, 300);

//cuando se carga la página llama a la función iniciar
}window.addEventListener("load", iniciar, false)