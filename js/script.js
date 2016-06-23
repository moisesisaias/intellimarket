
var objects = [];
objects.push({
	x:0, y:50,
	width:50, heigth:250,
	color: '#00f'
});

objects.push({
	x:100, y:100,
	width:50, heigth:250,
	color: '#0f0'
});

objects.push({
	x:200, y:100,
	width:50, heigth:250,
	color: '#0f0'
});

objects.push({
	x:300, y:100,
	width:50, heigth:250,
	color: '#0f0'
});

objects.push({
	x:400, y:100,
	width:50, heigth:250,
	color: '#0f0'
});

objects.push({
	x:500, y:100,
	width:50, heigth:250,
	color: '#0f0'
});

objects.push({
	x:600, y:50,
	width:50, heigth:250,
	color: '#00f'
});

objects.push({
	x:0, y:0,
	width:700, heigth:50,
	color: '#00f'
});


window.onload = function() {
	var cv = document.getElementById("canv");
	var cvx = cv.getContext("2d");

	/*
	cvx.fillStyle = "#FF0000";
	cvx.moveTo(250,250);
	cvx.lineTo(270,270);

	cvx.stroke();*/
	for (var i = 0; i< objects.length; i++) {
		cvx.fillStyle = objects[i].color;
		cvx.fillRect(objects[i].x, objects[i].y, objects[i].width, objects[i].heigth);

	}
};

