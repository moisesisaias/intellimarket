
var objects = [];
var pH = 500;//1+0.10; // original:500 - actual:550
var pW = 650;// 1+0.3846; // original:650 - actual:900

objects.push({x:0,   y:0,  width:650, heigth:50,   color:'#00f'});

objects.push({x:0,   y:50,  width:25, heigth:300,  color:'#00f'});
objects.push({x:625, y:50,  width:25, heigth:300,  color:'#00f'});

objects.push({x:100, y:100,	width:25, heigth:200, color:'#0f0'});
objects.push({x:175, y:100, width:25, heigth:200, color:'#0f0'});
objects.push({x:250, y:100, width:25, heigth:200, color:'#0f0'});
objects.push({x:325, y:100, width:25, heigth:200, color:'#0f0'});
objects.push({x:400, y:100,	width:25, heigth:200, color:'#0f0'});
objects.push({x:475, y:100,	width:25, heigth:200, color:'#0f0'});
objects.push({x:550, y:100, width:25, heigth:75,  color:'#0f0'});
objects.push({x:550, y:225, width:25, heigth:75,  color:'#0f0'});





window.onload = function() {

	var cv = document.getElementById("supermarket");

	var cvx = cv.getContext("2d");
	cvx.save();

	/*
	cvx.fillStyle = "#FF0000";
	cvx.moveTo(250,250);
	cvx.lineTo(270,270);
	cvx.stroke();*/

	
	pH = cv.height / pH; //esto ajusta los elementos al tamaño actual de canvas.
	pW = cv.width / pW; // esto ajusta los elementos al tamaño actual el canvas.
	
	for (var i = 0; i< objects.length; i++) {
		//console.log(cv.width);
		cvx.fillStyle = objects[i].color;
		cvx.fillRect(objects[i].x * pW, objects[i].y * pH, objects[i].width * pW, objects[i].heigth * pH);
	}
	
	drawOnNodes(pH, pW);
};

