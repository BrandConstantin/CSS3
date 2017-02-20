function iniciar(){
	var elemento = document.getElementById('lienzo');

	lienzo = elemento.getContext('2d');
	//lienzo.strokeRect(0, 0, elemento.width, elemento.height);

	//métodos
	//quadraticCurveTo genera una curva Bézier cuadrática 
	//bezierCurveTo

	lienzo.beginPath();
	lienzo.moveTo(250, 50);
	//lienzo.bezierCurveTo(4 puntos para moldear, punto inicial y final);
	//800 left y 605 top, hasta donde llega el punto del medio del bezier
	//5 left y 20 top hasta donde llega el punto final del bezier
	lienzo.bezierCurveTo(-300, -85, 800, 605, 5, 20);
	lienzo.stroke();
}

//cuando se carga la página llama a la función iniciar
window.addEventListener("load", iniciar, false)