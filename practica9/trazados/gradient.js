function iniciar() {
    var elemento = document.getElementById('lienzo');

    lienzo = elemento.getContext('2d');
    lienzo.strokeRect(0, 0, elemento.width, elemento.height);

	//200 left de donde empieza el green
    var grd = lienzo.createLinearGradient(200,150,120,190);
    grd.addColorStop(0,"black");
    grd.addColorStop(1,"green");

    lienzo.fillStyle=grd;
	//120 left y 120 top de donde empieza el black
	//200 width y 200 height del black
    lienzo.fillRect(120,120,200,200);

    var grd = lienzo.createRadialGradient(150,110,5,140,160,100);
    grd.addColorStop(0,"red");
    grd.addColorStop(1,"blue");

    lienzo.fillStyle = grd;
    lienzo.fillRect(100, 100, 200, 200);
}

//cuando se carga la página llama a la función iniciar
window.addEventListener("load", iniciar, false)