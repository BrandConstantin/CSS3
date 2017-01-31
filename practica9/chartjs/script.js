var LineChart = {
    labels: ['Elem1', 'Elem2', 'Elem3', 'Elem4', 'Elem5'],
    datasets: [{
        data: [30, 10, 50, 20, 90]
    }]
}

var elemento = document.getElementById('canvas');

lienzo = elemento.getContext('2d');

new Chart(lienzo).Line(LineChart);