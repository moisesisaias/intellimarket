	var objects; 
	var c;
	var cont;
	var map;

	function setObjects(){

		objects = [

		{"id":"block1","x":0,"y":0,"height":450,"width":80,"color":'#666'},
		{"id":"block2","x":80,"y":0,"height":80,"width":640,"color":'#666'},
		{"id":"block3","x":720,"y":0,"height":450,"width":80,"color":'#666'},
		{"id":"block4","x":0,"y":560,"height":40,"width":80,"color":'#666'},
		{"id":"block5","x":720,"y":560,"height":40,"width":80,"color":'#666'},
		{"id":"block6","x":150,"y":560,"height":40,"width":500,"color":'#666'},
		{"id":"block7","x":720,"y":100,"height":80,"width":80,"color":'#666'}

		];
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
			map = new Map();
			for(var i=0; i < objects.length; i++){
				map.set(objects[i].id,objects[i]);
			}
		}


		window.onload = setObjects();
