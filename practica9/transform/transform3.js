function iniciar(){
	var elemento = document.getElementById('lienzo');

	lienzo = elemento.getContext('2d');
	
	lienzo.save();
	lienzo.translate(40, 70);
	lienzo.font = "bold 24px verdana, sans-serif";
	lienzo.fillText('PRUEBA1', 20, 20);
	lienzo.restore();
	lienzo.fillText('PRUEBA2', 40, 40);

}

//cuando se carga la página llama a la función iniciar
window.addEventListener("load", iniciar, false)