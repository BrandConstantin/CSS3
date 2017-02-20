function iniciar(){
	var elemento = document.getElementById('lienzo');

	lienzo = elemento.getContext('2d');
	lienzo.strokeRect(0, 0, elemento.width, elemento.height);

	lienzo.beginPath();
	lienzo.moveTo(100, 100);
	lienzo.lineTo(200, 200);
	lienzo.lineTo(100, 200);
	lienzo.closePath();
	lienzo.stroke();
	lienzo.closePath();

	lienzo.beginPath();
	lienzo.moveTo(300, 300);
	lienzo.lineTo(400, 400);
	lienzo.lineTo(300, 400);
	lienzo.fill();
	lienzo.closePath();	
}

//cuando se carga la página llama a la función iniciar
window.addEventListener("load", iniciar, false);