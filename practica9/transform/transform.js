function iniciar(){
	var elemento = document.getElementById('lienzo');

	lienzo = elemento.getContext('2d');
	
	//definir propriedades del texto
	lienzo.font = "bold 24px verdana, sans-serif";
	
	//left y top de prueba1
	lienzo.fillText('PRUEBA1', 100, 50);
	
	//translate muda el texto a otra distancia left y top
	//Math.PI le da la vuelta al texto
	//la 3º linea indica left y top a donde mudara el texto calculado desde el punto translate
	
	lienzo.translate(100, 100);
	lienzo.rotate(Math.PI/180 * 45);
	lienzo.fillText('PRUEBA2', 0, 0);

	lienzo.translate(150, 150);
	lienzo.rotate(Math.PI/180 * 90);
	lienzo.fillText('PRUEBA3', 0, 0);

	lienzo.translate(350, 0);
	lienzo.rotate(Math.PI * 45);
	lienzo.fillText('PRUEBA4', 200, 200);

	lienzo.translate(50, 50);
	lienzo.rotate(Math.PI * 90);
	lienzo.fillText('PRUEBA5', 300, 300);

	lienzo.translate(300, 300);
	lienzo.rotate(Math.PI/180 * 360);
	lienzo.fillText('PRUEBA6', 0, 20);

	lienzo.translate(40, 40);
	lienzo.rotate(-Math.PI/180 * 45);
	lienzo.fillText('PRUEBA7', 170, 50);

	lienzo.translate(90, 70);
	lienzo.rotate(-Math.PI/180 * 90);
	lienzo.fillText('PRUEBA8', 0, 300);

	lienzo.translate(-510, -200);
	lienzo.scale(4, 2);
	lienzo.fillText('PRUEBA9', 50, 300);
}

//cuando se carga la página llama a la función iniciar
window.addEventListener("load", iniciar, false)