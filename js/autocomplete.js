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
	console.log(x.selectedIndex);
	x.remove(x.selectedIndex);

	var pos = searchProduct(mapProducts.get(selectProduct),shoppingList);

	if(pos != -1){
			shoppingList.splice(pos,1);
	}
	console.log(shoppingList);
}

function searchProduct(value,arr){

	res = -1;
	for(var i=0;i < arr.length;i++){
		if(value === arr[i]) res = i;
	}

	return res;

}
