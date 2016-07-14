$( function() {
	// var availableTags = [
	// "ActionScript",
	// "AppleScript",
	// "Asp",
	// "BASIC",
	// "C",
	// "C++",
	// "Clojure",
	// "COBOL",
	// "ColdFusion",
	// "Erlang",
	// "Fortran",
	// "Groovy",
	// "Haskell",
	// "Java",
	// "JavaScript",
	// "Lisp",
	// "Perl",
	// "PHP",
	// "Python",
	// "Ruby",
	// "Scala",
	// "Scheme"
	// ];

	
} );

function addProduct(){

	var SelectProduct = document.getElementById("tags").value;
	console.log(SelectProduct);
	var list = document.getElementById("listbox");
	var optiontag = document.createElement('option');
	var option = document.createTextNode(SelectProduct);
	optiontag.appendChild(option);
	try {
		list.add(optiontag, null); 

	}catch(error) {
		list.add(optiontag);
	}
	SelectProduct.value = " ";

}

function deleteProduct(){

	var x = document.getElementById("listbox");
	console.log(x.selectedIndex);
	x.remove(x.selectedIndex);
}

function searchProduct(){



}
