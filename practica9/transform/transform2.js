function iniciar(){
	var elemento = document.getElementById('lienzo');

	lienzo = elemento.getContext('2d');
	
	lienzo.transform(3, 0, 0, 1, 0, 0);
	lienzo.font = "bold 24px verdana, sans-serif";
	lienzo.fillText('PRUEBA1', 20, 20);
	lienzo.transform(1, 0, 0, 10, 0, 0);
	lienzo.font = "bold 24px verdana, sans-serif";
	lienzo.fillText('PRUEBA2', 20, 20);

}

//cuando se carga la página llama a la función iniciar
window.addEventListener("load", iniciar, false)