function iniciar(){
	var elemento = document.getElementById('lienzo');

	lienzo = elemento.getContext('2d');
	//lienzo.strokeRect(0, 0, elemento.width, elemento.height);

	//métodos
	//arc() permite dibujar un arco o un circulo
	//quadraticCurveTo genera una curva Bézier cuadrática 
	//bezierCurveTo

	lienzo.beginPath();

	lienzo.moveTo(130, 130);
	//lienzo.qadraticCurveTo(posición las primeras 2, radio, angulo inicio, angulo final, dirección);
	lienzo.arc(250, 130, 125, 0 , Math.PI*2, true);

	lienzo.stroke();
}

//cuando se carga la página llama a la función iniciar
window.addEventListener("load", iniciar, false)