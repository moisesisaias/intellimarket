var shoppingList = [];

function addProduct(){

	var selectProduct = document.getElementById("tags").value;
	console.log(selectProduct);
	var list = document.getElementById("listbox");
	var optiontag = document.createElement('option');
	var option = document.createTextNode(selectProduct);
	optiontag.appendChild(option);

	try {
		list.add(optiontag, null); 
		if(searchProduct(mapProducts.get(selectProduct),shoppingList) === -1){
			shoppingList.push(mapProducts.get(selectProduct));
		}
	}catch(error) {
		alert("error al agregar el articulo");
	}
	console.log(mapProducts.get(selectProduct));
	console.log(shoppingList);

}
function deleteProduct(){

	var selectProduct = document.getElementById("tags").value;
	var x = document.getElementById("listbox");
	var itemToDelete = x[x.selectedIndex].value;
	console.log("aver "+mapProducts.get(itemToDelete));
	var pos = searchProduct(mapProducts.get(itemToDelete),shoppingList);
	console.log("valor "+pos);
	if(pos != -1){
		if(pos === 0) shoppingList.pop();
			shoppingList.splice(pos,1);
			console.log(shoppingList);
	}
	x.remove(x.selectedIndex);
	
}

function searchProduct(value,arr){
	console.log("val "+value+" arr"+arr);
	res = -1;
	for(var i=0;i < arr.length;i++){
		if(value == arr[i]) res = i;
	}

	return res;

}
