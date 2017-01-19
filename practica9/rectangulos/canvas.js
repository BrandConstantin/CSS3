function iniciar(){
	var elemento = document.getElementById('lienzo');

	lienzo = elemento.getContext('2d');
	lienzo.strokeRect(0, 0, elemento.width, elemento.height);

	//fillRect un rectangulo relleno de color
	//strokeRect un rectangulo vacio
	//clearRect borrar pixeles a una area especifica en el lienzo

	lienzo.strokeRect(100, 100, 120, 120);
	lienzo.fillRect(110, 110, 100, 100);
	lienzo.clearRect(120, 120, 80, 80);

	//strokeStyle color del contorno
	//fillStyle color del interior de la figula
	//globalAlpha define transparencia

	lienzo.strokeStyle = 'darkgreen';
	lienzo.fillStyle = 'lightblue';
	lienzo.globalAlpha = 0.3;
	lienzo.strokeRect(100, 100, 120, 120);
	lienzo.fillRect(110, 110, 100, 100);

	//gradiente
	//createLinearGradient(0, 0, 100, 100);
	//createRadialGradient(0, 0, 50, 10, 10, 100);
	//gradiente.addColorStop(0.25, '#000');
}

//cuando se carga la página llama a la función iniciar
window.addEventListener("load", iniciar, false)