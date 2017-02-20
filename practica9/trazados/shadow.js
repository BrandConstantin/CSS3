function iniciar() {
    var elemento = document.getElementById('lienzo');

    lienzo = elemento.getContext('2d');
    lienzo.strokeRect(0, 0, elemento.width, elemento.height);

	//shadowBlur es la opacidad del sombreado, en cuando más alto menos opaco será
    lienzo.shadowBlur = 20;
	//shadowOffsetX la sombra alejada left
    lienzo.shadowOffsetX = 40;
	//color sombreado
    lienzo.shadowColor = "black";
    lienzo.fillStyle = "red";
    lienzo.fillRect(20, 20, 100, 100);

    lienzo.shadowBlur = 2;
    lienzo.shadowOffsetY = 30;
    lienzo.shadowColor="black";
    lienzo.fillStyle="red";
    lienzo.fillRect(220, 220, 100, 180);
}

//cuando se carga la página llama a la función iniciar
window.addEventListener("load", iniciar, false)