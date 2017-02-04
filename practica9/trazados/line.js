function iniciar() {
    var elemento = document.getElementById('lienzo');

    lienzo = elemento.getContext('2d');
    lienzo.strokeRect(0, 0, elemento.width, elemento.height);

    lienzo.beginPath();
    lienzo.lineCap="round";
    lienzo.moveTo(180,180);
    lienzo.lineTo(400,180);
    lienzo.stroke();

    lienzo.beginPath();
    lienzo.lineJoin="round";
    lienzo.moveTo(20,50);
    lienzo.lineTo(100,50);
    lienzo.lineTo(20,100);
    lienzo.stroke();

    lienzo.lineWidth=10;
    lienzo.strokeRect(20,140,80,100);
    
    lienzo.lineWidth=10;
    lienzo.lineJoin="miter";
    lienzo.miterLimit=5;
    lienzo.moveTo(20,20);
    lienzo.lineTo(50,27);
    lienzo.lineTo(20,34);
    lienzo.stroke();
}

//cuando se carga la página llama a la función iniciar
window.addEventListener("load", iniciar, false)