function iniciar(){
	var elemento = document.getElementById('lienzo');

	lienzo = elemento.getContext('2d');
	//lienzo.strokeRect(0, 0, elemento.width, elemento.height);

	//métodos
	//arc() permite dibujar un arco o un circulo
	//quadraticCurveTo genera una curva Bézier cuadrática 
	//bezierCurveTo

	lienzo.beginPath();

	lienzo.moveTo(200, 250);
	//lienzo.qadraticCurveTo(punto de forma, punto de forma, posición actual lapiz, posición final lapiz);
	lienzo.quadraticCurveTo(250, 15, 350, 350);

	lienzo.stroke();
}

//cuando se carga la página llama a la función iniciar
window.addEventListener("load", iniciar, false)