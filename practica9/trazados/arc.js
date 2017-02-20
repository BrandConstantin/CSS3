function iniciar(){
	var elemento = document.getElementById('lienzo');

	lienzo = elemento.getContext('2d');
	//lienzo.strokeRect(0, 0, elemento.width, elemento.height);

	lienzo.beginPath();
	lienzo.moveTo(400, 230);
	//métodos
	//arc() permite dibujar un arco o un circulo
	//lienzo.qadraticCurveTo(posición las primeras 2, radio, angulo inicio, angulo final, dirección);
	//posición left y top del circulo
	//205 el radio del circulo
	//longitud del ciculo no dibujada, 0 el circulo se dibujara completamente
	//true significa que el circulo se dibujara de arriba hacia abajo, false al reves
	lienzo.arc(400, 300, 205, 1.6 , Math.PI * 2, false);
	lienzo.stroke();
}

//cuando se carga la página llama a la función iniciar
window.addEventListener("load", iniciar, false)