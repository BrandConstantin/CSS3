var LineChart = {
    //el nombre de los elementos cuando se pasa con el raton por encima
    labels: ["Elem1", "Elem2", "Elem3", "Elem4", "Elem5"],

    datasets: [{
        //el color de relleno de lo que es marcado
        fillColor: "rgba(255,249,19,0.9)",
        //el color del borde de lo que es marcado
        strokeColor: "rgba(255,0,0,1)",
        //el color de los puntos
        pointColor: "rgba(0,0,220,1)",
        //el color de los bordes de los puntos
        pointStrokeColor: "#fff",
        //los puntos hasta donde llegan, el valor de los elementos
        data: [30, 10, 50, 20, 90]
    }, {
        //una segunda estadistica...
        fillColor: "rgba(252,147,65,0.5)",
        strokeColor: "rgba(255,255,255,1)",
        pointColor: "rgba(173,173,173,1)",
        pointStrokeColor: "#fff",
        data: [28, 68, 40, 19, 96]
    }]
}

var elemento = document.getElementById('canvas');

lienzo = elemento.getContext('2d');

//lamando a Line, que traza lineas
new Chart(lienzo).Line(LineChart);