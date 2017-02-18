var pieData = [{
    //El value indica el tamaño de los trozos
    value: 100,
    color: "#F7464A",
    highlight: "#FF5A5E",
    label: "Red"
}, {
    value: 50,
    color: "#46BFBD",
    highlight: "#5AD3D1",
    label: "Green"
}, {
    value: 100,
    color: "#FDB45C",
    highlight: "#FFC870",
    label: "Yellow"
}, {
    value: 50,
    color: "#949FB1",
    highlight: "#A8B3C5",
    label: "Grey"
}, {
    value: 100,
    color: "#4D5360",
    highlight: "#616774",
    label: "Dark Grey"
}];

//llama a Pie, que son trozos que juntos forman un circulo
var Pie = new Chart(document.getElementById("canvas").getContext("2d")).Pie(pieData, { pointLabelFontSize: 16, pointLabelFontColor: "#000" });