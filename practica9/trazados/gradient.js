function iniciar() {
    var elemento = document.getElementById('lienzo');

    lienzo = elemento.getContext('2d');
    lienzo.strokeRect(0, 0, elemento.width, elemento.height);

    var grd=lienzo.createLinearGradient(0,0,170,0);
    grd.addColorStop(0,"black");
    grd.addColorStop(1,"white");

    lienzo.fillStyle=grd;
    lienzo.fillRect(20,20,150,100);

    var grd=lienzo.createRadialGradient(75,50,5,90,60,100);
    grd.addColorStop(0,"red");
    grd.addColorStop(1,"white");

    // Fill with gradient
    lienzo.fillStyle=grd;
    lienzo.fillRect(10,10,150,100);
}

//cuando se carga la página llama a la función iniciar
window.addEventListener("load", iniciar, false)