function iniciar(){
	var elemento = document.getElementById('lienzo');

	lienzo = elemento.getContext('2d');
	
	var imagen = new Image();

	imagen.src = 'tux.png';
	imagen.addEventListener('load', modificarImagen, false);
}

function modificarImagen(e){
	imagen = e.target;
	//left y top donde aparece la imágen
	lienzo.drawImage(imagen, 10, 10);
	
	//400 left y 250 top de donde se recortara la imágen original
	//300 width y 300 height el tamaño del recorte
	var info = lienzo.getImageData(400, 250, 300, 300);
	var pos;

	for(x = 0; x <= 300; x++){
		for(y = 0; y <= 300; y++){
			//la primera linea hace dividir el recorte en columnas y filas
			pos = (info.width * 4 * y) + (x * 4);
			//aplica unos efectos al recorte
			info.data[pos] = 179 - info.data[pos];
			info.data[pos + 1] = 100 - info.data[pos + 1];
			info.data[pos + 2] = 255 - info.data[pos + 2];
		}
	}
	
	//left y top donde aparece la imágen recortada
	lienzo.putImageData(info, 50, 50);

//cuando se carga la página llama a la función iniciar
}window.addEventListener("load", iniciar, false)