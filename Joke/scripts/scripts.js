//OPCION 1 /////////////////////////////
$(document).ready(function () {
	
	$("#jokeButton").click(function (e) { 
		e.preventDefault();
		
		//limpiar lista //
		$("#joke").html(``);
		
		//recoger datos de json//
		$.get("http://api.icndb.com/jokes/random", function (data) {	
			$("#joke").html(`${data.value.joke}`);
		});		
	});

}); 

