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

canvas.onclick = function(evt) {
    var activePoints = Linea.getPointsAtEvent(evt);

    console.log(activePoints);
    console.log(activePoints[1].value);
};