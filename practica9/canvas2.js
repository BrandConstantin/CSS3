function iniciar(){
	var elemento = document.getElementById('lienzo');

	lienzo = elemento.getContext('2d');
	//lienzo.strokeRect(0, 0, elemento.width, elemento.height);

	//métodos
	//beginPath() donde comienza el trazado
	//closePath() donde cierra el trazado generando una linea recta 
	//métodos para dibujar el trazado en el lienzo
	//stroke() dibuja el contorno del trazado
	//fill() dubuja el trazado como una figura sólida
	//clip() declara una nueva área de corte para el contexto

	lienzo.beginPath();
	lienzo.moveTo(100, 100);
	lienzo.lineTo(300, 300);
	lienzo.lineTo(100, 200);
	//lienzo.clip();
	lienzo.stroke();
	lienzo.beginPath();
	for (i = 0; i < 300; i += 10) {
		lienzo.moveTo(0, i);
		lienzo.lineTo(500, i);
	}
	//lienzo.closePath();
	lienzo.stroke();
	//lienzo.fill();
}

//cuando se carga la página llama a la función iniciar
window.addEventListener("load", iniciar, false)