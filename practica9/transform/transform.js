function iniciar(){
	var elemento = document.getElementById('lienzo');

	lienzo = elemento.getContext('2d');
	
	lienzo.font = "bold 24px verdana, sans-serif";
	lienzo.fillText('PRUEBA1', 70, 40);

	lienzo.translate(90, 70);
	lienzo.rotate(Math.PI/180 * 45);
	lienzo.fillText('PRUEBA2', 0, 0);

	lienzo.translate(90, 70);
	lienzo.rotate(Math.PI/180 * 90);
	lienzo.fillText('PRUEBA3', 0, 0);

	lienzo.translate(90, 70);
	lienzo.rotate(Math.PI * 45);
	lienzo.fillText('PRUEBA4', 40, 5);

	lienzo.translate(90, 70);
	lienzo.rotate(Math.PI * 90);
	lienzo.fillText('PRUEBA5', 50, 20);

	lienzo.translate(90, 70);
	lienzo.rotate(Math.PI/180 * 360);
	lienzo.fillText('PRUEBA6', 70, 0);

	lienzo.translate(90, 70);
	lienzo.rotate(-Math.PI/180 * 45);
	lienzo.fillText('PRUEBA7', 0, 50);

	lienzo.translate(90, 70);
	lienzo.rotate(-Math.PI/180 * 90);
	lienzo.fillText('PRUEBA8', 0, -100);

	lienzo.translate(-110, -200);
	lienzo.scale(4, 2);
	lienzo.fillText('PRUEBA9', 0, 0);
}

//cuando se carga la página llama a la función iniciar
window.addEventListener("load", iniciar, false)