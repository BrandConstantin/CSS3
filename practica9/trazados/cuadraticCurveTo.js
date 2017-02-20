function iniciar(){
	var elemento = document.getElementById('lienzo');

	lienzo = elemento.getContext('2d');
	//lienzo.strokeRect(0, 0, elemento.width, elemento.height);

	//métodos
	//quadraticCurveTo genera una curva Bézier cuadrática 

	lienzo.beginPath();
	
	//punto inicial, left y top
	lienzo.moveTo(250, 250);
	//lienzo.qadraticCurveTo(punto de forma, punto de forma, posición actual lapiz, posición final lapiz);
	// 800 left y 200 top el punto de curbura
	//100 left y 350 top, el punto final
	lienzo.quadraticCurveTo(800, 200, 100, 350);

	lienzo.stroke();
}

//cuando se carga la página llama a la función iniciar
window.addEventListener("load", iniciar, false)