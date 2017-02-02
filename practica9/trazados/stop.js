function iniciar() {
    var elemento = document.getElementById('lienzo');

    lienzo = elemento.getContext('2d');
    lienzo.strokeRect(0, 0, elemento.width, elemento.height);

    lienzo.beginPath();
    //1 punto
    lienzo.moveTo(100, 100);
    //2 punto
    lienzo.lineTo(150, 100);
    //3 punto
    lienzo.lineTo(200, 150);
    //4 punto
    lienzo.lineTo(200, 250);
    //5 punto
    lienzo.lineTo(150, 300);
    //6 punto
    lienzo.lineTo(100, 300);
    //7 punto
    lienzo.lineTo(50, 250);
    //8 punto
    lienzo.lineTo(50, 150);
    //ultimo punto
    lienzo.closePath();
    lienzo.fillStyle = "#f34";
    lienzo.fill();
    lienzo.stroke();

    //texto
    lienzo.font = "bold 24px verdana, sans-serif";
	lienzo.textAlign = "STOP";
	lienzo.fillStyle = "#fff";
	//lienzo.textBaseline = 'bottom';
	lienzo.fillText("STOP", 90, 200);
}

//cuando se carga la página llama a la función iniciar
window.addEventListener("load", iniciar, false)