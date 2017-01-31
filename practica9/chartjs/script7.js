var doughnutData = [{
    value: 300,
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
    value: 40,
    color: "#949FB1",
    highlight: "#A8B3C5",
    label: "Grey"
}, {
    value: 120,
    color: "#4D5360",
    highlight: "#616774",
    label: "Dark Grey"
}];

var Doughnut = new Chart(document.getElementById("canvas").getContext("2d")).Doughnut(doughnutData, { pointLabelFontSize: 13, pointLabelFontColor: "#ffa45e" });