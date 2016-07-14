
// THIS CODE DOES A GET REQUEST TO READ THE PRODUCTOS FORM A JSON FILE
var map;
var mapProducts = new Map();
var products;
var cadenaProducts = [];

$(document).ready(function(){
	var jqxhr = $.getJSON( "./data/products.json", function(){
		console.log( "get Request initialized" );
	})
	.done(function(data) {
		products = data.products;
	})
	.fail(function() {
		console.log( "error getting products.json");
	});

	jqxhr.complete(function() {		
		console.log( "products loaded sucessfully" );
		for(var i=0; i < products.length; i++){
			cadenaProducts.push(products[i].title);
			mapProducts.set(products[i].title,products[i].node);
		}
				$("#tags").autocomplete({
				source: cadenaProducts
		});
	});
});


$(document).ready(function(){
	var jqxhr = $.getJSON("./data/cadenaMap.json", function(){
		console.log( "get Request initialized" );
	})
	.done(function(data) {
		map = data;
	})
	.fail(function() {
		console.log( "error in the request");
	});

	jqxhr.complete(function() {
		console.log("Cadena Map created sucessfully");
	});
});




// THIS CODE DOES A GET REQUEST TO READ THE PRODUCTOS FORM A JSON FILE