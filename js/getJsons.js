
// THIS CODE DOES A GET REQUEST TO READ THE PRODUCTOS FORM A JSON FILE

var products;

		$(document).ready(function(){
			var jqxhr = $.getJSON( "./data/products.json", function(){
				console.log( "Request initialized" );
			})
			.done(function(data) {
				products = data.products;
			})
			.fail(function() {
				console.log( "error in the request");
			});

jqxhr.complete(function() {
			
		$.each(products, function(i, option) {
					$('#sel').append($('<option/>').attr("value",option.id).text(option.title));
				});
		console.log("VEAMOS "+map.get('block1'));
	});
});

	


// THIS CODE DOES A GET REQUEST TO READ THE PRODUCTOS FORM A JSON FILE