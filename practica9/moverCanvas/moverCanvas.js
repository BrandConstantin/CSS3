var x = 100;
var y = 100;

function iniciar(){
		var elemento=document.getElementById('lienzo');
		lienzo=elemento.getContext('2d');
		lienzo.fillRect(100, 100, 50, 30);
		window.addEventListener('keydown', animacion, false);
		// Eventos que se pueden utilizar http://www.w3schools.com/jsref/dom_obj_event.asp
		
	}

function animacion(e){
	//	Si la tecla es W 
	if (e.keyCode == 87) {
		lienzo.clearRect(0,0,500,400);
		y = y - 10;
		lienzo.fillRect(x, y, 50, 30);
		}

	//	Si la tecla es S 
	if (e.keyCode == 83) {
		lienzo.clearRect(0,0,500,400);
		y = y + 10;
		lienzo.fillRect(x, y, 50, 30);
	}

	//	Si la tecla es A 
	if (e.keyCode == 65) {
		lienzo.clearRect(0,0,500,400);
		x = x - 10;
		lienzo.fillRect(x, y, 50, 30);
	}
	
	//	Si la tecla es D 
	if (e.keyCode == 68) {
		lienzo.clearRect(0,0,500,400);
		x = x + 10;
		lienzo.fillRect(x, y, 50, 30);
	}

}
	
window.addEventListener("load", iniciar, false); //manejador de Load de Windows