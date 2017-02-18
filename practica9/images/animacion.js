function iniciar(){
	var elemento = document.getElementById('lienzo');

	lienzo = elemento.getContext('2d');
	window.addEventListener('mousemove', animacion, false);
}

function animacion(e){
	lienzo.clearRect(0, 0, 300, 300);

	var xraton = e.clientX; 
	var yraton = e.clientY;
	
	//el centro donde apareceran los ojos
	var xcentro = 220;
	var ycentro = 150;

	var angulo = Math.atan2(xraton - xcentro, yraton - ycentro);
	
	//alrededor de los 30px es por donde daran la vuelta los ojos
	var x = xcentro + Math.round(Math.sin(angulo) * 10);
	var y = ycentro + Math.round(Math.cos(angulo) * 10);

	lienzo.beginPath();
	//el tamaño del globulo del ojo
	lienzo.arc(xcentro, ycentro, 20, 0, Math.PI * 2, false);
	lienzo.moveTo(xcentro + 70, 150);
	//el tamaño del segundo globulo y la distancia donde aparece
	lienzo.arc(xcentro + 50, 150, 20, 0, Math.PI * 2, false);
	lienzo.stroke();

	lienzo.beginPath();
	lienzo.moveTo(x + 10, y);
	lienzo.arc(x, y, 10, 0, Math.PI * 2, false);
	lienzo.moveTo(x + 60, y);
	lienzo.arc(x + 50, y, 10, 0, Math.PI * 2, false);
	lienzo.fill();
}window.addEventListener("load", iniciar, false)