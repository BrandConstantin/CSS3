function iniciar(){
	var elemento = document.getElementById('lienzo');

	lienzo = elemento.getContext('2d');
	lienzo.strokeRect(0, 0, elemento.width, elemento.height);

	//métodos
	//beginPath() donde comienza el trazado
	//closePath() donde cierra el trazado generando una linea recta 
	//métodos para dibujar el trazado en el lienzo
	//stroke() dibuja el contorno del trazado
	//fill() dubuja el trazado como una figura sólida
	//clip() declara una nueva área de corte para el contexto

	lienzo.beginPath();
	//de donde empieza el trazado (left, top)
	lienzo.moveTo(300, 10);
	//hasta donde llega el trazado (left, top)
	lienzo.lineTo(100, 50);
	lienzo.stroke();
}

//cuando se carga la página llama a la función iniciar
window.addEventListener("load", iniciar, false)