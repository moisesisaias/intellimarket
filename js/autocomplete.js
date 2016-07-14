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
		if(searchProduct(mapProducts.get(selectProduct)) === -1){
			shoppingList.push(mapProducts.get(selectProduct));
		}
	}catch(error) {
		list.add(optiontag);
	}
	selectProduct.value = "";
	console.log(mapProducts.get(selectProduct));
	console.log(shoppingList);

}
function deleteProduct(){

	var selectProduct = document.getElementById("tags").value;
	var x = document.getElementById("listbox");
	console.log(x.selectedIndex);
	x.remove(x.selectedIndex);

	var pos = searchProduct(mapProducts.get(selectProduct));

	if(pos != -1){
			shoppingList.splice(pos,1);
	}
	console.log(shoppingList);
}

function searchProduct(value){

	res = -1;
	for(var i=0;i < shoppingList.length;i++){
		if(value === shoppingList[i]) res = i;
	}

	return res;

}
