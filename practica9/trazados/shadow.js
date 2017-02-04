function iniciar() {
    var elemento = document.getElementById('lienzo');

    lienzo = elemento.getContext('2d');
    lienzo.strokeRect(0, 0, elemento.width, elemento.height);

    lienzo.shadowBlur=10;
    lienzo.shadowOffsetX=20;
    lienzo.shadowColor="black";
    lienzo.fillStyle="red";
    lienzo.fillRect(20,20,100,80);

    lienzo.shadowBlur=10;
    lienzo.shadowOffsetY=20;
    lienzo.shadowColor="black";
    lienzo.fillStyle="red";
    lienzo.fillRect(120,120,100,80);
}

//cuando se carga la página llama a la función iniciar
window.addEventListener("load", iniciar, false)