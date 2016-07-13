
     function sidebar(){
        $('.ui.sidebar')
        .sidebar('toggle')
        ;
    }

    function selectedProduct(n){

    		console.log("antes "+map.get(n.value).color)
    		if(map.get(n.value).color == '#666') map.get(n.value).color = '#002EB8';
    		else map.get(n.value).color = '#666';
    		//modified.color = '#002EB8';
  			//map.set(n.value,modified);
  			var m = map.get(n.value);
  			alert("mis coordenas son x: "+m.x+" Y:"+m.y+" Largo: "+m.width+" alto: "+m.height);
  			console.log("color "+objects[0].color);
  			draw();
    }