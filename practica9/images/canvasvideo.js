function iniciar(){
	var elemento = document.getElementById('lienzo');

	lienzo = elemento.getContext('2d');

	video = document.getElementById('medio');
	video = addEventListener('click', presionar, false);
}

function presionar(){
	if(!video.paused && !video.ended){
		video.pause();
		window.clearInterval(bucle);
	}else{
		video.play();
		bucle = setInterval(procesarCuadros, 33);
	}
}

function procesarCuadros(){
	lienzo.drawImage(video, 0, 0);

	var info = lienzo.getImageData(0, 0, 483, 272);
	var pos;
	var gris;

	for(x = 0; x <= 484; x++){
		for(y = 0; y <= 272; y++){
			pos = (info.width * 4 * y) + (x * 4);
			gris = parseInt(info.date[pos] * 0.2989) + 
				info.data[pos + 1] * 0.5870; + 
				info.data[pos + 2] * 0.1140;

			info.data[pos] = gris;
			info.data[pos + 1] = gris;
			info.data[pos + 2] = gris;
		}
	}

	lienzo.putImageData(info, 0, 0);
}window.addEventListener("load", iniciar, false);