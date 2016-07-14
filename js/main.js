	var objects; 
	var c;
	var cont;
	var mapita = new Map();

	function setObjects(){

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


		function findShortestPath(arr){
			 graph = new Graph(map);
			 arr.push("f6c4");
			 console.log("ddddddddd "+arr);

			console.log(graph.findShortestPath(arr));

			/*var path = graph.findShortestPath('block1', 'block5');
			drawLines(path);*/

		}

		function drawLines(arr){

			for(var i=0;i<arr.length-1;i++){
				cont.beginPath();
				cont.moveTo(mapita.get(arr[i]).x, mapita.get(arr[i]).y);
				cont.lineTo(mapita.get(arr[i+1]).x, mapita.get(arr[i+1]).y);
				cont.stroke();
			}
		}

		//window.onload = setObjects();
