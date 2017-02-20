function iniciar(){
	var elemento = document.getElementById('lienzo');

	lienzo = elemento.getContext('2d');
	//lienzo.strokeRect(0, 0, elemento.width, elemento.height);

	lienzo.beginPath();
	lienzo.moveTo(100, 100);
	lienzo.lineTo(300, 300);
	lienzo.lineTo(100, 200);
	//lienzo.clip();
	lienzo.fill();
	//lienzo.beginPath();
	for (i = 20; i < 800; i += 20){ 
		lienzo.moveTo(0, i);
		lienzo.lineTo(800, i);
		
		for(j = 20; j < 800; j += 20){
			lienzo.moveTo(800, j); // + j
			lienzo.lineTo(0, j + j); // +
			
			//lienzo.stroke();
			
		}

		lienzo.stroke();
	}
}

//cuando se carga la página llama a la función iniciar
window.addEventListener("load", iniciar, false)