var nodes = [];
var nRadio = 8;
var sAngle = 0;
var eAngle = 2*Math.PI;
var nColor = '#ff1a1a';
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
nodes.push({x:65, y:60, r:nRadio, sA:sAngle, eA:eAngle, color:nColor});
nodes.push({x:65, y:100, r:nRadio, sA:sAngle, eA:eAngle, color:nColor});
nodes.push({x:65, y:170, r:nRadio, sA:sAngle, eA:eAngle, color:nColor});
nodes.push({x:65, y:230, r:nRadio, sA:sAngle, eA:eAngle, color:nColor});
nodes.push({x:65, y:300, r:nRadio, sA:sAngle, eA:eAngle, color:nColor});

// Segunda columna
nodes.push({x:150, y:60, r:nRadio, sA:sAngle, eA:eAngle, color:nColor});
nodes.push({x:150, y:100, r:nRadio, sA:sAngle, eA:eAngle, color:nColor});
nodes.push({x:150, y:170, r:nRadio, sA:sAngle, eA:eAngle, color:nColor});
nodes.push({x:150, y:230, r:nRadio, sA:sAngle, eA:eAngle, color:nColor});
nodes.push({x:150, y:300, r:nRadio, sA:sAngle, eA:eAngle, color:nColor});

// Tercera columna
nodes.push({x:225, y:60, r:nRadio, sA:sAngle, eA:eAngle, color:nColor});
nodes.push({x:225, y:100, r:nRadio, sA:sAngle, eA:eAngle, color:nColor});
nodes.push({x:225, y:170, r:nRadio, sA:sAngle, eA:eAngle, color:nColor});
nodes.push({x:225, y:230, r:nRadio, sA:sAngle, eA:eAngle, color:nColor});
nodes.push({x:225, y:300, r:nRadio, sA:sAngle, eA:eAngle, color:nColor});

// Cuarta columna
nodes.push({x:300, y:60, r:nRadio, sA:sAngle, eA:eAngle, color:nColor});
nodes.push({x:300, y:100, r:nRadio, sA:sAngle, eA:eAngle, color:nColor});
nodes.push({x:300, y:170, r:nRadio, sA:sAngle, eA:eAngle, color:nColor});
nodes.push({x:300, y:230, r:nRadio, sA:sAngle, eA:eAngle, color:nColor});
nodes.push({x:300, y:300, r:nRadio, sA:sAngle, eA:eAngle, color:nColor});

// Quinta columna
nodes.push({x:375, y:60, r:nRadio, sA:sAngle, eA:eAngle,  color:nColor});
nodes.push({x:375, y:100, r:nRadio, sA:sAngle, eA:eAngle, color:nColor});
nodes.push({x:375, y:170, r:nRadio, sA:sAngle, eA:eAngle, color:nColor});
nodes.push({x:375, y:230, r:nRadio, sA:sAngle, eA:eAngle, color:nColor});
nodes.push({x:375, y:300, r:nRadio, sA:sAngle, eA:eAngle, color:nColor});

// Sexta columna
nodes.push({x:450, y:60, r:nRadio, sA:sAngle, eA:eAngle, color:nColor});
nodes.push({x:450, y:100, r:nRadio, sA:sAngle, eA:eAngle, color:nColor});
nodes.push({x:450, y:170, r:nRadio, sA:sAngle, eA:eAngle, color:nColor});
nodes.push({x:450, y:230, r:nRadio, sA:sAngle, eA:eAngle, color:nColor});
nodes.push({x:450, y:300, r:nRadio, sA:sAngle, eA:eAngle, color:nColor});

// Séptima columna
nodes.push({x:525, y:60, r:nRadio, sA:sAngle, eA:eAngle, color:nColor});
nodes.push({x:525, y:100, r:nRadio, sA:sAngle, eA:eAngle, color:nColor});
nodes.push({x:525, y:170, r:nRadio, sA:sAngle, eA:eAngle, color:nColor});
nodes.push({x:525, y:230, r:nRadio, sA:sAngle, eA:eAngle, color:nColor});
nodes.push({x:525, y:300, r:nRadio, sA:sAngle, eA:eAngle, color:nColor});

// Octava columna
nodes.push({x:600, y:60, r:nRadio, sA:sAngle, eA:eAngle, color:nColor});
nodes.push({x:600, y:100, r:nRadio, sA:sAngle, eA:eAngle, color:nColor});
nodes.push({x:600, y:170, r:nRadio, sA:sAngle, eA:eAngle, color:nColor});
nodes.push({x:600, y:230, r:nRadio, sA:sAngle, eA:eAngle, color:nColor});
nodes.push({x:600, y:300, r:nRadio, sA:sAngle, eA:eAngle, color:nColor});


// Linea de cajeros
nodes.push({x:65, y:375, r:nRadio, sA:sAngle, eA:eAngle, color:'0f0'});
nodes.push({x:150, y:375, r:nRadio, sA:sAngle, eA:eAngle, color:'0f0'});
nodes.push({x:225, y:375, r:nRadio, sA:sAngle, eA:eAngle, color:'0f0'});
nodes.push({x:300, y:375, r:nRadio, sA:sAngle, eA:eAngle, color:'0f0'});
nodes.push({x:375, y:375, r:nRadio, sA:sAngle, eA:eAngle, color:'0f0'});
nodes.push({x:450, y:375, r:nRadio, sA:sAngle, eA:eAngle, color:'0f0'});
nodes.push({x:525, y:375, r:nRadio, sA:sAngle, eA:eAngle, color:'0f0'});
//nodes.push({x:600, y:375, r:nRadio, sA:sAngle, eA:eAngle, color:'0f0'}); aQUÍ SE INICIA, TAL VEZ MÁS ATRAS

/*
*/

function showNodes(pH, pW) {
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