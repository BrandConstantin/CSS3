function iniciar(){

	var elemento=document.getElementById('lienzo');
	lienzo=elemento.getContext('2d');

    //dibujar un circulo
	//lienzo.beginPath();
	//-10 left y -50 top donde aparecera la bola
	//lienzo.arc(-10, -50 , 80, 0, Math.PI * 2, true);
	//lienzo.fill();


	//mover el circulo
	//se mueve un pixel por cada intervalo
	var invervalo = setInterval(mover, 1);
	//empieza de forma aleatoria, es para cambiar de posición sino simpre caera en el
	//mismo sitio
	var leftInicio = Math.floor((Math.random() * 160) + 20);
	var topInicio = Math.floor((Math.random() * 160) + 20);

	//asignando las posiciones iniciales de donde se inicia
	var left = leftInicio;
	var top = topInicio;
	var subiendo = false ;
	var izquierda = false;
 
	function mover(){
		//0 left y 0 top hasta donde eliminara los pixeles pintados por la bola
		//1200 width y 700 height el tamaño del lienzo
		lienzo.clearRect(0, 0, 1200, 700); 
		lienzo.beginPath();
		//left y top del circulo
		//50 el radio del circulo
		//longitud del ciculo no dibujada, 0 el circulo se dibujara completamente
		//true significa que el circulo se dibujara de arriba hacia abajo, false al reves
		lienzo.arc(left, top, 65, 0, Math.PI * 2);
		lienzo.fill();

		//baja
		if (!subiendo){ 
			if (top < 640){
				top += 1;
			}else{
			document.getElementById('burbuja').play();
			subiendo = true;
			}
		}
		
		//Si sube
		if (subiendo){
			if (top > 60){
				top -= 1;
			}else{
			document.getElementById('burbuja').play();
			subiendo = false;
			}
		}
		
		//ir a la derecha
		if (!izquierda){ 
			if (left < 1150){
				left += 1;
			}else{
			document.getElementById('burbuja').play();
			izquierda = true;
			}
		}
		
		//Si va a la izquierda
		if (izquierda){
			if (left > 60){
				left -= 1;
			}else{
			document.getElementById('burbuja').play();
			izquierda = false;
			}
		}	
	 
	}
} window.addEventListener("load", iniciar, false);