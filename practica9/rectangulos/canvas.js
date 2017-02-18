function iniciar(){
	var elemento = document.getElementById('lienzo');

	lienzo = elemento.getContext('2d');
	lienzo.strokeRect(0, 0, elemento.width, elemento.height);
	
	//strokeRect un rectangulo vacio
	//10 left y 50 top
	//120 width y 120 height
	lienzo.strokeRect(10, 50, 120, 120);
	//fillRect un rectangulo relleno de color
	lienzo.fillRect(130, 50, 100, 100);
	//clearRect borrar pixeles a una area especifica en el lienzo
	lienzo.clearRect(170, 90, 20, 20);

	//strokeStyle color del contorno
	lienzo.strokeStyle = 'black';
	//fillStyle color del interior de la figura
	lienzo.fillStyle = 'lightblue';
	//globalAlpha define transparencia
	lienzo.globalAlpha = 0.6;
	lienzo.fillRect(230, 50, 100, 100);

	//gradiente
	//createLinearGradient(170, 50, 100, 100);
	//createRadialGradient(110, 110, 50, 10, 10, 100);
	//gradiente.addColorStop(0.25, '#000');
}

//cuando se carga la página llama a la función iniciar
window.addEventListener("load", iniciar, false)