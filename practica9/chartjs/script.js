var LineChart = {
    //es el nombre de los elementos/puntos en la estadistica
    labels: ['Elem1', 'Elem2', 'Elem3', 'Elem4', 'Elem5'],
    datasets: [{
        //hasta donde puede llegar los elementos
        data: [30, 10, 50, 20, 90]
    }]
}

//el id del canvas
var elemento = document.getElementById('canvas');

lienzo = elemento.getContext('2d');

//lamando a Line, que traza lineas
new Chart(lienzo).Line(LineChart);