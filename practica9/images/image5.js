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
	//50 left y 180 top de donde se hara el recorte en la imágen original
	//700 width y 200 height el tamaño del recorte
	lienzo.fillRect(50, 180, 700, 200);

//cuando se carga la página llama a la función iniciar
}window.addEventListener("load", iniciar, false)