window.onload = function() {
	var cv = document.getElementById("canv");
	var cvx = cv.getContext("2d");

	cvx.fillStyle = "#FF0000";
	cvx.moveTo(250,250);
	cvx.lineTo(270,270);
	
	cvx.stroke();
};


var objects = [];
objects.push({
	x:0, y:0,
	width:100, heigth:200,
	color: '#0f0'
});