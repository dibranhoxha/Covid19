window.onload = function () {

var chart = new CanvasJS.Chart("chartContainer1", {
	animationEnabled: true,
	theme: "light1", // "light1", "light2", "dark1", "dark2"
	title: {
		text: ""
	},
	axisY: {
		title: "Numri i Rasteve",
		includeZero: false
	},
	axisX: {
		title: "Raste te shënuara"
	},
	data: [{
		type: "column",
		yValueFormatString: "##0.0#",
		dataPoints: [
			{ label: "Te Infektuar", y: 630 },	
			{ label: "Te Sheruar", y: 138 },	
			{ label: "Te Vdekur", y: 18 }
		]
	}]
});
chart.render();


var chart2 = new CanvasJS.Chart("chartContainer2", {
	theme: "light2", // "light1", "light2", "dark1", "dark2"
	exportEnabled: false,
	animationEnabled: true,
	title: {
		text: "Gjendja ne Komuna"
	},
	data: [{
		type: "pie",
		startAngle: 0,
		toolTipContent: "<b>{label}</b>: {y}",
		showInLegend: "true",
		legendText: "{label}",
		indexLabelFontSize: 16,
		dataPoints: [
			{ y: 93, label: "Ferizaj"  },	
			{ y: 69, label: "Malishevë"  },	
			{ y: 64, label: "Prishtinë"  },
			{ y: 49, label: "Viti"  },	
			{ y: 37, label: "Prizren"  },
			{ y: 34, label: "Kamenicë"  },
			{ y: 33, label: "Therandë"  },
			{ y: 33, label: "Mitrovica e Veriut"  },
			{ y: 29, label: "Gjilan"  },	
			{ y: 24, label: "Vushtrri"  },
			{ y: 21, label: "Pejë"  },	
			{ y: 20, label: "Zubin Potok"  },
			{ y: 19, label: "Zveçan"  },	
			{ y: 17, label: "Shtime"  },
			{ y: 16, label: "Gjakovë"  },
			{ y: 15, label: "Lipjan"  },
			{ y: 11, label: "Albanik"  },
			{ y: 9, label: "Besianë"  },	
			{ y: 7, label: "Hani i Elezit"  },	
			{ y: 6,label: "Skenderaj"  },
			{ y: 6, label: "Istog"  },	
			{ y: 6, label: "Fushe Kosovë"},
			{ y: 5, label: "Klinë"  },
			{ y: 2, label: "Gllogoc"  },
			{ y: 1, label: "Kastriot"  },
			{ y: 1, label: "Rahovec"  },
			{ y: 1, label: "Deçan"  }
		]
	}]
});
chart2.render();


}