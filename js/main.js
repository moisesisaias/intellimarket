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

			

			var path = graph.findShortestPath(arr);
			console.log(path);
			drawLinesxy(path);

		}

		function drawLinesxy(arr){

			for(var i=0;i<arr.length-1;i++){
				cvx.beginPath();
				cvx.moveTo(nodes[arr[i]].x * pW,nodes[arr[i]].y  * pH);
				cvx.lineTo(nodes[arr[i+1]].x  * pW,nodes[arr[i+1]].y   * pW);
				cvx.stroke();
			}
		}

		//window.onload = setObjects();
