function iniciar(){
	var elemento = document.getElementById('lienzo');

	lienzo = elemento.getContext('2d');
	//lienzo.strokeRect(0, 0, elemento.width, elemento.height);

	//métodos
	//arc() permite dibujar un arco o un circulo
	//quadraticCurveTo genera una curva Bézier cuadrática 
	//bezierCurveTo

	lienzo.beginPath();
	//lienzo.arc(100, 100, 50, 0, Math.PI*2, false);
	/*lienzo.arc(100, 100, 50, 0, Math.PI, false);
	lienzo.arc(100, 100, 50, 0, Math.PI, true);
	lienzo.stroke();*/

	lienzo.moveTo(50, 50);
	lienzo.quadraticCurveTo(500, 125, 150, 250);
	lienzo.moveTo(250, 50);
	lienzo.bezierCurveTo(200, 125, 300, 125, 250, 200);
	lienzo.stroke();
}

//cuando se carga la página llama a la función iniciar
window.addEventListener("load", iniciar, false)