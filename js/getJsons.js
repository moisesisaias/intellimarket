
// THIS CODE DOES A GET REQUEST TO READ THE PRODUCTOS FORM A JSON FILE
var map;
var products;

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
		// $.each(products, function(i, option) {

		// 			// $('#sel').append($('<option/>').attr("value",option.id).text(option.title));
		// 		});
		//console.log("VEAMOS "+map.get('block1'));

		$("#tags").autocomplete({
			source: products
           


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