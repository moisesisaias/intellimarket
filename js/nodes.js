var nodes = [];
var nRadio = 8;
var sAngle = 0;
var eAngle = 2*Math.PI;
var nColor = '#26FF85';
var status = "on";
/* Cicle or arc
- x					The x-coordinate of the center of the circle	Play it »
- y					The y-coordinate of the center of the circle	Play it »
- r					The radius of the circle	Play it »
- sAngle			The starting angle, in radians (0 is at the 3 o'clock position of the arc's circle)	Play it »
- eAngle			The ending angle, in radians	Play it »
- counterclockwise	Optional. Specifies whether the drawing should be counterclockwise or clockwise. 
.					False is default, and indicates clockwise, while true indicates counter-clockwise.

	ctx.beginPath();
	ctx.arc(95,50,40,0,2*Math.PI);
	ctx.stroke();
*/

// Primer columna
nodes.push({"id":"f1c1", "x":65, "y":60, "r":nRadio, "sA":sAngle, "eA":eAngle, "color":nColor, "status":status});
nodes.push({"id":"f2c1", "x":65, "y":100, "r":nRadio, "sA":sAngle, "eA":eAngle, "color":nColor, "status":status});
nodes.push({"id":"f3c1", "x":65, "y":170, "r":nRadio, "sA":sAngle, "eA":eAngle, "color":nColor, "status":status});
nodes.push({"id":"f4c1", "x":65, "y":230, "r":nRadio, "sA":sAngle, "eA":eAngle, "color":nColor, "status":status});
nodes.push({"id":"f5c1", "x":65, "y":300, "r":nRadio, "sA":sAngle, "eA":eAngle, "color":nColor, "status":status});

// Segunda columna
nodes.push({"id":"f1c2", "x":150, "y":60, "r":nRadio, "sA":sAngle, "eA":eAngle, "color":nColor, "status":status});
nodes.push({"id":"f2c2", "x":150, "y":100, "r":nRadio, "sA":sAngle, "eA":eAngle, "color":nColor, "status":status});
nodes.push({"id":"f3c2", "x":150, "y":170, "r":nRadio, "sA":sAngle, "eA":eAngle, "color":nColor, "status":status});
nodes.push({"id":"f4c2", "x":150, "y":230, "r":nRadio, "sA":sAngle, "eA":eAngle, "color":nColor, "status":status});
nodes.push({"id":"f5c2", "x":150, "y":300, "r":nRadio, "sA":sAngle, "eA":eAngle, "color":nColor, "status":status});

// Tercera columna
nodes.push({"id":"f1c3", "x":225, "y":60, "r":nRadio, "sA":sAngle, "eA":eAngle, "color":nColor, "status":status});
nodes.push({"id":"f2c3", "x":225, "y":100, "r":nRadio, "sA":sAngle, "eA":eAngle, "color":nColor, "status":status});
nodes.push({"id":"f3c3", "x":225, "y":170, "r":nRadio, "sA":sAngle, "eA":eAngle, "color":nColor, "status":status});
nodes.push({"id":"f4c3", "x":225, "y":230, "r":nRadio, "sA":sAngle, "eA":eAngle, "color":nColor, "status":status});
nodes.push({"id":"f5c3", "x":225, "y":300, "r":nRadio, "sA":sAngle, "eA":eAngle, "color":nColor, "status":status});

// Cuarta columna
nodes.push({"id":"f1c4", "x":300, "y":60, "r":nRadio, "sA":sAngle, "eA":eAngle, "color":nColor, "status":status});
nodes.push({"id":"f2c4", "x":300, "y":100, "r":nRadio, "sA":sAngle, "eA":eAngle, "color":nColor, "status":status});
nodes.push({"id":"f3c4", "x":300, "y":170, "r":nRadio, "sA":sAngle, "eA":eAngle, "color":nColor, "status":status});
nodes.push({"id":"f4c4", "x":300, "y":230, "r":nRadio, "sA":sAngle, "eA":eAngle, "color":nColor, "status":status});
nodes.push({"id":"f5c4", "x":300, "y":300, "r":nRadio, "sA":sAngle, "eA":eAngle, "color":nColor, "status":status});

// Quinta columna
nodes.push({"id":"f1c5", "x":375, "y":60, "r":nRadio, "sA":sAngle, "eA":eAngle,  "color":nColor, "status":status});
nodes.push({"id":"f2c5", "x":375, "y":100, "r":nRadio, "sA":sAngle, "eA":eAngle, "color":nColor, "status":status});
nodes.push({"id":"f3c5", "x":375, "y":170, "r":nRadio, "sA":sAngle, "eA":eAngle, "color":nColor, "status":status});
nodes.push({"id":"f4c5", "x":375, "y":230, "r":nRadio, "sA":sAngle, "eA":eAngle, "color":nColor, "status":status});
nodes.push({"id":"f5c5", "x":375, "y":300, "r":nRadio, "sA":sAngle, "eA":eAngle, "color":nColor, "status":status});

