//OPCION 1 /////////////////////////////
$(document).ready(function () {
	
	$("#jokeButton").click(function (e) { 
		//eliminar el comportamiento por defecto del enlace
		e.preventDefault();		
		
		//recoger datos de json//
		$.get("http://api.icndb.com/jokes/random", function (data) {	
			$("#joke").html(`${data.value.joke}`);
		});		
	});

}); 
