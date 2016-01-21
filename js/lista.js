(function(){
	window.addEventListener("load",function(){
		var casas = document.getElementsByTagName("article");
		for(var i = 0; i <= casas.length -3; i++){
			var casa = casas.item(i);
			var precio = casa.getElementsByClassName("precio").item(0);
			var reservar = casa.getElementsByClassName("reservar").item(0);
			reservar.addEventListener("click",function(){
				sessionStorage.getItem("precio", precio.textContent);
				location.replace("reserva.html");
			});
		}
	})
})()