// Sexta columna
nodes.push({"id":"f1c6", "x":450, "y":60, "r":nRadio, "sA":sAngle, "eA":eAngle, "color":nColor, "status":status});
nodes.push({"id":"f2c6", "x":450, "y":100, "r":nRadio, "sA":sAngle, "eA":eAngle, "color":nColor, "status":status});
nodes.push({"id":"f3c6", "x":450, "y":170, "r":nRadio, "sA":sAngle, "eA":eAngle, "color":nColor, "status":status});
nodes.push({"id":"f4c6", "x":450, "y":230, "r":nRadio, "sA":sAngle, "eA":eAngle, "color":nColor, "status":status});
nodes.push({"id":"f5c6", "x":450, "y":300, "r":nRadio, "sA":sAngle, "eA":eAngle, "color":nColor, "status":status});

// Séptima columna
nodes.push({"id":"f1c7", "x":525, "y":60, "r":nRadio, "sA":sAngle, "eA":eAngle, "color":nColor, "status":status});
nodes.push({"id":"f2c7", "x":525, "y":100, "r":nRadio, "sA":sAngle, "eA":eAngle, "color":nColor, "status":status});
nodes.push({"id":"f3c7", "x":525, "y":170, "r":nRadio, "sA":sAngle, "eA":eAngle, "color":nColor, "status":status});
nodes.push({"id":"f4c7", "x":525, "y":230, "r":nRadio, "sA":sAngle, "eA":eAngle, "color":nColor, "status":status});
nodes.push({"id":"f5c7", "x":525, "y":300, "r":nRadio, "sA":sAngle, "eA":eAngle, "color":nColor, "status":status});

// Octava columna
nodes.push({"id":"f1c8", "x":600, "y":60, "r":nRadio, "sA":sAngle, "eA":eAngle, "color":nColor, "status":status});
nodes.push({"id":"f2c8", "x":600, "y":100, "r":nRadio, "sA":sAngle, "eA":eAngle, "color":nColor, "status":status});
nodes.push({"id":"f3c8", "x":600, "y":170, "r":nRadio, "sA":sAngle, "eA":eAngle, "color":nColor, "status":status});
nodes.push({"id":"f4c8", "x":600, "y":230, "r":nRadio, "sA":sAngle, "eA":eAngle, "color":nColor, "status":status});
nodes.push({"id":"f5c8", "x":600, "y":300, "r":nRadio, "sA":sAngle, "eA":eAngle, "color":nColor, "status":status});


// Linea de cajeros
nodes.push({"x":65, "y":375, "r":nRadio, "sA":sAngle, "eA":eAngle, "color":'0f0', "status":status});
nodes.push({"x":150, "y":375, "r":nRadio, "sA":sAngle, "eA":eAngle, "color":'0f0', "status":status});
nodes.push({"x":225, "y":375, "r":nRadio, "sA":sAngle, "eA":eAngle, "color":'0f0', "status":status});
nodes.push({"x":300, "y":375, "r":nRadio, "sA":sAngle, "eA":eAngle, "color":'0f0', "status":status});
nodes.push({"x":375, "y":375, "r":nRadio, "sA":sAngle, "eA":eAngle, "color":'0f0', "status":status});
nodes.push({"x":450, "y":375, "r":nRadio, "sA":sAngle, "eA":eAngle, "color":'0f0', "status":status});
nodes.push({"x":525, "y":375, "r":nRadio, "sA":sAngle, "eA":eAngle, "color":'0f0', "status":status});
//nodes.push({"x":600, "y":375, "r":nRadio, "sA":sAngle, "eA":eAngle, "color":'0f0'}); aQUÍ SE INICIA, TAL VEZ MÁS ATRAS

/*
*/

function drawOnNodes(pH, pW) {
	var cv = document.getElementById("supermarket");
	var cvx = cv.getContext("2d");

	for (var i = 0; i < nodes.length; i++) {
		var myNode = nodes[i];
		if(myNode.status == "on")
		{
			cvx.beginPath();
			cvx.fillStyle  = myNode.color;

		
			cvx.arc(myNode.x * pW, myNode.y * pH, myNode.r * ((pH+pW)/2), myNode.sA, myNode.eA);
			cvx.fill();
			cvx.strokeStyle = myNode.color;
			cvx.stroke();
		}
		//console.log(myNode.r);
	}
};

function drawNodes(pH, pW) {
	var cv = document.getElementById("supermarket");
	var cvx = cv.getContext("2d");

	for (var i = 0; i < nodes.length; i++) {
		var myNode = nodes[i];
		cvx.beginPath();
		cvx.fillStyle  = myNode.color;

		
		cvx.arc(myNode.x * pW, myNode.y * pH, myNode.r * ((pH+pW)/2), myNode.sA, myNode.eA);
		cvx.fill();
		cvx.strokeStyle = myNode.color;
		cvx.stroke();

		//console.log(myNode.r);
	}
};

function drawNode(i, pH, pW) {
	var cv = document.getElementById("supermarket");
	var cvx = cv.getContext("2d");
	
	var myNode = nodes[i];
	cvx.beginPath();
	cvx.fillStyle  = myNode.color;

	cvx.arc(myNode.x * pW, myNode.y * pH, myNode.r * ((pH+pW)/2), myNode.sA, myNode.eA);
	cvx.fill();
	cvx.strokeStyle = myNode.color;
	cvx.stroke();

	//console.log(myNode.r);
};