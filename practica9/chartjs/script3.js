var LineChart = {
    labels: ['Elem1', 'Elem2', 'Elem3', 'Elem4', 'Elem5'],
    datasets: [{
        //color
        fillColor: 'rgba(244, 242, 15, 0.8)',
        strokeColor: 'rgba(252, 124, 0, 1)',
        pointColor: 'rgba(0, 0, 135, 1)',
        pointStrokeColor: '#fff',
        data: [30, 10, 50, 20, 100]
    }, {
        fillColor: 'rgba(144, 202, 55, 1)',
        strokeColor: 'rgba(255, 224, 10, 0.5)',
        pointColor: 'rgba(10, 10, 15, 1)',
        pointStrokeColor: '#ff3',
        data: [30, 101, 50, 120, 10]
    }]
}

var elemento = document.getElementById('canvas');

lienzo = elemento.getContext('2d');

//lamando a Bar, que traza barras
//scaleFontSize el tamaño de las letras y números
//scaleFontColor es el color de los números y letras indicativas
new Chart(lienzo).Bar(LineChart, { scaleFontSize: 13, scaleFontColor: "#ffa45e" });