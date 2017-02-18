function iniciar(){
	var elemento=document.getElementById('lienzo');
	lienzo=elemento.getContext('2d');
	
	video=document.getElementById('medio');
	video.addEventListener('click', presionar, false);
	}
	
	//cuando se hace click sobre el video se inicia la función
	function presionar(){
		//si se vuelve a presionar el video se pausa
		if(!video.paused && !video.ended){
			video.pause();
			window.clearInterval(bucle);
		}else{
			video.play();
			bucle=setInterval(procesarCuadros, 60);
		}
	}
	
	//procesar el video
	function procesarCuadros(){
		//indica la parte del video que se recortara para reproducir
		//en 0, 0 muestra el video entero
		lienzo.drawImage(video, 0, 0);
		//0 left y 0 top de donde se recortara la imágen original
		//500 width y 500 height el tamaño del recorte
		var info=lienzo.getImageData(0, 0, 500, 500);
		
		var pos;
		var negro;
		
		for(x = 0; x <= 500; x++){
			for(y = 0; y <= 500; y++){
				//la primera linea hace dividir el recorte en columnas y filas
				pos = (info.width * 3 * y) + ( x * 3);
				//aplica unos efectos al recorte
				negro = parseInt(170 - info.data[pos] + 205 - info.data[pos+1] + 100 - info.data[pos+2]);
				
				info.data[pos] = negro;
				info.data[pos + 1] = negro;
				info.data[pos + 2] = negro;
			}
		}
		
		//left y top donde aparece la imágen recortada
		lienzo.putImageData(info, 0, 0);
} window.addEventListener("load", iniciar, false);