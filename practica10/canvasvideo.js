function iniciar(){
	var elemento = document.getElementById('lienzo');
	lienzo = elemento.getContext('2d');
    //dibujar un circulo
	lienzo.beginPath();
	lienzo.arc(50,50,35,0,Math.PI*2, false);
	lienzo.fill();
} window.addEventListener("load", iniciar, false);

//función mover
function mover(){
        //mover el circulo
        //se mueve un pixel por cada intervalo
        var invervalo = setInterval(mover, 1);
        //empieza de forma aleatoria, es para cambiar de posición sino simpre caera en el
        //mismo sitio
        var ejeXinicio = Math.floor((Math.random() * 160) + 20);
        var ejeYinicio = Math.floor((Math.random() * 160) + 20);
        var ejeX = ejeXinicio;
        var ejeY = ejeYinicio;
        var subiendo = false ;
        var izquierda = false;

        lienzo.clearRect(0,0,1200,600); 
        lienzo.beginPath();
        lienzo.arc(ejeX,ejeY,40,0,Math.PI*2);
        lienzo.stroke();
		if (!subiendo){ //Si baja
			if (ejeY < 550){
				ejeY+=1;
			}else{
			document.getElementById('burbuja').play();
			subiendo = true;
			}
		}
/*		
		if (subiendo){ //Si sube
			if (ejeY > 45){
				ejeY-=1;
			}else{
			document.getElementById('burbuja').play();
			subiendo = false;
			}
		}
		
		if (!izquierda){ //Si va a la derecha
			if (ejeX < 1150){
				ejeX+=1;
			}else{
			document.getElementById('burbuja').play();
			izquierda = true;
			}
		}
		
		if (izquierda){ //Si va a la izquierda
			if (ejeX > 45){
				ejeX-=1;
			}else{
			document.getElementById('burbuja').play();
			izquierda = false;
			}
		}	 */
}