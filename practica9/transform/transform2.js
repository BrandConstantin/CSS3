function iniciar(){
	var elemento = document.getElementById('lienzo');

	lienzo = elemento.getContext('2d');
	
	//5 es el width del texto
	//2 para alejar el eje derecho superior del top
	//1 para alejar el eje inferior izquirdo del left
	//1 para escribir normal, 0 para darle la vuelta a las letras
	lienzo.transform(5, 2, 1, 1, 0, 0);
	lienzo.font = "bold 24px verdana, sans-serif";
	//left y top donde aparecera el texto
	lienzo.fillText('Canvas', 30, 50);
	lienzo.transform(1, 0, 0, 10, 0, 0);
	lienzo.font = "bold 24px verdana, sans-serif";
	lienzo.fillText('Canvas', 1, 30);
}

//cuando se carga la página llama a la función iniciar
window.addEventListener("load", iniciar, false)