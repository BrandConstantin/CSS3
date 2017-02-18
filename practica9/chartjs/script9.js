var LineChart = {
    labels: ["Elem1", "Elem2", "Elem3", "Elem4", "Elem5"],

    datasets: [{
        fillColor: "rgba(255,249,19,0.9)",
        strokeColor: "rgba(255,0,0,1)",
        pointColor: "rgba(0,0,220,1)",
        pointStrokeColor: "#fff",
        data: [30, 10, 50, 20, 90]
    }, {
        fillColor: "rgba(252,147,65,0.5)",
        strokeColor: "rgba(255,255,255,1)",
        pointColor: "rgba(173,173,173,1)",
        pointStrokeColor: "#fff",
        data: [28, 68, 40, 19, 96]
    }]
}

var elemento = document.getElementById('canvas');

lienzo = elemento.getContext('2d');

var Linea = new Chart(lienzo).Line(LineChart, { scaleFontSize: 13, scaleFontColor: "#ffa45e" });

//con click
canvas.onclick = function(evt) {
	//cambia el valor del datasets 0, es decir elemento 1 / Elem1
	//el valor lo cambia de 30 establecido al principio a 15
    //el valor cambia una sola vez
    Linea.datasets[0].points[0].value = 15;
	//actualiza los datos
    Linea.update();
};