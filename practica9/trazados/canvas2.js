function iniciar(){
	var elemento = document.getElementById('lienzo');

	lienzo = elemento.getContext('2d');
	lienzo.strokeRect(0, 0, elemento.width, elemento.height);

	lienzo.beginPath();
	//de donde empieza el punto inicial, left top
	lienzo.moveTo(100, 100);
	//hasta donde llega el segundo punto, left y top, trazando una linea
	lienzo.lineTo(300, 100);
	//una segunda linea, 3 punto
	lienzo.lineTo(100, 200);
	//una tercera linea, 4 punto
	lienzo.lineTo(300, 200);
	lienzo.fill();
	lienzo.closePath;

	lienzo.beginPath();
	//de donde empieza el punto inicial, left top
	lienzo.moveTo(400, 400);
	//hasta donde llega el segundo punto, left y top, trazando una linea
	lienzo.lineTo(600, 400);
	//una segunda linea, 3 punto
	lienzo.lineTo(400, 600);
	//una tercera linea, 4 punto
	lienzo.lineTo(600, 600);
	lienzo.stroke();
	lienzo.closePath;	
}

//cuando se carga la página llama a la función iniciar
window.addEventListener("load", iniciar, false)