function iniciar(){
	var elemento = document.getElementById('lienzo');

	lienzo = elemento.getContext('2d');
	//lienzo.strokeRect(0, 0, elemento.width, elemento.height);

	//métodos
	//arc() permite dibujar un arco o un circulo
	//quadraticCurveTo genera una curva Bézier cuadrática 
	//bezierCurveTo

	lienzo.beginPath();
	lienzo.moveTo(250, 50);
	//lienzo.bezierCurveTo(4 puntos para moldear, punto inicial y final);
	lienzo.bezierCurveTo(50, 125, 450, 125, 250, 200);
	lienzo.stroke();
}

//cuando se carga la página llama a la función iniciar
window.addEventListener("load", iniciar, false)