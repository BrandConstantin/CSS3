        var LineChart = {
			labels: ['A', 'B', 'C', 'D', 'E', 'F'],
			datasets:[{
				fillColor: "rgba(255,249,19,0.7)",
				strokeColor: "rgba(255,0,0,1)",
				pointColor: "rgba(0,0,220,1)",
				pointStrokeColor: "#fff",
				data: [50, 50, 50, 50, 50, 50]
			}, {
				fillColor: "rgba(252,147,65,0.5)",
				strokeColor: "rgba(255,255,255,0.7)",
				pointColor: "rgba(173,173,173,1)",
				pointStrokeColor: "#fff",
				data: [60, 40, 40, 60, 40, 40]
			}]
		}   
		
		//el id del canvas
		var elemento = document.getElementById('canvas');

		lienzo = elemento.getContext('2d');
        
		//lamando a Radar, que traza una "tela de arraña"
		new Chart(lienzo).Radar(LineChart, { scaleFontSize: 23, scaleFontColor: "#000" });