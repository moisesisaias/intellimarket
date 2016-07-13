	var objects; 
	var c;
	var cont;
	var mapita = new Map();

	function setObjects(){

		objects = [
		/*
		{"id":"block1","x":0,"y":0,"height":450,"width":80,"color":'#666'},
		{"id":"block2","x":80,"y":0,"height":80,"width":640,"color":'#666'},
		{"id":"block3","x":720,"y":0,"height":450,"width":80,"color":'#666'},
		{"id":"block4","x":0,"y":560,"height":40,"width":80,"color":'#666'},
		{"id":"block5","x":720,"y":560,"height":40,"width":80,"color":'#666'},
		{"id":"block6","x":150,"y":560,"height":40,"width":500,"color":'#666'},
		{"id":"block7","x":720,"y":100,"height":80,"width":80,"color":'#666'}*/

		{"id":"block1","x":100,"y":100,"height":80,"width":80,"color":'#666'},
		{"id":"block2","x":380,"y":100,"height":80,"width":80,"color":'#666'},
		{"id":"block3","x":100,"y":250,"height":80,"width":80,"color":'#666'},
		{"id":"block4","x":380,"y":250,"height":80,"width":80,"color":'#666'},
		{"id":"block5","x":640,"y":175,"height":80,"width":80,"color":'#666'}

		];

		objects2 = [

		

		]
			//alert("Asda");
			c = document.getElementById("supermarket");
			cont = c.getContext('2d');

			draw();
			createMapObjects();

		}

		function draw(){
			for(var i=0; i < objects.length; i++){
				cont.fillStyle = objects[i].color;
				cont.fillRect(objects[i].x,objects[i].y,objects[i].width,objects[i].height);
			}

		}

		function update(){
			for(var i=0; i < objects.length; i++){
				cont.fillStyle = objects[i].color;
				cont.fillRect(objects[i].x,objects[i].y,objects[i].width,objects[i].height);
			}
		}

		function createMapObjects(){
			//map = new Map();
			for(var i=0; i < objects.length; i++){
				mapita.set(objects[i].id,objects[i]); 
			}
		}


		function findShortestPath(){
			 graph = new Graph(map);

			 var ar = ["block1","block5"];
			console.log(graph.findShortestPath(ar));

			var path = graph.findShortestPath('block1', 'block5');
			drawLines(path);

		}

		function drawLines(arr){

			for(var i=0;i<arr.length-1;i++){
				cont.beginPath();
				cont.moveTo(mapita.get(arr[i]).x, mapita.get(arr[i]).y);
				cont.lineTo(mapita.get(arr[i+1]).x, mapita.get(arr[i+1]).y);
				cont.stroke();
			}
		}

		window.onload = setObjects();
