function iniciar() {
    var elemento = document.getElementById('lienzo');

    lienzo = elemento.getContext('2d');
    lienzo.strokeRect(0, 0, elemento.width, elemento.height);

    lienzo.beginPath();
	//las puntas de las lineas (los puntos) que sean redondos
    lienzo.lineCap = "round";
	//las puntas de las lineas(los puntos) que se unen que sean redondos
    lienzo.lineJoin="round";
		//el cuadrado
	//width de la linea del cuadrado
    lienzo.lineWidth = 30;
	//120 left y 340 top donde aparece el cuadrado
	//100 width y 100 height del cuadrado
    lienzo.strokeRect(120,40,100,100);
	lienzo.closePath();
	
	lienzo.beginPath();
	lienzo.lineCap = 'round';
	lienzo.lineWidth = 10;
	//lineJoin une las dos lineas de forma afilada
    lienzo.lineJoin = "miter";
	//la longitud de del "alfiler"
    lienzo.miterLimit = 15;
	
    lienzo.moveTo(220,220);
    lienzo.lineTo(600,270);
    lienzo.lineTo(220,320);
    lienzo.stroke();
	
    lienzo.moveTo(20,20);
    lienzo.lineTo(50,27);
    lienzo.lineTo(20,34);
    lienzo.stroke();
}

//cuando se carga la página llama a la función iniciar
window.addEventListener("load", iniciar, false)